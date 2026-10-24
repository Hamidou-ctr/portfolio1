# Portfolio – Hamidou Diallo

Personal portfolio of Hamidou Diallo, frontend developer. One-page site with an
about section, skills, selected projects and a contact form, available in
German and English.

**Live:** [hamidoudiallo.de](https://hamidoudiallo.de)

## Features

- One-page layout with smooth scrolling and scroll animations ([AOS](https://michalsnik.github.io/aos/))
- Language switch DE / EN with [ngx-translate](https://github.com/ngx-translate/core) (`src/assets/de.json`, `src/assets/en.json`)
- Contact form with validation, sent through [Formspree](https://formspree.io)
- Responsive design (mobile, tablet, desktop)
- Lazy-loaded legal pages (privacy policy, legal notice)

## Tech stack

| Area      | Technology                                                     |
| --------- | -------------------------------------------------------------- |
| Framework | Angular 22 – standalone components, signals, zoneless, OnPush  |
| Language  | TypeScript, SCSS                                               |
| i18n      | ngx-translate                                                  |
| Testing   | Karma + Jasmine                                                |
| CI/CD     | GitHub Actions (build, test, deploy)                           |

## Getting started

**Requirements:** Node.js as defined in [`.nvmrc`](.nvmrc) (`nvm use`) and npm.

```bash
git clone https://github.com/Hamidou-ctr/portfolio1.git
cd portfolio1
npm install
npm start
```

The app runs on <http://localhost:4200/> and reloads on every change.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Dev server on port 4200                      |
| `npm run build` | Production build into `dist/portfolio`       |
| `npm run watch` | Development build in watch mode              |
| `npm test`      | Unit tests with Karma                        |

## Project structure

```text
src/
├── app/
│   ├── header/          navigation, language switch
│   ├── home-page/       hero section
│   ├── about-me/
│   ├── my-skills/
│   ├── portfolio/       project list
│   ├── contact-me/      contact form
│   ├── footer/
│   ├── legal-notice/    lazy-loaded route
│   ├── privacy-policy/  lazy-loaded route
│   └── service/         ScrollService
├── assets/              images and translation files
└── testing/             shared test providers
```

## Projects shown in the portfolio

- **Join** – Kanban board (JavaScript, Firebase)
- **El Pollo Loco** – browser game (JavaScript)
- **DA Bubble** – chat app (Angular, TypeScript, Firebase)

## Contact

Hamidou Diallo – [hamiduguinea@gmail.com](mailto:hamiduguinea@gmail.com) – [GitHub](https://github.com/Hamidou-ctr)
