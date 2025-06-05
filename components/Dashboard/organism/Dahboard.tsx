import React from 'react'

import AllProjectsButton from '../molecules/AllProjectsButton'
import Benefits from '../molecules/Benefits'
import Hero from '../molecules/Hero'
import LastProjects from '../molecules/LastProjects'

export const Dashboard = () => {
    return (
        <div className="w-full h-full">
            <Hero />
            <div className="flex flex-col gap-16">
                <Benefits />
                <LastProjects />
                <AllProjectsButton />
            </div>
        </div>
    )
}
