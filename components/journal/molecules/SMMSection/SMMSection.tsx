import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { SMMSectionProps } from './SMMSection.types'

export const SMMSection: FC<SMMSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="bg-[#EEEFF5] py-14 px-9 w-full">
            <div className="flex flex-col gap-y-4">
                <Heading title="SMM" desc="Про социальные сети и мессенджеры" path="/" />
                <div className="w-full grid grid-cols-3 items-center gap-2.5">
                    {Array.from({ length: 6 }).map((_, indx) => (
                        <ArticleCard
                            key={indx}
                            title="Как приручить Яндекс: 13 операторов расширенного поиска"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
