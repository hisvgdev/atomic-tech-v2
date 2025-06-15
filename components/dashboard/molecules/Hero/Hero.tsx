import drawingBannerIcon from '@/public/assets/images/drawingBanner.svg'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <section data-dark="false" className="w-full flex justify-center items-center py-24">
            <Image src={drawingBannerIcon} alt="drawing-banner-icon" />
        </section>
    )
}
