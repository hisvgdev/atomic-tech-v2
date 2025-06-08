import AllProjectsButton from '@/components/Dashboard/molecules/AllProjectsButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { mockProjects } from '@/constants/project.constants'
import dbIcon from '@/public/assets/images/icons/database.svg'
import pythonIcon from '@/public/assets/images/icons/python.svg'
import reactIcon from '@/public/assets/images/icons/react.svg'
import CaseCard from '@/shared/global/CaseCard'
import { BookOpenIcon, RobotIcon, StarIcon } from '@phosphor-icons/react/dist/ssr'
import {
    ArrowRight,
    Calendar,
    Globe,
    LayoutTemplate,
    Palette,
    PanelsTopLeft,
    Search,
} from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface CaseProps {
    params: Promise<{ slug: string }>
}

export default async function Case({ params }: CaseProps) {
    const slug = await params.then((s) => s.slug)
    const findCase = mockProjects.find((p) => p.id === slug)

    if (!findCase) return <p>Кейс не найден</p>

    return (
        <main data-dark="false" className="h-full w-full">
            <article className="flex flex-col gap-y-16">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-x-10">
                        <h1 className="text-7xl font-bold">ИННОВАТИКА</h1>
                        <p className="text-2xl max-w-2xl text-primary-300">
                            {findCase.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Button className="border border-black py-4 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
                            <Globe size={22} />
                            <span className="font-medium text-base">innovatica.ru</span>
                            <ArrowRight />
                        </Button>
                        <Button className="border border-black py-4 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
                            <Calendar size={22} />
                            <span className="font-medium text-base">2025 год</span>
                        </Button>
                    </div>
                </header>

                <figure>
                    <Image
                        src={findCase.coverImage as StaticImageData}
                        alt={findCase.title}
                        className="w-full"
                    />
                </figure>

                <section className="flex justify-between items-start gap-x-4">
                    <TechnologySection />
                    <ServiceSection />
                    <CategorySection />
                </section>

                <section aria-labelledby="benefits-heading" className="flex flex-col gap-y-5">
                    <h2 id="benefits-heading" className="font-bold text-7xl">
                        Мы достигли
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {findCase.badgeContent.map((badge, indx) => (
                            <div
                                key={`${indx}-${badge.title}`}
                                className="bg-[#F6F7FB] min-w-96 rounded-full py-2.5 px-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-1 bg-[#51535B] rounded-full flex items-center justify-center">
                                        <StarIcon color="#F6F7FB" size={12} weight="fill" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-black text-sm font-bold">
                                            {badge.title}:
                                        </h4>
                                        <p className="text-black text-sm font-normal max-w-80 truncate">
                                            {badge.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full h-full bg-black rounded-[3.125rem] p-10">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-y-9 max-w-4xl">
                            <h2 className="text-white font-bold text-5xl">История проекта</h2>
                            <div className="flex flex-col gap-y-12 text-white/50 font-medium text-base">
                                <p>
                                    Сейчас Python развивает и поддерживает большая команда
                                    разработчиков по всему миру. В 2001 году они объединились и
                                    создали некоммерческую организацию Python Software Foundation
                                    (PSF). Эта организация занимается продвижением языка,
                                    разрабатывает и выпускает новые версии, исправляет ошибки и
                                    улучшает функциональность.
                                </p>
                                <p>
                                    Основатель языка Гвидо ван Россум за это время успел поработать
                                    в Google, Dropbox, а в 2020 году присоединился к команде
                                    Microsoft. В июле 2018 года он объявил, что уходит с поста
                                    «пожизненного доброжелательного диктатора» Python. Этот термин
                                    используется в контексте разработки свободного ПО. Так называют
                                    основателя проекта, который обладает правом принимать
                                    окончательные решения.
                                </p>
                                <p>
                                    После отхода от дел Россума все права на Python принадлежат
                                    организации Python (Software Foundation). Она управляет
                                    лицензиями и следит за тем, чтобы язык оставался открытым для
                                    использования.
                                </p>
                                <p>
                                    Основные особенности Python Python обладает рядом характеристик
                                    и особенностей, которые делают его одним из самых популярных
                                    языков программирования. Перечислим основные из них.
                                </p>
                                <p>
                                    Простота синтаксиса. Язык программирования Python стал популярен
                                    благодаря своей простоте и чистоте кода. Его легко освоить
                                    новичкам и даже тем, кто далек от программирования. Например,
                                    этот язык могут использовать дизайнеры, работающие с трехмерной
                                    графикой, аналитики данных и тестировщики.
                                </p>

                                <p>
                                    Python обладает рядом характеристик и особенностей, которые
                                    делают его одним из самых популярных языков программирования.
                                    Перечислим основные из них.
                                </p>
                                <p>
                                    Простота синтаксиса. Язык программирования Python стал популярен
                                    благодаря своей простоте и чистоте кода. Его легко освоить
                                    новичкам и даже тем, кто далек от программирования. Например,
                                    этот язык могут использовать дизайнеры, работающие с трехмерной
                                    графикой, аналитики данных и тестировщики.
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
                                            Wordpress — это быстро? Но что если мы расскажем вам о
                                            новых.
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

                <section aria-labelledby="more-cases-heading" className="flex flex-col gap-y-6">
                    <h2 id="more-cases-heading" className="font-bold text-7xl">
                        Больше кейсов
                    </h2>
                    <div className="flex items-center gap-x-4">
                        {mockProjects.slice(0, 2).map((project, indx) => (
                            <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                        ))}
                    </div>
                </section>

                <footer className="mb-1">
                    <AllProjectsButton />
                </footer>
            </article>
        </main>
    )
}

function TechnologySection() {
    return (
        <section aria-labelledby="tech-heading" className="flex flex-col gap-y-4">
            <h3 id="tech-heading">Технологии</h3>
            <div className="flex items-center gap-x-1.5">
                <TechButton icon={pythonIcon} label="Python" />
                <TechButton icon={reactIcon} label="React JS" />
                <TechButton icon={dbIcon} label="SQLite" />
            </div>
        </section>
    )
}

function ServiceSection() {
    return (
        <section aria-labelledby="services-heading" className="flex flex-col gap-y-4">
            <h3 id="services-heading">Услуги</h3>
            <div className="flex items-center gap-x-1.5">
                <IconButton icon={<Search size={20} />} label="Исследования" />
                <IconButton icon={<Palette size={20} />} label="Дизайн" />
                <IconButton icon={<Globe size={20} />} label="Веб-разработка" />
            </div>
        </section>
    )
}

function CategorySection() {
    return (
        <section aria-labelledby="category-heading" className="flex flex-col gap-y-4">
            <h3 id="category-heading">Категория</h3>
            <div className="flex items-center gap-x-1.5">
                <IconButton icon={<PanelsTopLeft size={20} />} label="Веб-сайт" />
                <IconButton icon={<LayoutTemplate size={20} />} label="Платформа" />
                <IconButton icon={<RobotIcon size={20} />} label="Телеграм-бот" />
            </div>
        </section>
    )
}

function TechButton({ icon, label }: { icon: StaticImageData; label: string }) {
    return (
        <Button className="border border-black h-10 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
            <Image src={icon} alt={`${label}-icon`} className="w-5 h-5" />
            <span className="font-bold text-xs">{label}</span>
        </Button>
    )
}

function IconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <Button className="border border-black h-10 rounded-full bg-transparent cursor-pointer text-black hover:bg-transparent">
            {icon}
            <span className="font-bold text-xs">{label}</span>
        </Button>
    )
}
