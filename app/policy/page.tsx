import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

const policyParagraphs: string[] = [
    '1. Настоящее соглашение определяет условия и порядок обработки персональных данных пользователей приложения (далее — Интернет-лендингом).',
    '2. Принимая условия настоящего соглашения и нажимая кнопку «Обсудить проект» или «Узнать прогноз» или «Узнать больше о технологиях» или «Обсудить разработку», лицо, осуществившее вышеуказанные действия (далее — Пользователь):',
    '— подтверждает, что все указанные им данные принадлежат лично ему;',
    '— подтверждает и признает, что им внимательно в полном объеме прочитано настоящее соглашение и условия обработки его персональных данных;',
    '— дает согласие на обработку Интернет-лендингом предоставляемых персональных данных в целях заключения настоящего соглашения и его исполнения;',
    '— дает согласие на направление уведомлений об изменении заказов и другой информации;',
    '— дает согласие на получение информации о товарах, услугах, маркетинговых исследованиях и новостных рассылках;',
    '— выражает согласие с условиями обработки персональных данных.',
    '3. Пользователь выражает свое согласие на обработку его персональных данных, включая сбор, запись, хранение, использование, передачу и уничтожение персональных данных.',
    '4. Пользователь подтверждает, что действует свободно, своей волей и в своем интересе.',
    '5. Согласие является конкретным, информированным и сознательным. Оно оформляется отдельно от иных согласий.',
    '6. Под персональными данными понимается информация личного характера: ФИО, дата рождения, контактные данные и адрес.',
    '7. Цели обработки: идентификация, обратная связь, аналитика, маркетинг, создание аккаунта и т.д.',
    '8. При необходимости персональные данные могут быть переданы третьим лицам.',
    '9. Пользователь может изменить свои персональные данные в разделе "Мой аккаунт".',
    '10. Интернет-лендинг не проверяет достоверность персональных данных и не несет ответственность за недостоверную информацию.',
    '11. Пользователь вправе отказаться от рекламных рассылок в любое время.',
    '12. Данные хранятся на электронных носителях и обрабатываются автоматизированно.',
    '13. Лендинг обязуется защищать персональные данные согласно законодательству.',
    '14. Конфиденциальность соблюдается, кроме случаев, предусмотренных законом.',
    '15. Пользователь вправе отказаться от соглашения при несогласии с условиями.',
    '16. Отзыв согласия возможен по email: atomic.tech@mail.ru с указанием ФИО и телефона.',
    '17. Лендинг может вносить изменения в соглашение. Актуальная редакция публикуется в приложении.',
]

export default function Policy() {
    return (
        <div className="flex flex-col gap-y-16">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-5xl">Политика конфиденциальности</h1>
                <Link
                    href="/"
                    className="flex items-center gap-x-2.5 rounded-full border border-[#E6E6E6] py-4 px-20"
                >
                    <ArrowLeftIcon size={16} />
                    <span className="font-medium text-sm">Назад</span>
                </Link>
            </div>
            <p>
                {policyParagraphs.map((para, idx) => (
                    <p key={idx} className="text-base leading-8">
                        {para}
                    </p>
                ))}
            </p>
        </div>
    )
}
