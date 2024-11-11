import { SearchResults } from '@/hooks/use-flight-search'
import { FC } from 'react'
import { FlightCard } from './flight-card'

interface FlightResultsProps {
  flights: SearchResults
}

export const FlightResults: FC<FlightResultsProps> = ({ flights }) => {
  const { directFlights, connectingFlights } = flights

  const hasFlightsSameDay = directFlights.sameDay.length > 0
  const hasFlightsNextDays = directFlights.nextDays.length > 0
  const hasConnectingFlights = connectingFlights.length > 0

  return (
    <section>
      {hasFlightsSameDay && (
        <div>
          <h3 className='mb-4'>
            Hemos encontrado un vuelo que se ajusta a tu busqueda:
          </h3>
          {directFlights.sameDay.map((flight) => (
            <FlightCard flight={flight} key={flight.city} />
          ))}
        </div>
      )}

      {hasFlightsNextDays && (
        <div>
          <h3 className='mb-4'>
            No hemos encontrado un vuelo para el dia de tu busqueda, pero te
            ofrecemos un vuelo en un proximo dia:
          </h3>
          {directFlights.nextDays.map((flight) => (
            <FlightCard flight={flight} key={flight.city} />
          ))}
        </div>
      )}

      {hasConnectingFlights && (
        <div>
          <h3 className='mb-4 text-sm md:text-base'>
            No hemos encontrado un vuelo directo, pero te ofrecemos alternativas
            con escala:
          </h3>
          {connectingFlights.map((flightsGroup, index) => (
            <div key={index}>
              {connectingFlights.length > 1 && (
                <h4 className='max-md:text-sm'>Opción {index + 1}</h4>
              )}

              <ul className='pb-4'>
                {flightsGroup.map((flight) => (
                  <FlightCard flight={flight} key={flight.city} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
