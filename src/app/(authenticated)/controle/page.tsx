import { Expense, expenses } from '@/models/controle/expense'
import React from 'react'
import { DataTable } from '../../../components/ui/data-table'
import { columns } from './columns'

async function getData(): Promise<Expense[]> {
    // TODO mock api call, do skeletons
    return expenses
}

export default async function Page() {

    const data = await getData()

    return (
        <main className="flex flex-col min-h-screen items-center justify-between p-24">
            <DataTable columns={columns} data={data} />
        </main>
    )
}
