import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeModeToggle from './ThemeModeToggle'

export default function AuthenticatedNavbar() {
    return (
        <nav className='bg-background border-b'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link 
                    className='flex items-center space-x-1'
                    href={'/'}
                >
                    <Image 
                        src={'/iconLogo.png'}
                        alt='logo'
                        width={32}
                        height={32}
                    />
                    <span className='text-2xl font-bold'>Thrive</span>
                </Link>
                <div className='w-full hidden md:flex items-center justify-between md:w-auto'>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 font-medium'>
                        <li>
                            <Link
                                href={'#'}
                            >
                                Controle
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'#'}
                            >
                                Metas
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'#'}
                            >
                                Investimentos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ThemeModeToggle />
                </div>
            </div>
        </nav>
    )
}
