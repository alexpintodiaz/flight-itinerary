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

  // md:w-7/12

  return (
    <section className='w-5/6 sm:w-3/4 md:w-9/12 lg:w-[700px] xl:w-[800px]'>
      <div className='flex flex-col md:flex-row flex-wrap gap-3 '>
        <SearchInput
          flightType='departure'
          airportCode={departure}
          setAirportCode={handleDepartureChange}
          hideAirport={arrival}
        />
        <SearchInput
          flightType='arrival'
          airportCode={arrival}
          setAirportCode={handleArrivalChange}
          hideAirport={departure}
        />
        <DateInput date={date} setDate={handleDateChange} />
        <Button
          className='bg-[#4559A4] hover:bg-[#4559A4]/90 max-md:w-20'
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
