'use client'

import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

export default function CreateCategoryCard() {
    return (
        <Card>
            <CardHeader className='pb-3'>
                <CardTitle>Novas Categorias</CardTitle>
                <CardDescription className="max-w-xl leading-relaxed">
                    Crie novas categorias que combinem mais com o seu estilo de controle financeiro!
                    Defina as porcentagens de gastos para cada categoria.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={() => {}}>
                    <Plus className='mr-1 h-5 w-5' /> Criar Categoria
                </Button>
            </CardFooter>
        </Card>
    )
}
