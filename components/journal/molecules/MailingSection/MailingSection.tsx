'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'
import Link from 'next/link'
import React, { FC } from 'react'

import { MailingPayload, mailingSchema } from '@/lib/schema/mailing-schema'

import { MailingSectionProps } from './MailingSection.types'

export const MailingSection: FC<MailingSectionProps> = (props) => {
    const {} = props
    const form = useForm({
        validators: {
            onChange: mailingSchema,
        },
        defaultValues: {
            email: '',
            terms: true,
        } as MailingPayload,
        onSubmit: (data) => {
            console.log(data.value)
        },
    })
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
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                    >
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-center gap-x-4">
                                <form.Field
                                    name="email"
                                    children={({ state, handleBlur, handleChange }) => (
                                        <div className="flex flex-col gap-y-1 w-full">
                                            <Input
                                                aria-invalid={!!state.meta.errors[0]?.message}
                                                value={state.value}
                                                type="email"
                                                name="email"
                                                placeholder="example@mail.com"
                                                onChange={(e) => handleChange(e.target.value)}
                                                onBlur={handleBlur}
                                                className="rounded-full border border-[#FFFFFF99] py-7 px-5 text-white w-full placeholder:text-white/50 outline-none"
                                            />
                                            {state.meta.errors.length > 0 && (
                                                <p className="text-red-500 text-xs">
                                                    {state.meta.errors[0]?.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="bg-white rounded-full text-black py-7 font-bold text-sm min-w-64 cursor-pointer hover:bg-white/70"
                                >
                                    Подписаться
                                </Button>
                            </div>
                            <div className="flex items-center gap-x-4">
                                <form.Field
                                    name="terms"
                                    children={({ state, handleChange }) => (
                                        <div className="flex items-center gap-x-2">
                                            <Checkbox
                                                id="terms"
                                                checked={state.value}
                                                onCheckedChange={(checked) =>
                                                    handleChange(!!checked)
                                                }
                                            />
                                            <div className="flex flex-col">
                                                <Label htmlFor="terms">
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
                                                {state.meta.errors.length > 0 && (
                                                    <p className="text-red-500 text-xs">
                                                        {state.meta.errors[0]?.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-white w-1/4 h-80 rounded-3xl" />
            </div>
        </section>
    )
}
