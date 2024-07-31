'use client'

import React from 'react'
import MonthPicker from '../ui/month-picker'
import { Button } from '../ui/button'
import { ListFilter, PlusCircle } from 'lucide-react'
import { DataTable } from '../ui/data-table'
import { columns } from '@/app/(authenticated)/controle/columns'
import { Expense } from '@/models/controle/expense'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function ExpensesControl({data}: {data: Expense[]}) {
    return (
        <>
            <div className='w-full flex items-center justify-between'>
                <MonthPicker />
                <div className='flex space-x-4 items-center'>
                    <Button variant={'outline'} size={'sm'} className='gap-1'>
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filtrar</span>
                    </Button>
                    <Button size={'sm'} className='gap-1'>
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Adicionar Gasto</span>
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
            {/* <Card>
                <CardHeader>
                    <CardTitle>Controle de gastos</CardTitle>
                    <CardDescription>
                        Gastos do mês de julho
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={data} />
                </CardContent>
            </Card> */}
        </>
    )
}
