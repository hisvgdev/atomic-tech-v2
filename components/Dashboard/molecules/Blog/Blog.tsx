import React, { FC } from 'react'

import { BlogProps } from './Blog.types'
import BlogCards from './BlogCards'
import BlogHeading from './BlogHeading'

const techMock = [
    '1C-Bitrix',
    'Wordpress',
    'Modx',
    'Webflow',
    'Next JS',
    'TypeScript',
    'React',
    'Three.js',
    'Python',
    'Node JS',
    'PHP',
    'GO',
    'Rust',
    'C++',
    'C#',
    'Java',
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
]

export const Blog: FC<BlogProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false" className="flex flex-col gap-y-12">
            <div className="flex items-center gap-x-8">
                <BlogCards />
                <BlogHeading />
            </div>
            <hr className="w-5xl bg-red-900" />
            <div className="flex items-start gap-x-16">
                <h4 className="font-medium text-sm max-w-32 text-gray-600">
                    Технологии применяемые в разработке
                </h4>
                <div className="grid grid-cols-5 gap-x-16 gap-y-2">
                    {techMock.map((tech, idx) => {
                        return (
                            <div key={`${tech}-${idx}`}>
                                <span className="font-extrabold text-base">{tech}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
