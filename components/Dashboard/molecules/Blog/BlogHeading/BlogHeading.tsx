import GradientButton from '@/shared/custom/GradientButton'
import React, { FC } from 'react'

import { BlogHeadingProps } from './BlogHeading.types'

export const BlogHeading: FC<BlogHeadingProps> = (props) => {
    const {} = props
    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-7xl">Все об IT</h1>
                <span className="font-normal text-2xl">Уже в нашем блоге</span>
            </div>
            <GradientButton
                hasIsRoute
                routePath="/cases"
                title="Перейти в блог"
                classNames="py-8 rounded-full text-white"
            />
        </div>
    )
}
