import React, { FC } from 'react'

import { CustomSolutionsProps } from './CustomSolutions.types'
import { CustomSolutionsFeedback } from './CustomSolutionsFeedback/CustomSolutionsFeedback'
import CustomSolutionsHeader from './CustomSolutionsHeader'

export const CustomSolutions: FC<CustomSolutionsProps> = (props) => {
    const {} = props

    return (
        <section data-dark="false" className="flex flex-col gap-16">
            <CustomSolutionsHeader />
            <CustomSolutionsFeedback />
        </section>
    )
}
