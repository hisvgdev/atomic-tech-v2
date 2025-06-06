import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
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
            <Link
                href="#"
                className="flex items-center gap-6 px-20 py-5 rounded-full bg-transparent ring ring-black"
            >
                <span className="text-black font-medium text-lg">Перейти в блог</span>
                <ArrowRightIcon size={24} weight="light" />
            </Link>
        </div>
    )
}
