import Link from 'next/link'
import React from 'react'

export default function AuthenticatedNavbar() {
    return (
        <nav className='bg-slate-800 border-gray-200 dark:bg-white'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link 
                    className='text-white'
                    href={'/'}
                >
                    Logo
                </Link>
                <div className='w-full hidden md:flex items-center justify-between md:w-auto'>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 text-white font-medium'>
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
                    Perfil, logout...
                </div>
            </div>
        </nav>
    )
}
