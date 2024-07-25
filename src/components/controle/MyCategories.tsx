import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'

export default function MyCategories() {
    return (
        <Card>
            <CardHeader className='bg-muted/50'>
                <CardTitle>Minhas categorias</CardTitle>
                <CardDescription>
                    Mês: Julho, 2024
                </CardDescription>
            </CardHeader>
            <CardContent className='pt-6 text-sm'>
                {/* map.. */}
                <div className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Contas - <span>28,00%</span></span>
                        <Button variant={'outline'} size={'sm'}>
                            <Edit className='w-3.5 h-3.5'/>
                        </Button>
                    </div>
                    <ul className='grid gap-3'>
                        <li className='flex items-center justify-between'>
                            <span className="text-muted-foreground">Valor total</span>
                            <span>R$ 1680,00</span>
                        </li>
                        <li className='flex items-center justify-between'>
                            <span className="text-muted-foreground">Valor gasto</span>
                            <span>R$ 428,00</span>
                        </li>
                        <li className='flex items-center justify-between'>
                            <span className="text-muted-foreground">Valor gasto %</span>
                            <span>25,47%</span>
                        </li>
                        <li className='flex items-center justify-between'>
                            <span className="text-muted-foreground">Restante</span>
                            <span>R$ 1252,00</span>
                        </li>
                    </ul>
                </div>
                {/* <Separator className="my-4" /> */}
            </CardContent>
        </Card>
    )
}
