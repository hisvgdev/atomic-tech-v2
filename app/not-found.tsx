'use client'

export default function Error() {
    return (
        <main className="grid  place-items-center bg-white px-6 py-12 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-8xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Страница не найдена
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    Мы не смогли найти требуемую страницу 😔 <br /> Если вы считаете что это ошибка,
                    пожалуйста свяжитесь с поддержкой
                </p>
            </div>
        </main>
    )
}
