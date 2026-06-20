---
applyTo: "**/*"
description: "Use when editing any part of the project, including frontends, backends, services, and shared libraries."
---
# Project instructions

## Tech Stack

* Frontends: Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
* Mobile: Flutter with Dart 3.0
* Backends: FastAPI or Django with Python 3.14
* Services: Golang with Go 1.20

## Repository structure

```text
ineiah
|  |── frontends/
|  |   |── mainsite/
|  |   |  └── README.md
|  |   |── admin/
|  |   |  └── README.md
|  |── services/
|  |   |── addresses/
|  |   |  └── README.md
|  |── infrastructure/
└── README.md
```

* **frontends/** Contains the frontend applications, each in its own subdirectory (e.g., `mainsite`, `mobile`), generally written in Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
  * **frontends/mainsite/** Main website frontend, generally written in Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
* **services/** Backend applications, generally written in Python using FastAPI, Django or Golang for rapid development and rich ecosystem* **services/** Shared services that can be used across frontends and backends, such as authentication or database access, generally written in Golang with Go 1.20 for performance and concurrency benefits
* **infrastructure/** Contains infrastructure-related files and configurations, such as Dockerfiles and deployment scripts

## Commands

- Frontend dev server: `cd frontends/mainsite && pnpm dev`
- Frontend unit tests: `cd frontends/mainsite && pnpm test:unit`
- Frontend Nuxt tests: `cd frontends/mainsite && pnpm test:nuxt`
- Frontend e2e tests: `cd frontends/mainsite && pnpm test:e2e`
- Frontend lint: `cd frontends/mainsite && pnpm lint`
