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

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app

### Packages

#### Auth

- `auth`:

#### UI

- `ui`: a stub React component library shared by both `web` and `docs` applications
- This package contains all the UI components which can be common to different applications.
- Used React Hook Forms, Zod for backend routes data validation
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Features

### Authentication

- NextAuth Authentication using Google, Facebook, and Discord.
- JWT-Based Authentication: Cookie-based JWT authentication for maintaining user sessions.

## Admin Routes

## Client Routes

## Steps to Build

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

## PostgreSQL local setup

- Either install Postgres.app (for Mac users only) or native PostgreSQl Installer.
- Upon successful installation, intialize the Postgres server locally. By default it runs on port 5432.
- Command to connect to Postgres database.

```
psql -h localhost -p 5432 -U username -d databaseName
```

> PSQL is a terminal-based front-end to PostgreSQL.

> Note: We cannot using ElephantSql in the scope of this project because whenever PRISMA creates migration it needs access to create a temporary table in our DB which is not possible in the case of ElephantSQL database.

### Current Issues/ Pending work

- ENV varibales are not accessible
- Create .env.example file
- Until the project is not deployed. Set localhost 3000 as a base URL in config.ts file instead of using the same base url in code everywhere. (Something like this:
  export const BASE_URL = "http://localhost:3000")
- Deplyment on Vercel. The current deployment workflow has to be fixed. It is failing at the moment.
- Migrate entire data from MongoDB to Postgres
