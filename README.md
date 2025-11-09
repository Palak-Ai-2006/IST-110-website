# Portfolio Website

A Next.js + TailwindCSS single-page interactive portfolio website with smooth scroll transitions and futuristic black/white/metallic theme.

## Features

- Smooth scroll transitions between vertically stacked scenes
- Each scene takes full viewport height
- Fixed/sticky navigation with active section highlighting
- Hidden scrollbars for clean aesthetic
- Black/white/metallic futuristic theme
- Minimal typography

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── components/       # Reusable components
│   └── Navigation.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── styles/           # Global styles
│   └── globals.css
└── lib/              # Utility functions
    └── utils.ts
```

## Customization

- Edit sections in `sections/` directory
- Modify global styles in `styles/globals.css`
- Update Tailwind theme in `tailwind.config.js`
- Add new components in `components/` directory


