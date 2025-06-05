import { Badge } from '@/components/ui/badge'
import React, { FC } from 'react'

import { ChipProps } from './Chip.types'

export const Chip: FC<ChipProps> = (props) => {
    const { maxW = 'max-w-64' } = props
    return (
        <div className={`w-full rounded-full ring ring-[#CACACA] py-3.5 px-4 ${maxW}`}>
            <div className="w-full flex items-center justify-between">
                <Badge className="w-9 h-9 rounded-full">1</Badge>
                <span className="font-medium text-base">Кейсы</span>
            </div>
        </div>
    )
}
