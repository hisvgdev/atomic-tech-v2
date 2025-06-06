import { Button } from '@/components/ui/button'
import Chip from '@/shared/global/Chip'
import React, { FC } from 'react'

import { CustomSolutionsHeaderProps } from './CustomSolutionsHeader.types'

export const CustomSolutionsHeader: FC<CustomSolutionsHeaderProps> = (props) => {
    const {} = props
    return (
        <div className="flex items-start justify-between w-full px-8 py-12">
            {/* Бейдж */}
            <div className="grow">
                <Chip number="2" title="Отзывы" maxW="max-w-44" />
            </div>
            <div className="flex items-end">
                <div className="flex justify-center items-end flex-col gap-14">
                    {/* Текст */}
                    <div className="flex items-center justify-center">
                        <h4 className="leading-tight max-w-4xl">
                            <span className="block font-bold text-7xl text-black">
                                Мы накопили большой опыт в разработке
                            </span>
                            <span className="block font-bold text-7xl text-primary-200">
                                кастомных решений.
                            </span>
                        </h4>
                    </div>
                    {/* Категории, как на скриншоте */}
                    <div className="grid grid-cols-3 whitespace-nowrap gap-x-10 gap-y-4 mt-12 text-xl text-gray-600 font-medium">
                        <span>
                            Индивидуальные решения <sup>11</sup>
                        </span>
                        <span>
                            Интернет магазины <sup>10</sup>
                        </span>
                        <span>
                            Retail <sup>15</sup>
                        </span>
                        <span>
                            Web3 <sup>2</sup>
                        </span>
                        <span>
                            Web-сайты <sup>1</sup>
                        </span>
                        <span>
                            FMCG <sup>8</sup>
                        </span>
                    </div>
                </div>
                {/* Кнопка добавления отзыва */}
                <Button className="border bg-transparent rounded-full py-6 px-8 text-lg font-medium flex items-center gap-2 cursor-pointer text-black hover:bg-transparent">
                    Добавить отзыв <span className="text-xl">+</span>
                </Button>
            </div>
        </div>
    )
}
