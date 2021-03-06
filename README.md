# Grover Article

Is a project that brings you NY Times articles.

## ๐ Reference

All web services provided by [ https://developer.nytimes.com/](https://developer.nytimes.com/) and the base url and `api-key` configured in `.env` file at root directory

## ๐ป Getting started in Developer mode

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

## ๐ Launch the Project locally

For building the project and start it on your local machine use:

```bash
npm run build
# or
yarn build


```

## ๐งช Run tests

For building the project and start it on your local machine use:

```bash
npm run test
# or
yarn test
```

## ๐งฐ Libraries and tools

- โ Programming Language: **JavaScript**
- โ Typecheck: **Typescripy**
- โ Dom Manipulation: **React**
- โ Network Layer: **[React Query](https://react-query.tanstack.com/), Axios**
- โ UI Library: **[UI Kit](https://getuikit.com/)**
- โ Styling: **SCSS**
- โ Code Quality: **ESLint, Prettier, Husky**
- โ Testing tool: **React-Testing-Library**

## Types and Interfaces

#### Global

- Global Types are located in `src/global.d.ts` directory

#### Specific

Specific interfaces related to fetched data located at `src/lib/interfaces` includes:

- Article

## ๐ช Hooks

#### Web Services

- React-query queries for fetch API. Located in `src/services/search/index.ts` directory
