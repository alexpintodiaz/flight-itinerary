import { AirportCode, Flight } from '@/interfaces/itinerary'
import { FC } from 'react'
import { Plane } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface FlightCardProps {
  flight: Flight
}

export const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const { origin, destination, date } = flight

  const airportsNames: Record<AirportCode, string> = {
    BAQ: 'Ernesto Cortissoz',
    BOG: 'El Dorado',
    BGA: 'Palonegro',
    CLO: 'Alfonso Bonilla Aragon',
    CTG: 'Rafael Núñez',
    MDE: 'José María Córdova',
    EOH: 'Olaya Herrera',
    SMR: 'Simón Bolivar',
  }

  return (
    <div className='w-full my-4 border-solid border-2 border-[#4559A4]/70 rounded-3xl shadow-md'>
      <div className='relative px-8 pt-12 pb-10 flex flex-row justify-between'>
        <span className='absolute top-1 left-4 font-mono text-xs'>{date}</span>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className='pr-4 relative cursor-default'>{origin}</div>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>{airportsNames[origin]}</p>
          </TooltipContent>
        </Tooltip>

        <div className='hidden sm:flex w-full self-center bg-[#EF4935] h-0.5'></div>
        <div className='px-4'>
          <Plane className='opacity-50' />
        </div>
        <div className='hidden sm:flex w-full self-center bg-[#EF4935] h-0.5'></div>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className='pl-4'>{destination}</div>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>{airportsNames[destination]}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
