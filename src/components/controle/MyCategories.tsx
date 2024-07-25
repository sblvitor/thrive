import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function MyCategories() {
    return (
        <Card>
            <CardHeader className='bg-muted/50'>
                <CardTitle>Minhas categorias</CardTitle>
                <CardDescription>
                    Mês: Julho, 2024
                </CardDescription>
            </CardHeader>
            <CardContent className='pt-6'>
                
            </CardContent>
        </Card>
    )
}
