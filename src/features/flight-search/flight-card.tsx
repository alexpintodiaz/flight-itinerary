import { Flight } from '@/interfaces/itinerary'
import { FC } from 'react'

interface FlightCardProps {
  flight: Flight
}

export const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const { origin, destination, duration, date } = flight

  return (
    <div className='w-full border-solid border-2 rounded-3xl shadow-md'>
      <div className='relative px-8 pt-12 pb-10 flex flex-row justify-between'>
        <span className='absolute top-1 left-4 font-mono text-xs'>{date}</span>

        <div className='pr-4'>{origin}</div>
        <div className='hidden sm:flex w-full self-center bg-gray-200 h-0.5 dark:bg-gray-700'></div>
        <div className='px-4'>{duration}</div>
        <div className='hidden sm:flex w-full self-center bg-gray-200 h-0.5 dark:bg-gray-700'></div>
        <div className='pl-4'>{destination}</div>
      </div>
    </div>
  )
}
