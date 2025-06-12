import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { FC } from 'react'

import { MailingSectionProps } from './MailingSection.types'

export const MailingSection: FC<MailingSectionProps> = (props) => {
    const {} = props
    return (
        <section data-dark="true" className="w-full p-16 rounded-[1.875rem] bg-gradient-main mt-14">
            <div className="flex items-center justify-between">
                <div className="max-w-3xl flex flex-col gap-y-9">
                    <h1 className="font-bold text-5xl">
                        <span className="text-white/80">«PRO</span>
                        <span className="text-white">GER»</span>
                        <span className="text-white">
                            — рассылка о том, что полезно и актуально
                        </span>
                    </h1>
                    <p className="text-white/50 font-normal text-xl">
                        Искренние письма о работе и жизни, эксклюзивные кейсы и интервью с
                        экспертами диджитала.
                    </p>
                    <form>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-center gap-x-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    className="rounded-full border border-[#FFFFFF99] py-4 px-5 text-white w-full placeholder:text-white/50 outline-none"
                                />
                                <Button
                                    type="submit"
                                    className="bg-white rounded-full text-black py-7 font-bold text-sm min-w-64 cursor-pointer hover:bg-white/70"
                                >
                                    Подписаться
                                </Button>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <Checkbox id="policy" />
                                <Label htmlFor="policy">
                                    <span className="text-white/40 text-sm">
                                        Оставляя свой email, вы принимаете
                                    </span>
                                    <Link
                                        href="/policy"
                                        className="text-white underline text-base font-normal"
                                    >
                                        Политику конфиденциальности
                                    </Link>
                                </Label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-white w-1/4 h-80 rounded-3xl" />
            </div>
        </section>
    )
}
