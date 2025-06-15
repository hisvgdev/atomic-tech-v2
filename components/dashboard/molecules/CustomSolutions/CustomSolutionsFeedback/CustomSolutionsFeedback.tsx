'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import 'swiper/css'

import { StarIcon } from '@phosphor-icons/react'

const mockFeedbackData = [
    {
        id: uuidv4(),
        title: 'Кот Овсянников',
        company: 'MTS Group',
        star: 4,
        description:
            'Я сотрудничал с этой компанией по созданию корпоративного сайта. Они проявили высокий уровень профессионализма и внимательности к деталям. Особенно понравился дизайн — он отражает нашу корпоративную идентичность. Обязательно буду работать с ними снова!',
    },
    {
        id: uuidv4(),
        title: 'Мухаммадзагид Усманов',
        company: 'MTS Group',
        star: 3,
        description:
            'Сотрудничество с этой компанией стало для меня настоящим открытием. Они не только разработали сайт, но и помогли с SEO-оптимизацией, что значительно увеличило трафик. Их подход к работе действительно впечатляет',
    },
    {
        id: uuidv4(),
        title: 'Михаил Иванов',
        company: 'Частное лицо',
        star: 5,
        description:
            'Работа с этой компанией превзошла все мои ожидания! Они внимательно выслушали все мои пожелания и предложили креативные решения для моего проекта. Результат получился просто потрясающим! Рекомендую всем, кто ищет профессионалов в области веб-разработки',
    },
    {
        id: uuidv4(),
        title: 'Мухаммадзагид Усманов',
        company: 'Частное лицо',
        star: 4,
        description:
            'Я очень доволен работой этой команды! Они создали для нас не просто сайт, а полноценную платформу для нашего бизнеса. Профессионализм, креативность и внимание к клиенту — вот что отличает их от других компаний',
    },
    {
        id: uuidv4(),
        title: 'Михаил Иванов',
        company: 'Частное лицо',
        star: 5,
        description:
            'Работа с этой компанией превзошла все мои ожидания! Они внимательно выслушали все мои пожелания и предложили креативные решения для моего проекта. Результат получился просто потрясающим! Рекомендую всем, кто ищет профессионалов в области веб-разработки',
    },
    {
        id: uuidv4(),
        title: 'Кот Овсянников',
        company: 'MTS Group',
        star: 5,
        description:
            'Я сотрудничал с этой компанией по созданию корпоративного сайта. Они проявили высокий уровень профессионализма и внимательности к деталям. Особенно понравился дизайн — он отражает нашу корпоративную идентичность. Обязательно буду работать с ними снова!',
    },
]

const FeedbackCard = ({
    title,
    company,
    description,
    star,
}: {
    title: string
    company: string
    description: string
    star: number
}) => (
    <div className="max-w-md h-48 p-6 rounded-xl bg-[#F6F7FB] flex flex-col justify-between">
        <div>
            <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-lg text-[#51535B]">{title}</h4>
                <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, indx) => (
                        <StarIcon
                            key={indx}
                            size={24}
                            fill={indx < star ? '#51535B' : '#D6D6D6'}
                            weight="fill"
                        />
                    ))}
                </div>
            </div>
            <p className="text-sm text-gray-400">{company}</p>
        </div>
        <p className="text-sm text-gray-700 line-clamp-4">{description}</p>
    </div>
)

export const CustomSolutionsFeedback = () => {
    const mid = Math.ceil(mockFeedbackData.length / 2)
    const firstColumn = mockFeedbackData.slice(0, mid)
    const secondColumn = mockFeedbackData.slice(mid)

    return (
        <div className="w-full py-12">
            <div className="flex flex-col gap-4">
                {/* First column — вправо */}
                <div>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={12}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="w-full"
                    >
                        {[...firstColumn, ...firstColumn].map((item, index) => (
                            <SwiperSlide key={`${item.id}-${index}`} style={{ width: 'auto' }}>
                                <FeedbackCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Second column — влево */}
                <div className="rtl">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={12}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        direction="horizontal"
                        modules={[Autoplay]}
                        className="w-full"
                    >
                        {[...secondColumn, ...secondColumn].map((item, index) => (
                            <SwiperSlide key={`${item.id}-${index}`} style={{ width: 'auto' }}>
                                <div className="ltr">
                                    <FeedbackCard {...item} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
