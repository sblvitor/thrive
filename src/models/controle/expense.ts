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
        date: '24/07/2024',
        paymentMethod: 'credit',
    },
    {
        id: '3',
        amount: 1200,
        category: 'goals',
        date: '18/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 650,
        category: 'investment',
        date: '17/07/2024',
        paymentMethod: 'debit'
    },
    {
        id: '4',
        amount: 650,
        category: 'shopping',
        date: '02/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 650,
        category: 'goals',
        date: '22/07/2024',
        paymentMethod: 'slip'
    },
    {
        id: '4',
        amount: 421.32,
        category: 'bills',
        date: '30/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 15,
        category: 'investment',
        date: '15/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 6.50,
        category: 'goals',
        date: '10/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 26.42,
        category: 'shopping',
        date: '16/07/2024',
        paymentMethod: 'pix'
    },
    {
        id: '4',
        amount: 236.65,
        category: 'shopping',
        date: '20/07/2024',
        paymentMethod: 'credit'
    },
    {
        id: '4',
        amount: 952.78,
        category: 'bills',
        date: '05/07/2024',
        paymentMethod: 'credit'
    },
]