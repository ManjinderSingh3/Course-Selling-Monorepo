# CourseHub
A Course Selling Platform. Tech stack used in this web application :
- Typescript (Programming Language)
- Monorepo
- NextJS
- Prisma ORM
- Next-Auth 
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

### Current Issues
- ENV varibales are not accessible
- Set localhost 3000 as a base URL in config.ts file (export const BASE_URL = "http://localhost:3000";)