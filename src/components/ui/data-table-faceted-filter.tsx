import { Column } from '@tanstack/react-table'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'
import { CheckIcon, PlusCircleIcon } from 'lucide-react'
import { Command, CommandGroup, CommandItem, CommandList } from './command'
import { cn } from '@/lib/utils'

interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
        icon?: React.ComponentType<{ className?: string }>
    }[]
}

export default function DataTableFacetedFilter<TData, TValue>({ 
    column,
    title,
    options
}: DataTableFacetedFilterProps<TData, TValue>) {

    // TODO check why i cant select

    const facets = column?.getFacetedUniqueValues()
    const selectedValues = new Set(column?.getFilterValue() as string[])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'outline'} size={'sm'} className='h-8 border-dashed'>
                    <PlusCircleIcon className='mr-2 h-4 w-4' />
                    {title}
                    {/* { selectedValues?.size > 0 && () } TODO finish this part */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0' align='start'>
                <Command>
                    <CommandList>
                        <CommandGroup>
                            { options.map((option) => {
                                const isSelected = selectedValues.has(option.value)
                                return (
                                    <CommandItem 
                                        key={option.value} 
                                        onSelect={() => { 
                                            if(isSelected) {
                                                selectedValues.delete(option.value)
                                            } else {
                                                selectedValues.add(option.value)
                                            }

                                            const filterValues = Array.from(selectedValues)
                                            column?.setFilterValue(filterValues.length ? filterValues : undefined)
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                                isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
                                            )}
                                        >
                                            <CheckIcon className='h-4 w-4' />
                                        </div>
                                        {option.icon && (
                                            <option.icon className='mr-2 h-4 w-4 text-muted-foreground' />
                                        )}
                                        <span>{option.label}</span>
                                        { facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
