'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Expense } from "@/models/controle/expense" // You can use a Zod schema here if you want. TODO ver depois
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Expense>[] = [
    {
        accessorKey: "date",
        header: "Data"
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-start">Quantia</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: 'currency',
                currency: 'BRL',
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "category",
        header: "Categoria",
        // provavelmente ira sair - customizavel pelo usuario
        cell: ({ row }) => {
            function formatCategory(): string {
                switch(row.getValue("category")) {
                    case 'bills': return 'Contas'
                    case 'shopping': return 'Compras'
                    case 'goals': return 'Metas'
                    case 'investment': return 'Investimento'
                    default: return ''
                }
            }

            return <div className="font-medium">{formatCategory()}</div>
        }
    },
    {
        accessorKey: "paymentMethod",
        header: "Método",
        cell: ({ row }) => {
            function formatPaymentMethod(): string {
                switch(row.getValue("paymentMethod")) {
                    case 'pix': return 'Pix'
                    case 'credit': return 'Crédito'
                    case 'debit': return 'Débito'
                    case 'slip': return 'Boleto'
                    default: return ''
                }
            }

            return <div>{formatPaymentMethod()}</div>
        }
    },  
    {
        id: "actions",
        // header: 'Ações',
        cell: ({ row }) => {
            const expense = row.original
        
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => {}}
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
      },
]