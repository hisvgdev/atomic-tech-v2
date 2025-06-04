'use client'

import { MotionButton } from '@/shared/custom/MotionButton'
import { ArrowRightIcon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export const Benefits = () => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className="flex justify-center items-center flex-col gap-12">
            <h1 className="font-bold text-7xl">Масштабируем бизнес через IT</h1>
            <section
                data-dark="true"
                className="w-full bg-black py-[7.75rem] px-[5.18rem] rounded-[3.125rem]"
            >
                <div className="flex items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                        {/* Left Side */}
                        <div></div>
                        {/* Right Side */}
                        <div className="flex flex-col items-center justify-center gap-14 max-w-lg w-full">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-white font-bold text-5xl">
                                    Создайте свой уникальный цифровой продукт уже сейчас
                                </h3>
                                <p className="text-white/70 text-2xl">
                                    Стремимся к результату и без лишних слов доказываем это на наших
                                    проектах
                                </p>
                            </div>
                            <MotionButton
                                className="relative w-full py-8 rounded-full flex items-center cursor-pointer overflow-hidden"
                                style={{
                                    borderStyle: 'solid',
                                    borderWidth: '1px',
                                    borderColor: 'rgba(0,0,0,0)',
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

                                <span
                                    className="relative font-medium text-lg text-white"
                                    style={{ zIndex: 10 }}
                                >
                                    Обсудить проект
                                </span>
                                <ArrowRightIcon size={32} color="white" className="relative z-10" />
                            </MotionButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
