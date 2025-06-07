'use client'

import { MotionButton } from '@/shared/custom/motion/MotionButton'
import { ArrowRightIcon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'

import { BenefitsRightSideProps } from './BenefitsRightSide.types'

export const BenefitsRightSide: FC<BenefitsRightSideProps> = (props) => {
    const {} = props
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center gap-14 max-w-xl w-full">
            <div className="flex flex-col gap-8">
                <h3 className="text-white font-bold text-5xl leading-14">
                    Создайте свой уникальный цифровой продукт уже сейчас
                </h3>
                <p className="text-white/70 text-2xl">
                    Стремимся к результату и без лишних слов доказываем это на наших проектах
                </p>
            </div>
            <MotionButton
                className="relative w-full py-8 rounded-full flex items-center cursor-pointer overflow-hidden"
                style={{
                    transition: 'border-color 0.3s ease',
                    background: 'linear-gradient(to bottom left, #00636F, #000809)',
                }}
                animate={{
                    boxShadow: isHover ? '0 0 0 1px #676767' : 'none',
                    gap: isHover ? '2rem' : '1.5rem',
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{ opacity: isHover ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: '#000' }}
                />

                <span className="relative font-medium text-lg text-white" style={{ zIndex: 10 }}>
                    Обсудить проект
                </span>
                <ArrowRightIcon size={32} color="white" className="relative z-10" />
            </MotionButton>
        </div>
    )
}
