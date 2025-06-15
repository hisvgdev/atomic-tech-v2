import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import ArticleCard from '@/shared/global/ArticleCard'
import React, { FC } from 'react'

import Heading from '../Heading'
import { EmailSectionProps } from './EmailSection.types'

export const EmailSection: FC<EmailSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false">
            <div className="flex flex-col gap-y-4">
                <Heading
                    title="E-mail"
                    desc="Учимся писать письма, работать с базой, зарабатывать на email-маркетинге"
                    path="/"
                />
                <div className="flex items-center gap-x-5">
                    <div className="flex-1 h-[44rem]">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full h-full lg:max-w-3xl"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2.5">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2.5">
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            imgCover={firstBlog}
                            classNames="w-full lg:max-w-md"
                        />
                        <ArticleCard
                            title="Как создать уникальное приложение всего за 4 месяца ?"
                            date="29.04.2025"
                            classNames="w-full lg:max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
