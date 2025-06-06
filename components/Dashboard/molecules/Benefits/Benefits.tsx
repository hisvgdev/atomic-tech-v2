import React from 'react'

import BenefitsLeftSide from './BenefitsLeftSide'
import { BenefitsRightSide } from './BenefitsRightSide/BenefitsRightSide'

export const Benefits = () => {
    return (
        <section data-dark="true" className="flex justify-center items-center flex-col gap-12">
            <h1 className="font-bold text-7xl">Масштабируем бизнес через IT</h1>
            <div className="w-full bg-black py-[7.75rem] px-[5.18rem] rounded-[3.125rem]">
                <div className="grid grid-cols-1 lg:flex lg:justify-between lg:items-center">
                    <BenefitsLeftSide />
                    <BenefitsRightSide />
                </div>
            </div>
        </section>
    )
}
