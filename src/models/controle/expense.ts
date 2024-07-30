export type Expense = {
    id: string
    amount: number
    category: 'bills' | 'shopping' | 'goals' | 'investment'
    date: string,
    paymentMethod: 'pix' | 'credit' | 'debit' | 'slip'
}

// mock data
export const julyExpenses: Expense[] = [
    {
        id: '1',
        amount: 233,
        category: 'bills',
        date: '22/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '2',
        amount: 19.9,
        category: 'shopping',
        date: '22/07/2024',
        paymentMethod: 'credit',
    },
    {
        id: '3',
        amount: 1200,
        category: 'goals',
        date: '22/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'debit'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'slip'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '22/07/2024',
        paymentMethod: 'credit'
    },
]