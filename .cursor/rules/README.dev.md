# Project: E-commerce Platform

## Стек
- **Frontend:** Vue.js latest, TypeScript, Tailwind CSS
- **State:** Pinia
- **Forms:** Vue Composition API
- **API:** REST, axios с интерцепторами в `src/api/client.ts`
- **Auth:** JWT, токены в httpOnly cookies

## Структура проекта
```
src/
├── components/     # Переиспользуемые UI-компоненты
├── features/       # Фичи по доменам (auth, cart, products)
├── pages/          # Страницы (роуты)
├── api/            # API-клиент и эндпоинты
├── hooks/          # Кастомные хуки
├── stores/         # Pinia stores
├── types/          # TypeScript типы
└── utils/          # Утилиты
```

## Конвенции кода
- Компоненты: PascalCase, один компонент = один файл
- Хуки: начинаются с `use`, в папке hooks/
- Типы: интерфейсы с префиксом I (IUser, IProduct)
- Стили: только Tailwind, никаких CSS-файлов
- Тесты: рядом с файлом, суффикс `.test.ts`

## Важные файлы
- `src/api/client.ts` — axios instance с интерцепторами
- `src/stores/authStore.ts` — стор авторизации
- `src/features/auth/` — вся логика входа/регистрации
- `src/components/ui/` — базовые UI-компоненты (Button, Input, Modal)

## Как запустить
```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run test       # запуск тестов
```

## Переменные окружения
```
VITE_API_URL=https://api.example.com
VITE_STRIPE_KEY=pk_test_xxx
```

## Текущие задачи / известные проблемы
- [ ] Форма регистрации: нет валидации email в реальном времени
- [ ] Корзина: нужен debounce при изменении количества
- [x] Авторизация: refresh токенов работает