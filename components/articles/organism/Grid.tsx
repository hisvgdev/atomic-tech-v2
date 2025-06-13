import Banner from '@/components/journal/molecules/Banner'
import { Tags } from '@/components/journal/molecules/Tags/Tags'

import ArticlesCards from '../molecules/ArticlesCards'

export const Grid = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <Banner />
            <Tags />
            <hr />
            <ArticlesCards />
        </div>
    )
}
