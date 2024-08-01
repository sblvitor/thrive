'use client'

import React from 'react'
import MonthPicker from '../ui/month-picker'
import { Button } from '../ui/button'
import { ListFilter, PlusCircle } from 'lucide-react'
import { DataTable } from '../ui/data-table'
import { columns } from '@/app/(authenticated)/controle/columns'
import { Expense } from '@/models/controle/expense'
import { 
    DropdownMenu, 
    DropdownMenuCheckboxItem, 
    DropdownMenuContent, 
    DropdownMenuGroup, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from '../ui/dropdown-menu'

// TODO: adicionar checked change, refatorar

export default function ExpensesControl({data}: {data: Expense[]}) {
    return (
        <>
            <div className='w-full flex items-center justify-between'>
                <MonthPicker />
                <div className='flex space-x-4 items-center'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={'outline'} size={'sm'} className='gap-1'>
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filtrar</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className='w-56'>
                            <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Contas
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Compras
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
                                    Metas
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Investimento
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
                                    Pix
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Crédito
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Débito
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem onCheckedChange={() => {}}>
                                    Boleto
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size={'sm'} className='gap-1'>
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Adicionar Gasto</span>
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </>
    )
}
