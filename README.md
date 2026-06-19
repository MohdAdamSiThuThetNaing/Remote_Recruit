# RemoteRecruit Landing Page

## Overview

This project is a responsive React + TypeScript implementation of the RemoteRecruit landing page based on the provided Figma design.

The application follows a component-based architecture and recreates the design with responsive layouts, smooth animations, interactive hover effects, accessibility improvements, and performance optimizations.

---

```bash
80% browser zoom
```

## Special Notes

- For the best visual experience, please view the application at **80% browser zoom level** on desktop devices.
- The landing page was designed and optimized primarily for standard desktop resolutions and modern browsers.
- All sections are fully responsive and adapt to tablet and mobile screen sizes.
- Animations are powered by Framer Motion and may appear smoother on hardware-accelerated browsers such as Chrome, Edge, and Safari.
- The animated rain background effect is intentionally subtle to preserve readability and overall user experience.

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

### Build Docker Image

```bash
docker build -t remote-recruit .
```

### Run Docker Container

```bash
docker run -p 8004:80 remote-recruit
```

Application URL:

```text
http://localhost:8004
```

### Using Docker Compose

```bash
docker compose up --build
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

### Design & UI

- Pixel-accurate implementation based on the provided Figma design
- Fully responsive layout for Desktop, Tablet, and Mobile devices
- Component-based architecture for maintainability and reusability
- Interactive hover states and smooth transitions
- Consistent spacing, typography, gradients, and color system

### Animations

- Framer Motion powered section reveal animations
- Fade-in and slide-up effects on scroll
- Floating decorative element animations
- Interactive button and card hover animations

## Functionality

- Assessment information modal displayed on initial page load
- Animated rain background effect across the landing page
- Scroll-to-top button
- FAQ section with expandable/collapsible answers
- Responsive navigation and layout behavior
- Interactive Framer Motion animations throughout the landing page
- Floating UI elements and hover effects for feature sections
- Mock data implementation for FAQ and informational sections
- Responsive design optimized for desktop, tablet, and mobile devices

### Accessibility

- Semantic HTML structure
- Meaningful image alt attributes
- Keyboard-accessible interactive elements
- Improved screen reader compatibility

---

## Performance Optimizations

- Lazy loading for non-critical images
- Async image decoding
- Optimized asset imports for production builds
- Responsive layouts using Tailwind breakpoints
- Reduced layout shifts with explicit image dimensions
- Optimized Framer Motion animations
- Lighthouse-friendly implementation (Performance, Accessibility, Best Practices)

---

## Project Structure

```text

remote-recruit/
├── public/
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── AssessmentModal/
│   │   │   └── AssessmentModal.tsx
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Footer/
│   │   ├── ScrollTop/
│   │   ├── FAQ/
│   │   └── RainBackground/
│   │       └── RainBackground.tsx
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

## Known Issues / Limitations

- FAQ content uses placeholder/mock data.
- Social media icons are provided as a single image asset.
- No backend/API integration is included.
- Some decorative background elements are simplified on smaller screens to improve responsiveness and performance.
- Docker production build requires importing assets through Vite imports rather than using `/src/assets/...` paths.

---

## Author

**Adam Si Thu Thet Naing**

Frontend implementation using React, TypeScript, Tailwind CSS, Framer Motion, and Docker.
