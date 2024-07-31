'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import MonthCalendar from './month-calendar'
import { ptBR } from 'date-fns/locale/pt-BR'

export default function MonthPicker() {

    const [date, setDate] = React.useState<Date>(new Date())
    const [popoverOpen, setPopoverOpen] = React.useState(false)

    function addOrRemoveMonth(currentDate: Date, add: boolean): Date {
        const newDate = new Date(currentDate);
        const day = newDate.getDate();

        // Set to first of the month to handle month overflow
        newDate.setDate(1);
        add ? newDate.setMonth(newDate.getMonth() + 1) : newDate.setMonth(newDate.getMonth() - 1);

        // Set the date back to the original day, or the last day of the new month if the original day doesn't exist
        // const lastDayOfNewMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
        // newDate.setDate(Math.min(day, lastDayOfNewMonth));

        return newDate;
    }

    return (
        <div className='flex gap-2 items-center'>
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
            <div className='flex gap-1'>
                <Button variant={'outline'} size={'icon'} onClick={() => setDate(prevDate => addOrRemoveMonth(prevDate, false))}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant={'outline'} size={'icon'} onClick={() => setDate(prevDate => addOrRemoveMonth(prevDate, true))}>
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
