import AuthenticatedNavbar from '@/components/AuthenticatedNavbar'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <AuthenticatedNavbar />
            {children}
        </div>
    )
}
