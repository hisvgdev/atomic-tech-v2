import React, { FC } from 'react'

import { TAGS_DATA } from './Tags.constants'
import { TagsProps } from './Tags.types'

export const Tags: FC<TagsProps> = (props) => {
    const {} = props
    return (
        <div className="flex items-center justify-center gap-x-20">
            {TAGS_DATA.map(({ id, title }, indx) => {
                return (
                    <button
                        type="button"
                        key={`${indx}-${id}`}
                        className="cursor-pointer hover:text-black/50 transition-all"
                    >
                        {title}
                    </button>
                )
            })}
        </div>
    )
}
