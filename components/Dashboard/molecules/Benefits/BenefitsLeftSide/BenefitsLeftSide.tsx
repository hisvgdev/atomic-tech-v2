'use client'

import { motion } from 'motion/react'
import React, { FC, useState } from 'react'

import { BenefitsLeftSideProps } from './BenefitsLeftSide.types'

const mockMetrics = [
    {
        id: 'project',
        value: '70',
        content: 'реализованных проектов',
    },
    {
        id: 'summary',
        value: '1,2',
        additionalValue: 'млрд',
        content: 'Капитализация проектов',
    },
    {
        id: 'client',
        value: '80',
        content: 'Довольных клиентов',
    },
    {
        id: 'experience',
        value: '5+',
        content: 'Лет опыта',
    },
]

export const BenefitsLeftSide: FC<BenefitsLeftSideProps> = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="max-w-2xl grid grid-cols-2 gap-1.5">
            {mockMetrics.map((item, index) => {
                const isHovered = hoveredIndex === index

                return (
                    <div className="relative" key={`${index}-${item.id}`}>
                        <motion.div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                transition: 'border-color 0.3s ease',
                                backgroundColor: '#090F10',
                            }}
                            animate={{
                                boxShadow: isHovered ? '0 0 0 1px #676767' : 'none',
                                gap: isHovered ? '2rem' : '1.5rem',
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full p-12 rounded-[1.875rem]"
                        >
                            <motion.div
                                className="absolute inset-0 z-10 brightness-125 rounded-[1.875rem] pointer-events-none"
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background:
                                        'linear-gradient(to bottom right, #00636F, #000809)',
                                }}
                            />
                            <div className="flex flex-col items-start gap-2 relative z-20">
                                <div className="flex items-end">
                                    <h4
                                        className={`font-bold text-9xl ${!isHovered ? 'text-white/50' : 'text-white'}`}
                                    >
                                        {item.value}
                                    </h4>
                                    {item.additionalValue && (
                                        <span
                                            className={`font-bold pb-2 ${!isHovered ? 'text-white/50' : 'text-white'}`}
                                        >
                                            {item.additionalValue.toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <p
                                    className={`font-normal text-lg whitespace-nowrap ${!isHovered ? 'text-white/30' : 'text-white'}`}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}
