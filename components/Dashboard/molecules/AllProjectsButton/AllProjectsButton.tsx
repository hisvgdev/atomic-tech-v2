import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { FC } from 'react'

import { AllProjectsButtonProps } from './AllProjectsButton.types'

export const AllProjectsButton: FC<AllProjectsButtonProps> = (props) => {
    const {} = props
    return (
        <section data-dark="false">
            <Link
                href="#"
                className="flex justify-center items-center gap-4 ring ring-black py-12 rounded-2xl"
            >
                <span className="text-5xl font-bold">Все проекты</span>
                <ArrowRightIcon size={48} weight="bold" className="mt-3" />
            </Link>
        </section>
    )
}
