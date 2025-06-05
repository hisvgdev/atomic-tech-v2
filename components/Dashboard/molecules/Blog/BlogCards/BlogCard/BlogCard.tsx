import Image from 'next/image'
import React, { FC } from 'react'

import { BlogCardProps } from './BlogCard.types'

export const BlogCard: FC<BlogCardProps> = (props) => {
    const { date, imgCover, title } = props
    return (
        <div className="max-w-xs h-96 bg-black p-5 rounded-4xl flex flex-col justify-between">
            <div className="flex flex-col gap-5">
                <Image src={imgCover} alt={title} className="object-contain w-full max-h-48" />
                <h4 className="text-white font-semibold text-base">{title}</h4>
            </div>
            <span className="text-gray-300 font-light text-sm leading-6">{date}</span>
        </div>
    )
}
