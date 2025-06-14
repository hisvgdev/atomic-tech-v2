import React from 'react'

import AllProjectsButton from '../molecules/AllProjectsButton'
import Amenities from '../molecules/Amenities'
import Benefits from '../molecules/Benefits'
import Blog from '../molecules/Blog'
import CustomSolutions from '../molecules/CustomSolutions'
import Hero from '../molecules/Hero'
import LastProjects from '../molecules/LastProjects'
import LeaveRequest from '../molecules/LeaveRequest'
import Showreel from '../molecules/Showreel'

export const Grid = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-16">
                <Hero />
                <Benefits />
                <LastProjects />
                <AllProjectsButton />
                <Showreel />
                <CustomSolutions />
                <Amenities />
                <Blog />
                <LeaveRequest />
            </div>
        </div>
    )
}
