import { Table } from '@tanstack/react-table'
import React from 'react'

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export default function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    
    const isFiltered = table.getState().columnFilters.length > 0
    
    return (
        <div>data-table-toolbar</div>
    )
}
