import { useCallback, useMemo, useState } from 'react'
import { itinerary } from '@/assets/data/itinerary'
import { AirportCode, Flight } from '@/interfaces/itinerary'
import {
  adjustDates,
  closestDate,
  formatDate,
  getWeekDay,
} from '@/utils/format-date'

export interface SearchResults {
  directFlights: {
    sameDay: Flight[]
    nextDays: Flight[]
  }
  connectingFlights: Flight[][]
}

export const useFlightSearch = () => {
  const [loading, setLoading] = useState(false)
  const [flightsFound, setFlightsFound] = useState<SearchResults>({
    directFlights: { sameDay: [], nextDays: [] },
    connectingFlights: [],
  })

  const [departure, setDeparture] = useState<AirportCode | null>(null)
  const [arrival, setArrival] = useState<AirportCode | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleDepartureChange = useCallback(
    (value: AirportCode) => setDeparture(value),
    [],
  )

  const handleArrivalChange = useCallback(
    (value: AirportCode) => setArrival(value),
    [],
  )

  const handleDateChange = useCallback((value: Date) => setDate(value), [])

  const flightItinerary = useMemo(() => itinerary, [])

  const isDisabled = useMemo(
    () => !departure || !arrival || !date,
    [departure, arrival, date],
  )

  const searchFlights = useCallback(
    (origin: AirportCode, destination: AirportCode, date: Date) => {
      setLoading(true)

      const formattedDate = formatDate(date)

      const searchDay = getWeekDay(date)

      const results: SearchResults = {
        directFlights: { sameDay: [], nextDays: [] },
        connectingFlights: [],
      }

      // Direct flights (same day)
      for (const airplane of flightItinerary) {
        for (const flight of airplane.schedule) {
          if (
            flight.origin === origin &&
            flight.destination === destination &&
            flight.day === searchDay
          ) {
            flight.date = formattedDate
            results.directFlights.sameDay.push(flight)
          }
        }
      }

      // Direct flights (later days) - Search up to 7 days later
      if (results.directFlights.sameDay.length === 0) {
        let nextDate = new Date(date)
        for (let i = 1; i <= 7; i++) {
          nextDate.setDate(nextDate.getDate() + 1)

          const nextFormattedDate = formatDate(nextDate)
          const nextDay = getWeekDay(nextDate)
          for (const airplane of flightItinerary) {
            for (const flight of airplane.schedule) {
              if (
                flight.origin === origin &&
                flight.destination === destination &&
                flight.day === nextDay
              ) {
                flight.date = nextFormattedDate
                results.directFlights.nextDays.push(flight)
                break
              }
            }
            if (results.directFlights.nextDays.length > 0) break
          }
          if (results.directFlights.nextDays.length > 0) break
        }
      }

      //  Flights with stopover (if there are no direct flights)
      if (
        results.directFlights.sameDay.length === 0 &&
        results.directFlights.nextDays.length === 0
      ) {
        for (const airplane of flightItinerary) {
          for (const flight1 of airplane.schedule) {
            if (flight1.origin === origin) {
              const firstFlightDate = closestDate(date, flight1.day)

              flight1.date = firstFlightDate
              for (const airplane2 of flightItinerary) {
                for (const flight2 of airplane2.schedule) {
                  if (
                    flight2.origin === flight1.destination &&
                    flight2.destination === destination
                  ) {
                    const secondFlightDate = closestDate(date, flight2.day)
                    const { endDate } = adjustDates(
                      firstFlightDate,
                      secondFlightDate,
                    )

                    flight2.date = endDate
                    results.connectingFlights.push([flight1, flight2])
                  }
                }
              }
            }
          }
        }
      }

      setFlightsFound(results)

      setLoading(false)
    },
    [origin, date],
  )

  return {
    handleDepartureChange,
    handleArrivalChange,
    handleDateChange,
    flightItinerary,
    date,
    departure,
    arrival,
    isDisabled,
    searchFlights,
    loading,
    flightsFound,
  }
}
