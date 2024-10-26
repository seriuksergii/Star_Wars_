# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})



/src
├── /api                         # Запити до API
│   ├── StarWarsAPI.ts           # Функції для запитів до sw-api.starnavi.io (отримання героїв, фільмів, кораблів)
│   └── types.ts                 # Інтерфейси даних API (Hero, Movie, Starship тощо)
│
├── /components                  # Загальні компоненти
│   ├── HeroList.tsx             # Компонент для відображення списку героїв
│   ├── HeroItem.tsx             # Компонент для відображення кожного героя в списку
│   ├── HeroDetailModal.tsx      # Модальне вікно для деталей героя
│   └── Paginator.tsx            # Компонент пагінації або infinite scroll
│
├── /features                    # Функціональні частини проєкту
│   ├── /HeroGraph               # Логіка та компоненти для графу героя
│   │   ├── HeroGraph.tsx        # Компонент графу героя з використанням React Flow
│   │   ├── HeroNode.tsx         # Нода для героя в графі
│   │   ├── MovieNode.tsx        # Нода для фільму
│   │   ├── StarshipNode.tsx     # Нода для космічного корабля
│   │   ├── graphUtils.ts        # Допоміжні функції для роботи з графом
│   │   └── types.ts             # Типи для вузлів графу (HeroNode, MovieNode, StarshipNode тощо)
│
├── /hooks                       # Кастомні хуки
│   ├── useFetchHeroes.ts        # Хук для запиту даних про героїв
│   ├── useHeroDetails.ts        # Хук для запиту деталей героя (фільми, кораблі)
│   └── usePagination.ts         # Хук для пагінації або infinite scroll
│
├── /tests                       # Тестові файли
│   ├── /__mocks__               # Моки для тестування API запитів
│   ├── HeroList.test.tsx        # Тести для HeroList
│   ├── HeroGraph.test.tsx       # Тести для HeroGraph
│   ├── useFetchHeroes.test.ts   # Тести для хуку useFetchHeroes
│   └── helpers                  # Допоміжні функції для тестування
│
├── /utils                       # Утилітарні функції
│   ├── formatData.ts            # Форматування та обробка даних
│   ├── constants.ts             # Константи проєкту (напр. URL для API)
│   └── helpers.ts               # Інші допоміжні функції
│
├── App.tsx                      # Головний компонент додатку
├── index.tsx                    # Точка входу
└── styles.css                   # Глобальні стилі або стилі для root

```
