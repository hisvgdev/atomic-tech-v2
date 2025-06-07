'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { forwardRef } from 'react'

import { categoryFilter, serviceFilter, technologyFilter } from './CaseFilter.constants'
import { CaseFilterProps } from './CaseFilter.types'

export const CaseFilter = forwardRef<HTMLDivElement, CaseFilterProps>((props, ref) => {
    const { isFilterOpen } = props
    return (
        <div className="absolute top-0 right-1 z-20" ref={ref}>
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        className="max-w-2xl min-h-[52rem] ring ring-[#E6E6E6]/50 rounded-3xl p-6"
                        style={{
                            backdropFilter: 'blur(20px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col gap-y-8">
                            <h3 className="font-bold text-3xl">Фильтры</h3>
                            <div className="flex flex-col gap-y-8 grow">
                                <FilterGroup title="Услуга" items={serviceFilter} />
                                <FilterGroup title="Категория" items={categoryFilter} />
                                <FilterGroup title="Технология" items={technologyFilter} />
                                <button
                                    type="button"
                                    className="max-w-64 w-full py-5 font-bold text-sm cursor-pointer ring ring-gray-300 rounded-full hover:bg-black hover:text-white hover:ring-black transition-all"
                                >
                                    Сбросить настройки
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})

CaseFilter.displayName = 'CaseFilter'

type FilterItem = {
    id: string
    title: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

type FilterGroupProps = {
    title: string
    items: FilterItem[]
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, items }) => (
    <div className="flex flex-col gap-y-2">
        <h4 className="font-bold text-base">{title}</h4>
        <div className="flex items-center flex-wrap gap-1.5">
            {items.map(({ id, title, Icon }, idx) => (
                <button
                    key={`${id}-${idx}`}
                    className="rounded-full bg-white ring ring-[#E6E6E6] group transition-all cursor-pointer py-3 px-7 flex items-center gap-x-2 hover:bg-black hover:ring-black"
                    type="button"
                >
                    <Icon className="w-5 h-5 group-hover:stroke-white transition-colors" />
                    <span className="font-bold text-xs text-black group-hover:text-white">
                        {title}
                    </span>
                </button>
            ))}
        </div>
    </div>
)
