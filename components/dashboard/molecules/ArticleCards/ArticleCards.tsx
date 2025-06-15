import firstBlog from '@/public/assets/images/blog/firstBlog.png'
import lastBlog from '@/public/assets/images/blog/lastBlog.png'
import secondBlog from '@/public/assets/images/blog/secondBlog.png'
import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ArticleCard from '../../../../shared/global/ArticleCard'
import { ArticleCardsProps } from './ArticleCards.types'

const mockDataCards = [
    {
        id: uuidv4(),
        title: 'Как создать уникальное приложение всего за 4 месяца?',
        date: new Date().toISOString().split('T')[0],
        imgCover: firstBlog,
    },
    {
        id: uuidv4(),
        title: 'Wordpress - это быстро? Но что если мы расскажем вам о новых.',
        date: new Date().toISOString().split('T')[0],
        imgCover: secondBlog,
    },
    {
        id: uuidv4(),
        title: 'Как понять что вы именно тот клиент с которым не хотят работать?',
        date: new Date().toISOString().split('T')[0],
        imgCover: lastBlog,
    },
]

export const ArticleCards: FC<ArticleCardsProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-wrap items-center gap-4">
            {mockDataCards.map((blog, indx) => (
                <ArticleCard key={`${indx}-${blog.title}`} {...blog} classNames="max-w-xs" />
            ))}
        </div>
    )
}
