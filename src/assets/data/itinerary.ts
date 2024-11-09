import { Airplane } from '@/interfaces/itinerary'

export const itinerary: Airplane[] = [
  {
    id: 1,
    base: 'BOG',
    schedule: [
      {
        day: 'Lunes',
        origin: 'BOG',
        destination: 'MDE',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'Medellín',
      },
      {
        day: 'Lunes',
        origin: 'MDE',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'Medellín',
      },
      {
        day: 'Martes',
        origin: 'BOG',
        destination: 'BAQ',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Barranquilla',
      },
      {
        day: 'Martes',
        origin: 'BAQ',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Barranquilla',
      },
      {
        day: 'Miércoles',
        origin: 'BOG',
        destination: 'BGA',
        departureTime: '08:00',
        arrivalTime: '09:15',
        duration: 75,
        city: 'Bucaramanga',
      },
      {
        day: 'Miércoles',
        origin: 'BGA',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:15',
        duration: 75,
        city: 'Bucaramanga',
      },
      {
        day: 'Jueves',
        origin: 'BOG',
        destination: 'SMR',
        departureTime: '08:00',
        arrivalTime: '09:45',
        duration: 105,
        city: 'Santa Marta',
      },
      {
        day: 'Jueves',
        origin: 'SMR',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:45',
        duration: 105,
        city: 'Santa Marta',
      },
      {
        day: 'Viernes',
        origin: 'BOG',
        destination: 'CTG',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Cartagena',
      },
      {
        day: 'Viernes',
        origin: 'CTG',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Cartagena',
      },
      {
        day: 'Sábado',
        origin: 'BOG',
        destination: 'CLO',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Sábado',
        origin: 'CLO',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Domingo',
        origin: 'BOG',
        destination: 'EOH',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Domingo',
        origin: 'EOH',
        destination: 'BOG',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
    ],
  },
  {
    id: 2,
    base: 'MDE',
    schedule: [
      {
        day: 'Lunes',
        origin: 'MDE',
        destination: 'BGA',
        departureTime: '08:00',
        arrivalTime: '09:15',
        duration: 75,
        city: 'Bucaramanga',
      },
      {
        day: 'Lunes',
        origin: 'BGA',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:15',
        duration: 75,
        city: 'Bucaramanga',
      },
      {
        day: 'Martes',
        origin: 'MDE',
        destination: 'SMR',
        departureTime: '08:00',
        arrivalTime: '09:45',
        duration: 105,
        city: 'Santa Marta',
      },
      {
        day: 'Martes',
        origin: 'SMR',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:45',
        duration: 105,
        city: 'Santa Marta',
      },
      {
        day: 'Miércoles',
        origin: 'MDE',
        destination: 'CTG',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Cartagena',
      },
      {
        day: 'Miércoles',
        origin: 'CTG',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Cartagena',
      },
      {
        day: 'Jueves',
        origin: 'MDE',
        destination: 'CLO',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Jueves',
        origin: 'CLO',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Viernes',
        origin: 'MDE',
        destination: 'EOH',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Viernes',
        origin: 'EOH',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Sábado',
        origin: 'MDE',
        destination: 'BOG',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'Bogotá',
      },
      {
        day: 'Sábado',
        origin: 'BOG',
        destination: 'MDE',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'Bogotá',
      },
    ],
  },
  {
    id: 3,
    base: 'BAQ',
    schedule: [
      {
        day: 'Lunes',
        origin: 'BAQ',
        destination: 'SMR',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'Santa Marta',
      },
      {
        day: 'Lunes',
        origin: 'SMR',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'Santa Marta',
      },
      {
        day: 'Martes',
        origin: 'BAQ',
        destination: 'CTG',
        departureTime: '08:00',
        arrivalTime: '08:45',
        duration: 45,
        city: 'Cartagena',
      },
      {
        day: 'Martes',
        origin: 'CTG',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '14:45',
        duration: 45,
        city: 'Cartagena',
      },
      {
        day: 'Miércoles',
        origin: 'BAQ',
        destination: 'CLO',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Miércoles',
        origin: 'CLO',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Cali',
      },
      {
        day: 'Jueves',
        origin: 'BAQ',
        destination: 'EOH',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Jueves',
        origin: 'EOH',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Viernes',
        origin: 'BAQ',
        destination: 'BOG',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Viernes',
        origin: 'BOG',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Sábado',
        origin: 'BAQ',
        destination: 'MDE',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'Medellín',
      },
      {
        day: 'Sábado',
        origin: 'MDE',
        destination: 'BAQ',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'Medellín',
      },
    ],
  },
  {
    id: 4,
    base: 'CLO',
    schedule: [
      {
        day: 'Lunes',
        origin: 'CLO',
        destination: 'BOG',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Lunes',
        origin: 'BOG',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Martes',
        origin: 'CLO',
        destination: 'MDE',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Medellín',
      },
      {
        day: 'Martes',
        origin: 'MDE',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Medellín',
      },
      {
        day: 'Miércoles',
        origin: 'CLO',
        destination: 'EOH',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Miércoles',
        origin: 'EOH',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'El Eje Cafetero',
      },
      {
        day: 'Jueves',
        origin: 'CLO',
        destination: 'BAQ',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Barranquilla',
      },
      {
        day: 'Jueves',
        origin: 'BAQ',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Barranquilla',
      },
      {
        day: 'Viernes',
        origin: 'CLO',
        destination: 'BOG',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Viernes',
        origin: 'BOG',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:30',
        duration: 90,
        city: 'Bogotá',
      },
      {
        day: 'Sábado',
        origin: 'CLO',
        destination: 'MDE',
        departureTime: '08:00',
        arrivalTime: '09:00',
        duration: 60,
        city: 'Medellín',
      },
      {
        day: 'Sábado',
        origin: 'MDE',
        destination: 'CLO',
        departureTime: '14:00',
        arrivalTime: '15:00',
        duration: 60,
        city: 'Medellín',
      },
    ],
  },
]