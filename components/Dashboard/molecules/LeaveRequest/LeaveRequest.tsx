import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React, { FC } from 'react'

import { LeaveRequestProps } from './LeaveRequest.types'

export const LeaveRequest: FC<LeaveRequestProps> = (props) => {
    const {} = props
    return (
        <section
            data-dark="true"
            className="w-full px-24 py-14 rounded-[3.125rem]"
            style={{
                background: 'linear-gradient(104.62deg, #00636F 0%, #000809 47.79%)',
            }}
        >
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3 max-w-xl">
                    <h1 className="font-bold text-5xl text-white">
                        Начните разработку проекта вместе с нами
                    </h1>
                    <p className="text-white text-lg font-normal">
                        Оставьте заявку и мы свяжемся с вами в ближайший час
                    </p>
                </div>
                <form>
                    <div className="flex flex-col gap-y-4 max-w-6xl">
                        <div className="flex items-center gap-x-2.5">
                            <input
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                className="rounded-full border border-[#FFFFFF99] py-4 px-5 text-white w-full placeholder:text-white/50 outline-none"
                            />
                            <input
                                type="phone"
                                name="phone"
                                placeholder="+7 (123) 456-78-90"
                                className="rounded-full border border-[#FFFFFF99] py-4 px-5 text-white w-full placeholder:text-white/50 outline-none"
                            />
                            <input
                                type="text"
                                name="nickname"
                                placeholder="Ник телеграм (если есть)"
                                className="rounded-full border border-[#FFFFFF99] py-4 px-5 text-white w-full placeholder:text-white/50 outline-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="bg-white rounded-full text-black py-7 font-bold text-sm max-w-64 cursor-pointer hover:bg-white/70"
                        >
                            Оставить заявку
                        </Button>
                        <div className="flex items-center gap-x-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-white/50 max-w-xs">
                                Нажимая кнопку, вы даете согласие на обработку персональных данных
                            </Label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
