// import { useFlightSearch } from '@/hooks/use-flight-search'
import { Button } from '@/components/ui/button'
import { DateInput } from './date-input'
import { SearchInput } from './search-input'

export const FlightSearch = () => {
  // const {flightItinerary } = useFlightSearch()

  return (
    <div className='flex flex-row gap-4'>
      <SearchInput flightType='departure' />
      <SearchInput flightType='arrival' />
      <DateInput />
      <Button>Buscar</Button>
    </div>
  )
}
