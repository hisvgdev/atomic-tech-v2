import videoInDevelopmentIcon from '@/public/assets/images/icons/videoInDevelopment.svg'
import Image from 'next/image'
import React from 'react'

export const Showreel = () => {
    return (
        <div className="w-full h-full bg-black py-32  rounded-2xl flex items-center justify-center">
            <Image src={videoInDevelopmentIcon} alt="video-in-dev" />
        </div>
    )
}
