import { useState, FC } from 'react'
import { Check, PlaneTakeoff, PlaneLanding } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { AirportCode } from '@/interfaces/itinerary'

const destinations = [
  {
    value: 'BAQ',
    label: 'Barranquilla - BAQ',
  },
  {
    value: 'BOG',
    label: 'Bogotá - BOG',
  },
  {
    value: 'BGA',
    label: 'Bucaramanga - BGA',
  },
  {
    value: 'CLO',
    label: 'Cali - CLO',
  },
  {
    value: 'CTG',
    label: 'Cartagena - CTG',
  },

  {
    value: 'MDE',
    label: 'Medellín - MDE',
  },
  {
    value: 'EOH',
    label: 'Medellín - EOH',
  },

  {
    value: 'SMR',
    label: 'Santa Marta - SMR',
  },
]

type FlightType = 'arrival' | 'departure'

interface SearchInputProps {
  flightType: FlightType
  airportCode: AirportCode | null
  setAirportCode: (value: AirportCode) => void
  hideAirport: AirportCode | null
}

export const SearchInput: FC<SearchInputProps> = ({
  flightType,
  airportCode,
  setAirportCode,
  hideAirport,
}) => {
  const [open, setOpen] = useState(false)

  const buttonPlaceholder = flightType === 'arrival' ? 'Destino' : 'Origen'

  const filteredDestinations = destinations.filter(
    (dest) => dest.value !== hideAirport,
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-60 sm:w-[200px] justify-between'>
          {flightType === 'arrival' ? (
            <PlaneLanding className='opacity-50' />
          ) : (
            <PlaneTakeoff className='opacity-50' />
          )}

          {airportCode
            ? destinations.find((dest) => dest.value === airportCode)?.label
            : buttonPlaceholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command
          filter={(value, search, keywords = []) => {
            const extendValue = value + ' ' + keywords.join(' ')
            if (extendValue.toLowerCase().includes(search.toLowerCase())) {
              return 1
            }
            return 0
          }}>
          <CommandInput placeholder='Buscar aeropuerto' />
          <CommandList>
            <CommandEmpty>No se encuntran aeropuertos</CommandEmpty>
            <CommandGroup>
              {filteredDestinations.map((dest) => (
                <CommandItem
                  key={dest.value}
                  value={dest.value}
                  keywords={[dest.label]}
                  onSelect={(currentValue) => {
                    setAirportCode(currentValue as AirportCode)
                    setOpen(false)
                  }}>
                  {dest.label}
                  <Check
                    className={cn(
                      'ml-auto text-[#EF4935]',
                      airportCode === dest.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
