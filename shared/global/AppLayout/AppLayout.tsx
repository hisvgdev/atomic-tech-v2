import React, { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import { AppLayoutProps } from './AppLayout.props'

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="overflow-auto overscroll-none themed-scrollbar scroll-smooth h-fit">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
