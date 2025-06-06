import appIcon from '@/public/assets/images/icons/app.svg'
import bagIcon from '@/public/assets/images/icons/bag.svg'
import bitrixIcon from '@/public/assets/images/icons/bitrix.svg'
import databaseIcon from '@/public/assets/images/icons/database.svg'
import pythonIcon from '@/public/assets/images/icons/python.svg'
import reactIcon from '@/public/assets/images/icons/react.svg'
import serviceIcon from '@/public/assets/images/icons/service.svg'
import firstProjectCoverImage from '@/public/assets/images/projects/firstProject.png'
import lastProjectCoverImage from '@/public/assets/images/projects/lastProject.png'
import secondProjectCoverImage from '@/public/assets/images/projects/secondProject.png'
import thirdProjectCoverImage from '@/public/assets/images/projects/thirdProject.png'

export const mockProjects = [
  {
    id: 'M-dental',
    title: '“M-Dental” сайт стоматологии',
    description:
      'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
    coverImage: firstProjectCoverImage,
    badgeContent: [
      {
        title: 'Увеличение продаж',
        description: '+260% в первый квартал после запуска',
      },
      {
        title: 'Рост конверсий',
        description: '+145% по сравнению с предыдущим сайтом',
      },
    ],
    tags: [
      {
        id: 'web',
        title: 'Интернет-магазин',
        icon: bagIcon,
      },
      {
        id: 'crm',
        title: '1c bitrix',
        icon: bitrixIcon,
      },
    ],
  },
  {
    id: 'Purple-People',
    title: 'Платформа клуба Purple People',
    description:
      'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
    coverImage: secondProjectCoverImage,
    badgeContent: [
      {
        title: 'Снижение показателя отказов',
        description: '-75% после редизайна',
      },
    ],
    tags: [
      {
        id: 'py',
        title: 'Python',
        icon: pythonIcon,
      },
      {
        id: 'framework',
        title: 'React',
        icon: reactIcon,
      },
      {
        id: 'db',
        title: 'SQLite',
        icon: databaseIcon,
      },
    ],
  },
  {
    id: 'TRIPLEH',
    title: 'Брендинг TRIPLE H',
    description:
      'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
    coverImage: thirdProjectCoverImage,
    badgeContent: [
      {
        title: 'Увеличение продаж',
        description: '+75% уникальных посетителей за 6 месяцев',
      },
    ],
    tags: [
      {
        id: 'app',
        title: 'Приложение',
        icon: appIcon,
      },
      {
        id: 'service',
        title: 'Сервис',
        icon: serviceIcon,
      },
      {
        id: 'framework',
        title: 'React',
        icon: reactIcon,
      },
    ],
  },
  {
    id: 'JKH',
    title: 'Сайт и приложение для ЖКХ-сервиса',
    description:
      'Сайт интеграционного оператора железнодорожных транзитных сервисов между Китаем и Европой',
    coverImage: lastProjectCoverImage,
    badgeContent: [
      {
        title: 'Увеличение продаж',
        description: '+75% уникальных посетителей за 6 месяцев',
      },
    ],
    tags: [
      {
        id: 'app',
        title: 'Приложение',
        icon: appIcon,
      },
      {
        id: 'service',
        title: 'Сервис',
        icon: serviceIcon,
      },
      {
        id: 'framework',
        title: 'React',
        icon: reactIcon,
      },
    ],
  },
]