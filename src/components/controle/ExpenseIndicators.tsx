'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import { Edit2 } from 'lucide-react'
import MonthPicker from '../ui/month-picker'

export default function ExpenseIndicators() {

    const thisMonth = new Date().toLocaleDateString('pt-BR', {month: 'long'})

    return (
        <div className='flex w-full space-x-4'>
            <Card  className='w-full'>
                <CardHeader className='pb-4'>
                    <CardTitle className='flex items-center gap-4 text-4xl'>
                        R$ 4567,00
                        <Button variant={'outline'} size={'icon'}>
                            <Edit2 className='h-5 w-5' />
                            <span className='sr-only'>Editar renda do mês</span>
                        </Button>
                    </CardTitle>
                    <CardDescription className='max-w-sm leading-relaxed'>
                        <span className='text-foreground'>Renda deste mês de {thisMonth}. </span>
                        <span>Por padrão, a renda do próximo mês será igual a renda deste mês.</span>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className='w-full'>
                <CardHeader className='pb-4'>
                    <CardTitle className='text-4xl'>R$ 2340,00</CardTitle>
                    <CardDescription>
                        Quantidade gasta neste mês
                    </CardDescription>
                </CardHeader>
                <CardContent className=''>
                    <div className='w-full flex items-center space-x-4'>
                        <Progress value={33} />
                        <span>33%</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
