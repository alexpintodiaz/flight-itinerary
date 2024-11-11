import { useState, FC } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { es } from 'date-fns/locale'

interface DateInputProps {
  date: Date | undefined
  setDate: (value: Date) => void
}

export const DateInput: FC<DateInputProps> = ({ date, setDate }) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-60 justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}>
          <CalendarIcon />
          {date ? (
            format(date, 'PPP', { locale: es })
          ) : (
            <span>Fecha de viaje</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(date) => {
            if (date) {
              setDate(date)
              setOpen(false)
            }
          }}
          disabled={(date) => date <= new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
