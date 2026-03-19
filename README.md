# Сайт по сборке мебели

Одностраничный сайт услуг по сборке мебели. React + Vite, адаптивная вёрстка.

## Требования

Нужен [Node.js](https://nodejs.org/) (рекомендуется LTS).

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173)

## Сборка

```bash
npm run build
```

Папка `dist/` готова к загрузке на Vercel, Netlify или любой хостинг.

## Структура

- `/` — главная (hero, преимущества)
- `/services` — услуги и цены
- `/contacts` — форма заявки, контакты
- `/thank-you` — страница после отправки заявки

## Настройка

- **Телефон и мессенджеры**: отредактируйте `src/pages/Contacts.jsx`
- **Цены и услуги**: `src/pages/Services.jsx`
- **Тексты на главной**: `src/pages/Home.jsx`
- **Форма**: сейчас заглушка. Для отправки на почту подключите [Formspree](https://formspree.io), для Telegram — свой бот API.
