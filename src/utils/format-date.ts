import { DayOfWeek } from '@/interfaces/itinerary'

const weekDays: DayOfWeek[] = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

export function getWeekDay(date: Date): DayOfWeek {
  const dayIndex = date.getDay()
  return weekDays[dayIndex === 0 ? 6 : dayIndex - 1]
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const closestDate = (date: Date, weekDay: DayOfWeek): string => {
  const basedate = new Date(date)

  const currentDay = getWeekDay(basedate)

  if (currentDay === weekDay) {
    return formatDate(basedate)
  }

  const currentIndex = weekDays.indexOf(currentDay)
  const searchIndex = weekDays.indexOf(weekDay)

  let difference = searchIndex - currentIndex

  if (difference <= 0) {
    difference += 7
  }

  basedate.setDate(basedate.getDate() + difference)

  return formatDate(basedate)
}

export function adjustDates(
  startDate: string,
  endDate: string,
): { startDate: string; endDate: string } {
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ]

  function parseCustomDate(dateStr: string): Date {
    const [_, day, month, year] = dateStr.toLowerCase().split(/[\s,]+/)
    const monthIndex = months.indexOf(month)

    return new Date(`${year}-${monthIndex + 1}-${day}`)
  }

  const parsedStartDate = parseCustomDate(startDate)
  const parsedEndDate = parseCustomDate(endDate)

  if (parsedEndDate < parsedStartDate) {
    parsedEndDate.setDate(parsedEndDate.getDate() + 7)
  }

  const formattedStartDate = startDate
  const formattedEndDate = `${parsedEndDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`

  return { startDate: formattedStartDate, endDate: formattedEndDate }
}
