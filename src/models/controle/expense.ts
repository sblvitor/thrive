export type Expense = {
    id: string
    amount: number
    category: 'bills' | 'shopping' | 'goals' | 'investment'
    date: string
}

// mock data
export const expenses: Expense[] = [
    {
        id: '1',
        amount: 233,
        category: 'bills',
        date: '22/07/2024'
    },
    {
        id: '2',
        amount: 19.9,
        category: 'shopping',
        date: '22/07/2024'
    },
    {
        id: '3',
        amount: 1200,
        category: 'goals',
        date: '22/07/2024'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024'
    },
]