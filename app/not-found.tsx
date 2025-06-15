'use client'

import notFoundMiddle from '@/public/assets/images/not-found/not-found-middle.svg'
import smile from '@/public/assets/images/not-found/smile.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Error() {
    return (
        <main className="grid  place-items-center bg-white px-6 py-12 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-y-20">
                <div className="flex flex-col gap-y-8">
                    <h1 className="mt-4 text-xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Страница не найдена
                    </h1>
                    <div className="flex items-center">
                        <p className="font-bold text-[15.3rem] leading-14">4</p>
                        <div className="relative">
                            <Image src={notFoundMiddle} alt="not-found-middle" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={smile} alt="smile" />
                            </div>
                        </div>
                        <p className="font-bold text-[15.3rem] leading-14">4</p>
                    </div>
                </div>
                <Link href="/" className="ring ring-[#676767] rounded-full py-6 px-20">
                    Вернуться на главную
                </Link>
            </div>
        </main>
    )
}
