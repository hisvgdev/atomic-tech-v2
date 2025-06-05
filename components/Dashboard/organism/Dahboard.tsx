import React from 'react'

import AllProjectsButton from '../molecules/AllProjectsButton'
import Benefits from '../molecules/Benefits'
import CustomSolutions from '../molecules/CustomSolutions'
import Hero from '../molecules/Hero'
import LastProjects from '../molecules/LastProjects'
import Showreel from '../molecules/Showreel'

export const Dashboard = () => {
    return (
        <div className="w-full h-full">
            <Hero />
            <div className="flex flex-col gap-16 px-7">
                <Benefits />
                <LastProjects />
                <AllProjectsButton />
                <Showreel />
                <CustomSolutions />
            </div>
        </div>
    )
}
