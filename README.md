# RemoteRecruit Landing Page

## Overview

This project is a responsive React + Tailwind CSS implementation of the RemoteRecruit landing page based on the provided Figma design.

The application follows a component-based architecture and includes responsive layouts, smooth animations, hover interactions, optimized assets, and accessibility improvements.

---

## Project Setup

### Prerequisites

- Node.js 18+
- npm or yarn

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

The application will be available at:

```bash
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

## Frameworks & Libraries Used

### Core

- React 19
- TypeScript
- Vite

### Styling

- Tailwind CSS

### Animation

- Framer Motion

### Development Tools

- ESLint
- TypeScript

---

## Features Implemented

- Fully responsive design (Desktop, Tablet, Mobile)
- Component-based architecture
- Smooth scroll reveal animations
- Hover effects and interactive transitions
- Scroll-to-top button
- FAQ section with expandable items
- Lazy-loaded images
- Optimized image rendering with decoding hints
- Accessibility improvements (alt text, semantic structure)
- Performance optimizations targeting Lighthouse 90+

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Features/
│   ├── Footer/
│   ├── ScrollTop/
│   └── FAQ/
├── App.tsx
└── main.tsx
```

---

## Performance Optimizations

- Lazy loading for non-critical images
- Async image decoding
- Responsive layouts using Tailwind breakpoints
- Reduced unnecessary re-renders
- Optimized Framer Motion animations
- Semantic HTML structure for accessibility

---

## Known Issues / Limitations

- Social media icons are currently provided as a single image asset rather than individual SVG icons.
- Some decorative background elements are hidden on smaller screens to improve responsiveness and performance.
- Framer Motion animations may be slightly reduced on low-powered devices depending on browser performance.
- FAQ content currently uses mock/static placeholder data.
- No backend integration is included; all content is static.

---

## Author

Mohd Adam Si Thu Thet Naing

Frontend implementation using React, TypeScript, Tailwind CSS, and Framer Motion.
