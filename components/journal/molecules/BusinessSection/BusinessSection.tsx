import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { BusinessSectionProps } from './BusinessSection.types'

export const BusinessSection: FC<BusinessSectionProps> = (props) => {
    const {} = props
    return (
        <div className="w-full flex flex-col gap-y-4">
            <Heading title="Бизнес" desc="Как зарабатывать больше, а работать меньше" path="/" />
            <div className="w-full flex items-center gap-x-3">
                {Array.from({ length: 4 }).map((_, indx) => (
                    <ArticleCard
                        key={indx}
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={lastBlog}
                        classNames="w-full lg:max-w-md"
                    />
                ))}
            </div>
        </div>
    )
}
