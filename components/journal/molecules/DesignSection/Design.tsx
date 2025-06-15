import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { DesignSectionProps } from './Design.types'

export const DesignSection: FC<DesignSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="w-full flex flex-col gap-y-2.5">
            <Heading
                title="Дизайн"
                desc="Руководства и сервисы, в том числе для недизайнеров"
                path="/"
            />
            <div className="flex flex-col justify-center items-center gap-y-2.5">
                <div className="flex items-center gap-x-3 w-full">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца ?"
                        date="29.04.2025"
                        imgCover={lastBlog}
                        classNames="w-full"
                    />
                </div>
                <div className="flex items-center gap-x-3">
                    {Array.from({ length: 4 }).map((_, indx) => (
                        <ArticleCard
                            key={indx}
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full lg:max-w-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
