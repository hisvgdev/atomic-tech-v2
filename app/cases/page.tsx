import Grid from '@/components/cases/organism'
import { Metadata } from 'next'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
    title: 'Кейсы',
    description: 'Страница кейсов, демонстрирующая проекты, разработанные командой Atomic Code.',
    keywords: 'портфолио, проекты, Atomic команда, разработки, кейсы, технологии',
    metadataBase: baseURL ? new URL(baseURL) : undefined,
    openGraph: {
        title: 'Кейсы',
        description:
            'Страница кейсов, демонстрирующая проекты, разработанные командой Atomic Code.',
        url: baseURL ? new URL(baseURL) : undefined,
        type: 'website',
        images: [
            {
                url: `${baseURL ? new URL(baseURL) : ''}/assets/images/metadata/portfolio-image.png`,
                width: 1200,
                height: 630,
                alt: 'Кейсы от команды Atomic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Кейсы',
        description: 'Страница кейсы, демонстрирующая проекты, разработанные командой Atomic Code.',
        images: [
            {
                url: `${baseURL ? new URL(baseURL) : ''}/assets/images/metadata/portfolio-image.png`,
                width: 1200,
                height: 630,
                alt: 'Кейсы от команды Atomic Code.',
            },
        ],
    },
    category: 'Кейсы',
}

export default function Cases() {
    return <Grid />
}
