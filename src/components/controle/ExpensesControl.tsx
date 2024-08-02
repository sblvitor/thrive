'use client'

import React from 'react'
import MonthPicker from '../ui/month-picker'
import { Button } from '../ui/button'
import { PlusCircle, Wallet } from 'lucide-react'

export default function ExpensesControl() {
    return (
        <>
            <div className='w-full flex items-center justify-between'>
                <h1 className='font-bold text-3xl flex items-center gap-3'>Gerenciamento Mensal <Wallet /> </h1>
                <div className='flex items-center space-x-4'>
                    <MonthPicker />
                    <Button size={'sm'} className='gap-1'>
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Adicionar Gasto</span>
                    </Button>
                </div>
            </div>
        </>
    )
}
