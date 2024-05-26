# Horizon Banking Dashboard

Build a banking dashboard with integrated account banking and show the user's transactions, balance, and more using chart.js & react-chartjs-2.

<!-- Image goes here -->

## Table of Contents

- [Horizon Banking Dashboard](#horizon-banking-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Dependencies](#dependencies)
  - [ShadcnUI](#shadcnui)
  - [SSR Login Appwrite authentication flow](#ssr-login-appwrite-authentication-flow)
  - [Sentry](#sentry)

## Getting Started

-  Clone the repository
-  Install the dependencies
-  Change `.env.example` to `.env` and fill in the environment variables
-  Run the development server

```bash
git clone
cd horizon-banking
bun install
cp .env.example .env
bun dev
```

## Features

-  Authentication
-  Dashboard
-  Coming soon...

## Tech Stack

-  Plaid - API for banking data
-  Nextjs - React framework
-  React - JavaScript library
-  Tailwind CSS - CSS framework
-  Chartjs - Charting library
-  ShadcnUI - UI components
-  Appwrite - Backend as a service
-  Sentry - Error tracking

## Dependencies

-  [Plaid](https://plaid.com/) - API for banking data, sandbox mode (bun add plaid)
-  [React Plaid Link](https://www.npmjs.com/package/react-plaid-link) - React component for Plaid Link (bun add react-plaid-link)
-  [Dwolla-v2](https://www.npmjs.com/package/dwolla-v2) - Dwolla API client for Node.js (bun add dwolla-v2)
-  [Node Appwrite](https://appwrite.io/) - Backend as a service (bun add node-appwrite)
-  [Zod](https://www.npmjs.com/package/zod) - TypeScript-first schema declaration and validation library (bun add zod)
-  [Query String](https://www.npmjs.com/package/query-string) - Parse and stringify URL query strings (bun add query-string)
-  [React Countop](https://www.npmjs.com/package/react-countup) - React component wrapper around CountUp.js (bun add react-countup)
-  [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting for designers & developers (bun add chart.js)
-  [React Chartjs 2](https://www.npmjs.com/package/react-chartjs-2) - React wrapper for Chart.js 2 (bun add react-chartjs-2)
-  [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation (bun add react-hook-form)
-  [@Hookform Resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Resolvers for React Hook Form (bun add @hookform/resolvers)
-  [Postcss Import](https://www.npmjs.com/package/postcss-import) - PostCSS plugin to transform @import rules by inlining content (bun add -D postcss-import)

## ShadcnUI

Init shadcnui

```bash
npx shadcn-ui@latest init
```

Then test to add components

```bash
npx shadcn-ui@latest add button (@radix-ui/react-slot)
```

List components used in the project

```bash
npx shadcn-ui@latest add sheet (@radix-ui/react-dialog)
npx shadcn-ui@latest add form (@hookform/resolvers, @radix-ui/react-label, react-hook-form)
npx shadcn-ui@latest add ...
```

## SSR Login Appwrite authentication flow

open `https://appwrite.io/docs/tutorials/nextjs-ssr-auth/` and follow the steps

## Sentry

Install `npx @sentry/wizard@latest -i nextjs` and will show interactive wizard to setup Sentry

and will install `@sentry/nextjs@^8` and continue wizard setup
