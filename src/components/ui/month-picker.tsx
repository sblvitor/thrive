'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import MonthCalendar from './month-calendar'
import { ptBR } from 'date-fns/locale/pt-BR'

export default function MonthPicker() {

    const [date, setDate] = React.useState<Date>(new Date())
    const [popoverOpen, setPopoverOpen] = React.useState(false)

    return (
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        "justify-start text-left font-normal gap-2",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className='h-5 w-5' />
                    {date ? <span className='capitalize'>{format(date, 'MMMM, yyyy', {locale: ptBR})}</span> : <span>Escolha um mês</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent align='start'>
                <MonthCalendar 
                    currentMonth={date} 
                    onMonthChange={(newMonth: Date) => {
                        setDate(newMonth)
                        setPopoverOpen(false)
                    }} 
                />
            </PopoverContent>
        </Popover>
    )
}
