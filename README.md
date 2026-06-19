# RemoteRecruit Landing Page

## Overview

This project is a responsive React + TypeScript implementation of the RemoteRecruit landing page based on the provided Figma design.

The application follows a component-based architecture and includes responsive layouts, smooth animations, hover interactions, accessibility improvements, and performance optimizations.

---

## Project Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <repository-url>
cd remote-recruit
npm install
```

### Run Development Server

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Docker Support

Build Docker image:

```bash
docker build -t remote-recruit .
```

Run container:

```bash
docker run -p 3000:80 remote-recruit
```

Using Docker Compose:

```bash
docker compose up --build
```

Application URL:

```text
http://localhost:3000
```

---

## Frameworks & Libraries Used

### Core

- React 19
- TypeScript
- Vite

### Styling

- Tailwind CSS

### Animation

- Framer Motion

### Tooling

- ESLint
- Docker
- Docker Compose

---

## Features Implemented

- Fully responsive design (Desktop, Tablet, Mobile)
- Component-based architecture
- Smooth scroll reveal animations
- Interactive hover effects and transitions
- Scroll-to-top functionality
- FAQ section with expandable content
- Lazy-loaded images
- Accessibility-friendly alt text and semantic HTML
- Performance optimizations targeting Lighthouse score ≥ 90

---

## Project Structure

```text
remote-recruit/
├── public/
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── index.css
│   └── main.tsx
├── README.md
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Performance Optimizations

- Lazy loading for non-critical images
- Async image decoding
- Responsive layouts using Tailwind breakpoints
- Optimized Framer Motion animations
- Semantic HTML structure for accessibility
- Reduced layout shifts by specifying image dimensions

---

## Known Issues / Limitations

- FAQ content currently uses placeholder/mock data.
- Social media icons are provided as a single image asset.
- No backend/API integration is included; all content is static.
- Some decorative elements are simplified on smaller screens to improve responsiveness and performance.

---

## Author

**Adam Si Thu Thet Naing**

Frontend implementation using React, TypeScript, Tailwind CSS, Framer Motion, and Docker.
