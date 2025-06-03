import { Manrope } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/globals.css'

import AppLayout from '@/shared/global/AppLayout'

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'Atomic Code - Разработка программного обеспечения',
        template: '%s | Atomic Code',
    },
    description:
        'Создание инновационных решений и разработка программного обеспечения командой Atomic Code.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
    keywords: [
        'Atomic Code',
        'разработка программного обеспечения',
        'технологии',
        'инновации',
        'софт',
        'сайты',
        'web-разработка',
        'blockchain-разработка',
        'мобильные приложения',
    ],
    creator: 'Atomic Code',
    category: 'Технологии и Разработка',
    twitter: {
        card: 'summary_large_image',
        title: 'Atomic Code - Разработка программного обеспечения',
        description:
            'Создание инновационных решений, сервисов, и разработка программного обеспечения командой Atomic Code.',
        images: [
            {
                url: '/assets/images/metadata/root-atomic-code-image.png',
                width: 1200,
                height: 630,
                alt: 'Atomic Code - Разработка программного обеспечения',
            },
        ],
    },
    openGraph: {
        title: 'Atomic Code - Разработка программного обеспечения',
        description:
            'Создание инновационных решений и разработка программного обеспечения командой Atomic Code.',
        url: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
        type: 'website',
        images: [
            {
                url: '/assets/images/metadata/root-atomic-code-image.png',
                width: 1200,
                height: 630,
                alt: 'Atomic Code - Разработка программного обеспечения',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} antialiased`}>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    )
}
