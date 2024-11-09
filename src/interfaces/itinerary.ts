type AirportCode = 'BOG' | 'MDE' | 'BAQ' | 'BGA' | 'SMR' | 'CTG' | 'CLO' | 'EOH'

type DayOfWeek =
  | 'Lunes'
  | 'Martes'
  | 'Miércoles'
  | 'Jueves'
  | 'Viernes'
  | 'Sábado'
  | 'Domingo'

interface Flight {
  day: DayOfWeek
  origin: AirportCode
  destination: AirportCode
  departureTime: string
  arrivalTime: string 
  duration: number
  city: string
}

export interface Airplane {
  id: number
  base: AirportCode
  schedule: Flight[]
}
