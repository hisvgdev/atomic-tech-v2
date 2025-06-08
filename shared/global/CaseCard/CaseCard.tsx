import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import GradientButton from '@/shared/custom/GradientButton'
import { StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React, { FC } from 'react'

import { CaseCardProps } from './CaseCard.types'

export const CaseCard: FC<CaseCardProps> = (props) => {
    const { badgeContent, coverImage, id, description, tags, title } = props

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardContent className="flex flex-col gap-3 w-full h-full px-4">
                {/* cover image */}
                <div className="relative w-full h-full overflow-hidden rounded-[1.875rem] ring ring-primary-200">
                    <Image
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover rounded-[1.875rem]"
                    />
                    {/* benefits badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                        {badgeContent.map((badge, indxBdg) => (
                            <div
                                key={`${indxBdg}-${badge.title}`}
                                className="bg-[#1C274C] min-w-80 rounded-full py-2.5 px-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-white rounded-full flex items-center justify-center">
                                        <StarIcon color="#1C274C" size={12} weight="fill" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white text-xs font-bold">
                                            {badge.title}:
                                        </h4>
                                        <p className="text-white text-xs font-normal max-w-80 truncate">
                                            {badge.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* content */}
                <CardHeader className="p-0">
                    <div className="w-full flex items-start justify-between mt-4">
                        <div className="flex flex-col gap-4 max-w-lg">
                            <CardTitle className="text-3xl font-extrabold truncate">
                                {title}
                            </CardTitle>
                            <CardDescription className="font-medium text-sm">
                                {description}
                            </CardDescription>
                        </div>
                        <GradientButton
                            hasIsRoute
                            routePath={`/cases/${id}`}
                            title="Сайт"
                            classNames="py-6 rounded-full"
                        />
                    </div>
                </CardHeader>

                {/* tags */}
                <CardFooter className="w-full flex items-center flex-wrap gap-2 mt-4 p-0">
                    {tags.map((tag, indxTag) => (
                        <div
                            key={`${indxTag}-${tag.title}`}
                            className="px-4 py-3 rounded-full ring ring-primary-100"
                        >
                            <div className="flex items-center gap-3">
                                <Image src={tag.icon} alt={tag.title} />
                                <span className="text-xs font-bold text-[#0F0F0F]">
                                    {tag.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </CardFooter>
            </CardContent>
        </Card>
    )
}
