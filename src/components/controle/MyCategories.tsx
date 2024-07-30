import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, Edit, Plus } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Pagination, PaginationContent, PaginationItem } from '../ui/pagination'

export default function MyCategories() {

    const today = new Date().toLocaleDateString('pt-BR', {month: 'long', year: 'numeric'})
    
    return (
        <Card className='overflow-hidden'>
            <CardHeader className='bg-muted/50 flex flex-row items-start'>
                <div className='grid gap-0.5'>
                    <CardTitle className='text-xl'>Minhas categorias</CardTitle>
                    <CardDescription>
                        {today.replace(/^./, str => str.toUpperCase())}
                    </CardDescription>
                </div>
                <div className='ml-auto'>
                    <Button variant={'outline'} size={'icon'}>
                        <Plus />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className='pt-6 text-sm'>
                {/* map.. */}
                <div className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Contas - <span>28,00%</span></span>
                        <Button variant={'ghost'} size={'sm'}>
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
                <Separator className="my-4" />
                <div className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Compras - <span>30,00%</span></span>
                        <Button variant={'ghost'} size={'sm'}>
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
                <Separator className="my-4" />
                <div className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Compras - <span>30,00%</span></span>
                        <Button variant={'ghost'} size={'sm'}>
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
                <Separator className="my-4" />
                <div className='grid gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Compras - <span>30,00%</span></span>
                        <Button variant={'ghost'} size={'sm'}>
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
            </CardContent>
            <CardFooter className='bg-muted/50 flex items-center border-t px-6 py-2 w-full'>
                <Pagination className='ml-auto mr-0 w-auto'>
                    <PaginationContent>
                        <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ChevronLeft className="h-3.5 w-3.5" />
                            <span className="sr-only">Página anterior</span>
                        </Button>
                        </PaginationItem>
                        <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ChevronRight className="h-3.5 w-3.5" />
                            <span className="sr-only">Próxima página</span>
                        </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    )
}
