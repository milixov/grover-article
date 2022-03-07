# Grover Article

Is a project that brings you NY Times articles.

## 🔗 Reference

All web services provided by [ https://developer.nytimes.com/](https://developer.nytimes.com/) and the base url and `api-key` configured in `.env` file at root directory

## 💻 Getting started in Developer mode

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run start
# or
yarn start
```

## 🌐 Launch the Project locally

For building the project and start it on your local machine use:

```bash
npm run build
# or
yarn build


```

## 🧪 Run tests

For building the project and start it on your local machine use:

```bash
npm run test
# or
yarn test
```

## 🧰 Libraries and tools

- ✅ Programming Language: **JavaScript**
- ✅ Typecheck: **Typescripy**
- ✅ Dom Manipulation: **React**
- ✅ Network Layer: **[React Query](https://react-query.tanstack.com/), Axios**
- ✅ UI Library: **[UI Kit](https://getuikit.com/)**
- ✅ Styling: **SCSS**
- ✅ Code Quality: **ESLint, Prettier, Husky**
- ✅ Testing tool: **React-Testing-Library**

## Types and Interfaces

#### Global

- Global Types are located in `src/global.d.ts` directory

#### Specific

Specific interfaces related to fetched data located at `src/lib/interfaces` includes:

- Article

## 🪝 Hooks

#### Web Services

- React-query queries for fetch API. Located in `src/services/search/index.ts` directory
