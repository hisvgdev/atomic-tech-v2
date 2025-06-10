import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr'
import { ArrowRight } from 'lucide-react'
import React, { FC } from 'react'

import { CaseHistoryProps } from './CaseHistory.types'

export const CaseHistory: FC<CaseHistoryProps> = (props) => {
    const {} = props
    return (
        <section data-dark="true" className="w-full h-full bg-black rounded-[3.125rem] p-10">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-y-9 max-w-4xl">
                    <h2 className="text-white font-bold text-5xl">История проекта</h2>
                    <div className="flex flex-col gap-y-12 text-white/50 font-medium text-base">
                        <p>
                            Сейчас Python развивает и поддерживает большая команда разработчиков по
                            всему миру. В 2001 году они объединились и создали некоммерческую
                            организацию Python Software Foundation (PSF). Эта организация занимается
                            продвижением языка, разрабатывает и выпускает новые версии, исправляет
                            ошибки и улучшает функциональность.
                        </p>
                        <p>
                            Основатель языка Гвидо ван Россум за это время успел поработать в
                            Google, Dropbox, а в 2020 году присоединился к команде Microsoft. В июле
                            2018 года он объявил, что уходит с поста «пожизненного доброжелательного
                            диктатора» Python. Этот термин используется в контексте разработки
                            свободного ПО. Так называют основателя проекта, который обладает правом
                            принимать окончательные решения.
                        </p>
                        <p>
                            После отхода от дел Россума все права на Python принадлежат организации
                            Python (Software Foundation). Она управляет лицензиями и следит за тем,
                            чтобы язык оставался открытым для использования.
                        </p>
                        <p>
                            Основные особенности Python Python обладает рядом характеристик и
                            особенностей, которые делают его одним из самых популярных языков
                            программирования. Перечислим основные из них.
                        </p>
                        <p>
                            Простота синтаксиса. Язык программирования Python стал популярен
                            благодаря своей простоте и чистоте кода. Его легко освоить новичкам и
                            даже тем, кто далек от программирования. Например, этот язык могут
                            использовать дизайнеры, работающие с трехмерной графикой, аналитики
                            данных и тестировщики.
                        </p>

                        <p>
                            Python обладает рядом характеристик и особенностей, которые делают его
                            одним из самых популярных языков программирования. Перечислим основные
                            из них.
                        </p>
                        <p>
                            Простота синтаксиса. Язык программирования Python стал популярен
                            благодаря своей простоте и чистоте кода. Его легко освоить новичкам и
                            даже тем, кто далек от программирования. Например, этот язык могут
                            использовать дизайнеры, работающие с трехмерной графикой, аналитики
                            данных и тестировщики.
                        </p>
                    </div>
                </div>

                <aside data-dark="true" className="max-w-sm grow flex flex-col gap-y-6">
                    <button
                        type="button"
                        className="border border-white py-5 rounded-full bg-transparent cursor-pointer text-white hover:bg-transparent flex justify-between px-6"
                    >
                        <div className="flex items-center gap-x-4">
                            <BookOpenIcon size={24} weight="fill" />
                            <span>Блог по тематике</span>
                        </div>
                        <ArrowRight />
                    </button>

                    {[1, 2].map((_, i) => (
                        <Card
                            key={i}
                            className="border-none shadow-none h-96 bg-[#1D1D1D] rounded-4xl flex flex-col justify-between"
                        >
                            <CardHeader>
                                <CardTitle>
                                    <div className="bg-black w-full rounded-2xl h-48" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold text-white">
                                    Wordpress — это быстро? Но что если мы расскажем вам о новых.
                                </h4>
                            </CardContent>
                            <CardFooter>
                                <time className="text-gray-300 font-light text-sm leading-6">
                                    2025-06-08
                                </time>
                            </CardFooter>
                        </Card>
                    ))}
                </aside>
            </div>
        </section>
    )
}
