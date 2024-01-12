# CourseHub

A Course Selling Platform. Tech stack used in this web application :

- Typescript (Programming Language)
- Monorepo
- NextJS
- Prisma ORM
- Next-Auth
- JWT (Jason Web Tokens) : Cookie-based authentication using JWT for secure user sessions
- TailwindCSS and Shadcn (Styling Libraries)
- Docker

## What's inside?

This Turborepo includes the following apps and packages:

## Apps and Packages

### Apps

- `web`: [Next.js](https://nextjs.org/) app

### Packages

#### Auth

#### UI

- This package contains all the UI components which can be common to different applications.
- Used React Hook Forms, Zod for backend routes data validation.

#### Tailwind Config

- This packge contains root level Tailwing CSS configurations.

#### Utils

- This package contains different `shadcn` components. These components are primarily used in UI package.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Features

### Authentication

- `NextAuth Authentication` using Google, Facebook, and Discord.
- `JWT-Based Authentication` Cookie-based JWT authentication for maintaining user sessions.

## Admin Routes

## Client Routes

- Added the functionality to choose from `light` and `dark` modes for better user experience.

## PostgreSQL local setup

- Either install Postgres.app (for Mac users only) or native PostgreSQl Installer.
- Upon successful installation, intialize the Postgres server locally. By default it runs on port 5432.
- Command to connect to Postgres database.

```
psql -h localhost -p 5432 -U username -d databaseName
```

> PSQL is a terminal-based front-end to PostgreSQL.

> Note: We cannot using ElephantSql in the scope of this project because whenever PRISMA creates migration it needs access to create a temporary table in our DB which is not possible in the case of ElephantSQL database.

- Detailed PostgreSQL and PRISMA setup explanantion can be found [here](https://www.notion.so/PostgreSQL-and-PRISMA-da27e19c28974fb182bf935022ccb83a)

## Steps to Build and Develop the Project

### Build

To build all apps and packages, run the following command:

```
cd course-selling-monorepo
pnpm build
```

### Develop
To develop all apps and packages, run the following command:

```
cd course-selling-monorepo
pnpm dev
```



