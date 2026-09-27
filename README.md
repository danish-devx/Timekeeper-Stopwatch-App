# Timekeeper Stopwatch

<div align="center">

![Timekeeper Stopwatch](https://img.shields.io/badge/Timekeeper-Stopwatch-e87843?style=for-the-badge&logo=clockify&logoColor=white)
![Production Ready](https://img.shields.io/badge/status-production%20ready-1f9d72?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### A precise stopwatch for focused work

An elegant, responsive stopwatch experience built with React, Vite, and Tailwind CSS. Track elapsed time down to centiseconds, record lap splits, and stay focused with a refined timekeeper interface.

[Live Demo](http://127.0.0.1:5173/) · [Report an Issue](../../issues)

</div>

## Features

- Start, pause, and resume timing without losing elapsed time
- Centisecond precision display with hours, minutes, and seconds
- Lap recording with automatic best-lap highlighting
- One-click reset for the timer and session log
- Responsive layout for desktop, tablet, and mobile screens
- Premium dark interface with orange accent system
- Provided stopwatch artwork used as the visual background
- Custom viewport and panel scrollbar styling
- Accessible button states with keyboard focus indicators

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Typography | Manrope, DM Serif Display, DM Mono |
| Language | JavaScript (ES Modules) |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
git clone <your-repository-url>
cd 27-9-2026-Stop-Watch
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
src/
├── assets/
│   └── pngwing.com (5).png
├── components/
│   └── Stopwatch/
│       └── Stopwatch.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Quality Checks

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## License

This project is intended for personal learning and portfolio use.
