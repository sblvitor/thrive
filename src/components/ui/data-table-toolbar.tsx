import { Table } from '@tanstack/react-table'
import React from 'react'
import DataTableFacetedFilter from './data-table-faceted-filter'
import { categories } from '@/models/controle/data'

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export default function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    
    const isFiltered = table.getState().columnFilters.length > 0
    
    return (
        <div className='flex items-center space-x-2'>
            { table.getColumn('category') &&
                <DataTableFacetedFilter 
                    column={table.getColumn('category')}
                    title='Categorias'
                    options={categories}
                />
            }
        </div>
    )
}
