import React from 'react'

import { CaseHeading } from '../molecules/CaseHeading/CaseHeading'
import Cases from '../molecules/Cases'

export const Grid = () => {
    return (
        <div className="flex flex-col gap-y-20 py-20">
            <CaseHeading />
            <Cases />
        </div>
    )
}
