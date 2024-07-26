import { Expense, expenses } from '@/models/controle/expense'
import React from 'react'
import { DataTable } from '../../../components/ui/data-table'
import { columns } from './columns'
import CreateCategoryCard from '@/components/controle/CreateCategoryCard'
import MyCategories from '@/components/controle/MyCategories'
import { Metadata } from 'next'
import ExpenseIndicators from '@/components/controle/ExpenseIndicators'

export const metadata: Metadata = {
    title: "Thrive | Controle",
    description: "Controle de gastos mensais",
};

async function getData(): Promise<Expense[]> {
    // TODO mock api call, do skeletons
    return expenses
}

export default async function Page() {

    const data = await getData()

    return (
        <main className="flex flex-col min-h-screen items-center justify-between py-12 px-16">
            <div className='flex w-full space-x-8'>
                <div className='w-3/4 space-y-4'>
                    <CreateCategoryCard />
                    <ExpenseIndicators />
                    <DataTable columns={columns} data={data} />
                </div>
                <div className='w-1/4'>
                    <MyCategories />
                </div>
            </div>
        </main>
    )
}
