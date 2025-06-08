import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React, { FC } from 'react'

import { BlogCardProps } from './BlogCard.types'

export const BlogCard: FC<BlogCardProps> = (props) => {
    const { date, imgCover, title } = props
    return (
        <>
            <Card className="border-none shadow-none max-w-xs h-96 bg-black rounded-4xl flex flex-col justify-between">
                <CardHeader>
                    <CardTitle>
                        <Image
                            src={imgCover}
                            alt={title}
                            className="object-contain w-full max-h-48"
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h4 className="text-white font-semibold text-base">{title}</h4>
                </CardContent>
                <CardFooter>
                    <span className="text-gray-300 font-light text-sm leading-6">{date}</span>
                </CardFooter>
            </Card>
        </>
    )
}
