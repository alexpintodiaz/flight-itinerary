import { useFlightSearch } from '@/hooks/use-flight-search'
import { Button } from '@/components/ui/button'
import { DateInput } from './date-input'
import { SearchInput } from './search-input'
import { FC } from 'react'
import { FlightResults } from './flight-results'

export const FlightSearch: FC = () => {
  const {
    date,
    handleDateChange,
    departure,
    handleDepartureChange,
    arrival,
    handleArrivalChange,
    isDisabled,
    searchFlights,
    loading,
    flightsFound,
  } = useFlightSearch()

  return (
    <section>
      <div className='flex flex-row gap-4'>
        <SearchInput
          flightType='departure'
          airportCode={departure}
          setAirportCode={handleDepartureChange}
        />
        <SearchInput
          flightType='arrival'
          airportCode={arrival}
          setAirportCode={handleArrivalChange}
        />
        <DateInput date={date} setDate={handleDateChange} />
        <Button
          onClick={() => searchFlights(departure!, arrival!, date!)}
          disabled={isDisabled || loading}>
          {loading ? 'Cargando...' : 'Buscar'}
        </Button>
      </div>
      <div className='mt-8'>
        <FlightResults flights={flightsFound} />
      </div>
    </section>
  )
}
