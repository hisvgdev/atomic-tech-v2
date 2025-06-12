import Banner from '@/components/articles/molecules/Banner'
import { Tags } from '@/components/articles/molecules/Tags/Tags'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col gap-y-10">
            <Banner />
            <Tags />
            <hr />
            {children}
        </div>
    )
}
