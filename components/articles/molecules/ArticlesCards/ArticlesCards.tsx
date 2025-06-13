import ArticleCard from '@/shared/global/ArticleCard'
import { ArrowDownUp } from 'lucide-react'
import React, { FC } from 'react'

import { ArticlesCardsProps } from './ArticlesCards.types'

export const ArticlesCards: FC<ArticlesCardsProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-16">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-x-3.5">
                    <h1 className="font-bold text-5xl">Все статьи</h1>
                    <p className="text-5xl font-bold text-[#C4C4C4]">239 статей</p>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <button
                        type="button"
                        className="flex items-center gap-x-2.5 rounded-full py-2.5 px-5 border border-[#E6E6E6] cursor-pointer"
                    >
                        <ArrowDownUp size={18} />
                        <span className="font-medium text-sm">Просмотры</span>
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-x-2.5 rounded-full py-2.5 px-5 border border-[#E6E6E6] cursor-pointer"
                    >
                        <ArrowDownUp size={18} />
                        <span className="font-medium text-sm">По оценке</span>
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-x-2.5 rounded-full py-2.5 px-5 border border-[#E6E6E6] cursor-pointer"
                    >
                        <ArrowDownUp size={18} />
                        <span className="font-medium text-sm">По дате</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-4">
                {Array.from({ length: 12 }).map((_, indx) => (
                    <ArticleCard
                        key={indx}
                        title="Как приручить Яндекс: 13 операторов расширенного поиска"
                        withTag
                        tag="SEO"
                        date="29.04.2025"
                        rating={3}
                        ratingPosition="bottom"
                    />
                ))}
            </div>
        </div>
    )
}
