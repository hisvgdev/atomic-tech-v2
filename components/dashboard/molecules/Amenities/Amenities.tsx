import code from '@/public/assets/icons/code.svg'
import colorPallete from '@/public/assets/icons/colorPallete.svg'
import global from '@/public/assets/icons/global.svg'
import magnifier from '@/public/assets/icons/magnifer.svg'
import playbackSpeed from '@/public/assets/icons/playbackSpeed.svg'
import smartphone from '@/public/assets/icons/smartphone.svg'
import threeSquares from '@/public/assets/icons/threeSquares.svg'
import Chip from '@/shared/global/Chip'
import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { AmenitiesProps } from './Amenities.types'
import AmenitiesCard from './AmenitiesCard'

const mockAmenitiesData = [
    {
        id: uuidv4(),
        title: 'Исследования',
        description: 'UX-аналитика, брифинг, CJM и прочее, для достижения максимального результата',
        icon: magnifier,
    },
    {
        id: uuidv4(),
        title: 'Дизайн',
        description: 'Современный дизайн для веб и мобайл на базе качественного UI/UX',
        icon: colorPallete,
    },
    {
        id: uuidv4(),
        title: 'Веб-разработка',
        description:
            'Цифровые продукты: интернет-магазины, корпоративные сайты, кабинеты, сервисы, интеграции и т.д.',
        icon: global,
    },
    {
        id: uuidv4(),
        title: 'Мобильная разработка',
        description: 'Подчеркнем индивидуальность вашего бизнеса через уникальный продукт',
        icon: smartphone,
    },
    {
        id: uuidv4(),
        title: 'Брендинг',
        description:
            'Сервисный и коммуникационный дизайн для веб и мобайл на базе пользовательского опыта',
        icon: threeSquares,
    },
    {
        id: uuidv4(),
        title: 'Blockchain',
        description: 'Передовые технологии не только для Crypto, но и для бизнеса.',
        icon: code,
    },
    {
        id: uuidv4(),
        title: 'Контент-продакшн',
        description: '3D-графика, motion и копирайтинг для качественной упаковки ваших продуктов',
        icon: playbackSpeed,
    },
]

export const Amenities: FC<AmenitiesProps> = () => {
    return (
        <section
            data-dark="true"
            className="bg-gradient-to-r from-[#00636F] to-[#000809] w-full py-24 px-7 rounded-[3.125rem]"
        >
            <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center gap-8 lg:justify-between xl:flex-row xl:gap-0">
                    <div className="flex flex-col items-center gap-10 xl:flex-row">
                        <h1 className="font-bold text-9xl text-white">Услуги</h1>
                        <p className="max-w-md text-white font-normal text-base">
                            Наш подход к работе лежит в плоскости аналитики, ярких дизайн решений и,
                            как итог, построении эффективной коммуникации
                        </p>
                    </div>
                    <Chip number="3" title="Компетенции" maxW="max-w-64" isDark />
                </div>
                <div className="w-full grid grid-cols-1 items-center gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {mockAmenitiesData.map((amenties, indx) => {
                        return <AmenitiesCard key={`${indx}-${amenties.id}`} {...amenties} />
                    })}
                </div>
            </div>
        </section>
    )
}
