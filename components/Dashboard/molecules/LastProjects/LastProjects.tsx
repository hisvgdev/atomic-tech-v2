import { mockProjects } from '@/constants/project.constants'
import CaseCard from '@/shared/global/CaseCard'
import Chip from '@/shared/global/Chip'
import React, { FC } from 'react'

import { LastProjectsProps } from './LastProjects.types'

export const LastProjects: FC<LastProjectsProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false">
            <div className="flex flex-col gap-6">
                <div className="w-full flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between">
                    <h1 className="font-bold text-4xl md:text-7xl">Последние проекты</h1>
                    <Chip number="1" title="Кейсы" />
                </div>
                <div className="min-w-sm grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-2">
                    {mockProjects.map((project, indx) => {
                        return <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                    })}
                </div>
            </div>
        </section>
    )
}
