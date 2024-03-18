import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Homecomfort",
    description: "API интернет магазина",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Инструкция', link: '/introduction'},
            {text: 'API', link: '/reference/constant'}
        ],
        sidebar: {
            '/' : [
                {
                    text: 'Начало работы',
                    items: [
                        {text: 'Вступление', link: '/introduction'},
                        {text: 'Авторизация', link: '/auth'},
                        {text: 'Ошибки', link: '/errors'},
                    ]
                },
                {
                    text: 'Интеграция',
                    items: [
                        {text: 'Основное', link: '/api/main'},
                        {text: 'Склад', link: '/api/warehouse'},
                        {text: 'Товар', link: '/api/product'},
                    ]
                },
            ],
            '/reference/': [
                {
                    text: 'API',
                    items: [
                        {text: 'Константы', link: '/reference/constant'},
                        {text: 'Товар', link: '/reference/product'},
                        {text: 'Склад', link: '/reference/warehouse'},
                    ]
                }
            ],
        },
    },
    lang: 'ru-RU',
    locales: {
        root: {
            label: 'Русский',
            lang: 'ru_RU',
            themeConfig: {
                outline: {
                    label: 'На странице'
                },
                notFound: {
                    title: 'Страница не найдена',
                    quote: 'Попробуйте перейти на главную страницу',
                    linkText: 'На главную',
                },
                docFooter: {
                    prev: 'Предыдущая',
                    next: 'Следующая',
                }
            }
        }
    }
})
