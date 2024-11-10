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
}

export const SearchInput: FC<SearchInputProps> = ({ flightType }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const buttonPlaceholder = flightType === 'arrival' ? 'Destino' : 'Origen'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'>
          {flightType === 'arrival' ? (
            <PlaneLanding className='opacity-50' />
          ) : (
            <PlaneTakeoff className='opacity-50' />
          )}

          {value
            ? destinations.find((dest) => dest.value === value)?.label
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
              {destinations.map((dest) => (
                <CommandItem
                  key={dest.value}
                  value={dest.value}
                  keywords={[dest.label]}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}>
                  {dest.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === dest.value ? 'opacity-100' : 'opacity-0',
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
