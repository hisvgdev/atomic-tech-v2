import appIcon from '@/public/assets/images/icons/app.svg'
import bagIcon from '@/public/assets/images/icons/bag.svg'
import bitrixIcon from '@/public/assets/images/icons/bitrix.svg'
import databaseIcon from '@/public/assets/images/icons/database.svg'
import pythonIcon from '@/public/assets/images/icons/python.svg'
import reactIcon from '@/public/assets/images/icons/react.svg'
import serviceIcon from '@/public/assets/images/icons/service.svg'
import firstProjectCoverImage from '@/public/assets/images/projects/firstProject.png'
import lastProjectCoverImage from '@/public/assets/images/projects/lastProject.png'
import secondProjectCoverImage from '@/public/assets/images/projects/secondProject.png'
import thirdProjectCoverImage from '@/public/assets/images/projects/thirdProject.png'
import Chip from '@/shared/global/Chip'
import { ArrowRightIcon, StarIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { LastProjectsProps } from './LastProjects.types'

const mockProjects = [
    {
        id: 'M-dental',
        title: '“M-Dental” сайт стоматологии',
        description:
            'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
        coverImage: firstProjectCoverImage,
        badgeContent: [
            {
                title: 'Увеличение продаж',
                description: '+260% в первый квартал после запуска',
            },
            {
                title: 'Рост конверсий',
                description: '+145% по сравнению с предыдущим сайтом',
            },
        ],
        tags: [
            {
                id: 'web',
                title: 'Интернет-магазин',
                icon: bagIcon,
            },
            {
                id: 'crm',
                title: '1c bitrix',
                icon: bitrixIcon,
            },
        ],
    },
    {
        id: 'Purple-People',
        title: 'Платформа клуба Purple People',
        description:
            'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
        coverImage: secondProjectCoverImage,
        badgeContent: [
            {
                title: 'Снижение показателя отказов',
                description: '-75% после редизайна',
            },
        ],
        tags: [
            {
                id: 'py',
                title: 'Python',
                icon: pythonIcon,
            },
            {
                id: 'framework',
                title: 'React',
                icon: reactIcon,
            },
            {
                id: 'db',
                title: 'SQLite',
                icon: databaseIcon,
            },
        ],
    },
    {
        id: 'TRIPLEH',
        title: 'Брендинг TRIPLE H',
        description:
            'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
        coverImage: thirdProjectCoverImage,
        badgeContent: [
            {
                title: 'Увеличение продаж',
                description: '+75% уникальных посетителей за 6 месяцев',
            },
        ],
        tags: [
            {
                id: 'app',
                title: 'Приложение',
                icon: appIcon,
            },
            {
                id: 'service',
                title: 'Сервис',
                icon: serviceIcon,
            },
            {
                id: 'framework',
                title: 'React',
                icon: reactIcon,
            },
        ],
    },
    {
        id: 'JKH',
        title: 'Сайт и приложение для ЖКХ-сервиса',
        description:
            'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
        coverImage: lastProjectCoverImage,
        badgeContent: [
            {
                title: 'Увеличение продаж',
                description: '+75% уникальных посетителей за 6 месяцев',
            },
        ],
        tags: [
            {
                id: 'app',
                title: 'Приложение',
                icon: appIcon,
            },
            {
                id: 'service',
                title: 'Сервис',
                icon: serviceIcon,
            },
            {
                id: 'framework',
                title: 'React',
                icon: reactIcon,
            },
        ],
    },
]

export const LastProjects: FC<LastProjectsProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false">
            <div className="flex flex-col gap-6">
                <div className="w-full flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between">
                    <h1 className="font-bold text-4xl md:text-7xl">Последние проекты</h1>
                    <Chip number="1" title="Кейсы" />
                </div>
                <div className="min-w-sm grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
                    {mockProjects.map((project, indx) => {
                        return (
                            <div key={`${project.id}-${indx + 1}`} className="w-full h-full">
                                <div className="flex flex-col gap-3 w-full h-full">
                                    {/* cover image */}
                                    <div className="relative w-full h-full overflow-hidden rounded-[1.875rem] ring ring-primary-200">
                                        <Image
                                            src={project.coverImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-[1.875rem]"
                                        />
                                        {/* benefits badge */}
                                        <div className="absolute bottom-4 left-4 flex items-center gap-4">
                                            {project.badgeContent.map((badge, indxBdg) => {
                                                return (
                                                    <div
                                                        key={`${indxBdg}-${badge.title}`}
                                                        className="bg-[#1C274C] min-w-80 rounded-full py-2.5 px-3"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-1 bg-white rounded-full flex items-center justify-center">
                                                                <StarIcon
                                                                    color="#1C274C"
                                                                    size={12}
                                                                    weight="fill"
                                                                />
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
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* content */}
                                    <div className="flex flex-col gap-4">
                                        <div className="w-full flex items-start justify-between">
                                            <div className="flex flex-col gap-4 max-w-lg">
                                                <h4 className="text-3xl font-extrabold truncate">
                                                    {project.title}
                                                </h4>
                                                <p className="font-medium text-sm">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <Link
                                                href="#"
                                                className="bg-transparent ring ring-black rounded-full py-2.5 px-5 flex items-center gap-2"
                                            >
                                                <span>Сайт</span>
                                                <ArrowRightIcon />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* tags */}
                                    <div className="w-full flex items-center flex-wrap gap-2">
                                        {project.tags.map((tag, indxTag) => {
                                            return (
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
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
