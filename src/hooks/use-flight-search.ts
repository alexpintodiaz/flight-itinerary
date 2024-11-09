import { useCallback, useMemo, useState } from 'react'
import { itinerary } from '@/assets/data/itinerary'

export const useFlightSearch = () => {
  const [loading, setLoading] = useState(false)

  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [date, setDate] = useState('')

  const handleDepartureChange = useCallback(
    (value: string) => setDeparture(value),
    [],
  )

  const handleArrivalChange = useCallback(
    (value: string) => setArrival(value),
    [],
  )

  const handleDateChange = useCallback((value: string) => setDate(value), [])

  const flightItinerary = useMemo(() => itinerary, [])

  return {
    handleDepartureChange,
    handleArrivalChange,
    handleDateChange,
    flightItinerary,
  }
}
