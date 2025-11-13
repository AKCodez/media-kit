# @AriaCodez Media Kit - Next.js

A modern, professional media kit website built with Next.js, React, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, copy the statistics images to the public folder:

```bash
# Copy statistics folder from parent directory
cp -r ../statistics public/
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
media-kit-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Hero.tsx                    # Hero section
│   ├── KeyMetrics.tsx              # Performance metrics
│   ├── StatisticsShowcase.tsx      # Analytics dashboard images
│   ├── AudienceDemographics.tsx    # Demographics data
│   ├── Services.tsx                # Services offered
│   └── Footer.tsx                  # Footer with CTA
├── public/
│   └── statistics/                 # Statistics images
└── ...config files
```

## Features

- ✅ Fully responsive design
- ✅ Modern glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Optimized images with Next.js Image component
- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ SEO optimized with metadata

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js.
