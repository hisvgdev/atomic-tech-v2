import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { NewSectionProps } from './NewSection.types'

export const NewSection: FC<NewSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="flex flex-col gap-y-4">
            <Heading title="Новое" desc="Самые свежие статьи в Proger" path="/" />
            <div className="flex items-center justify-center gap-x-5 w-full">
                <div className="flex flex-col grow gap-y-2.5">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        imgCover={firstBlog}
                        classNames="w-full h-full"
                        withTag
                        ratingPosition="bottom"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full h-full"
                        withTag
                        ratingPosition="bottom"
                    />
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        imgCover={firstBlog}
                        withTag
                        ratingPosition="bottom"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        withTag
                        ratingPosition="bottom"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        withTag
                        ratingPosition="bottom"
                    />
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        withTag
                        ratingPosition="bottom"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        withTag
                        ratingPosition="bottom"
                    />
                    <ArticleCard
                        title="Как создать уникальное приложение всего за 4 месяца?"
                        date="29.04.2025"
                        classNames="w-full lg:max-w-sm"
                        imgCover={firstBlog}
                        withTag
                        ratingPosition="bottom"
                    />
                </div>
            </div>
        </section>
    )
}
