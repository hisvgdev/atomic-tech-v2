import CaseHistory from '@/components/cases/molecules/CaseHistory'
import AllProjectsButton from '@/components/Dashboard/molecules/AllProjectsButton'
import { Button } from '@/components/ui/button'
import { mockProjects } from '@/constants/project.constants'
import dbIcon from '@/public/assets/icons/tech/database.svg'
import pythonIcon from '@/public/assets/icons/tech/pyIcon.svg'
import reactIcon from '@/public/assets/icons/tech/reactjsIcon.svg'
import CaseCard from '@/shared/global/CaseCard'
import { RobotIcon, StarIcon } from '@phosphor-icons/react/dist/ssr'
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
        <main className="h-full w-full">
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

                <section
                    data-dark="false"
                    aria-labelledby="benefits-heading"
                    className="flex flex-col gap-y-5"
                >
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

                <CaseHistory />

                <section
                    data-dark="false"
                    aria-labelledby="more-cases-heading"
                    className="flex flex-col gap-y-6"
                >
                    <h2 id="more-cases-heading" className="font-bold text-7xl">
                        Больше кейсов
                    </h2>
                    <div className="flex items-center gap-x-4">
                        {mockProjects.slice(0, 2).map((project, indx) => (
                            <CaseCard key={`${project.id}-${indx + 1}`} {...project} />
                        ))}
                    </div>
                </section>

                <div className="mb-1">
                    <AllProjectsButton />
                </div>
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
