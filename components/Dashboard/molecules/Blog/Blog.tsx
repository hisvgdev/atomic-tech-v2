import { technologies } from '@/constants/tech.constants'
import Image from 'next/image'
import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogCards from './BlogCards'
import BlogHeading from './BlogHeading'

export const Blog: FC<BlogProps> = () => {
    return (
        <section data-dark="false" className="flex flex-col gap-y-12">
            <div className="flex items-center gap-x-8">
                <BlogCards />
                <BlogHeading />
            </div>
            <hr className="w-5xl bg-red-900" />
            <div className="flex items-start gap-x-16">
                <h4 className="font-medium text-sm max-w-32 text-gray-600">
                    Технологии, применяемые в разработке
                </h4>
                <div className="grid grid-cols-5 gap-x-16 gap-y-4">
                    {technologies.map((tech, idx) => (
                        <div
                            key={`${tech.name}-${idx}`}
                            className="flex items-center gap-x-2 rounded-full border border-[#E6E6E6] p-3.5"
                        >
                            <Image
                                src={tech.icon}
                                alt={`${tech.name}-icon`}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                            <span className="font-extrabold text-xs">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
