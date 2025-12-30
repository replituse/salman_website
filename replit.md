# Salman Sir Physics

## Overview

A professional personal website for a Dubai-based Physics teacher, STEM mentor, and F1 in Schools coach. The site showcases courses for competitive exam preparation (JEE, NEET, A-Levels, etc.), physics field explanations for parents and students, and contact information. Built with a modern React frontend and Express backend, using a green and yellow brand theme representing growth, learning, and excellence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom brand colors (teal and golden)
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for smooth page transitions and scroll effects
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints under `/api/` prefix
- **Storage Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation
- **Static Serving**: Production builds served from `dist/public`
- **Development**: Vite dev server integration with HMR

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas via drizzle-zod for type-safe validation
- **Current Storage**: In-memory storage with sample course and physics field data
- **Database Ready**: Schema defined for users, courses, and physics fields tables

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route pages (home, courses, fields)
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── static.ts     # Static file serving
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations (generated)
```

### Key Design Patterns
- **Shared Schema**: Database schemas and TypeScript types defined once in `shared/` and used by both frontend and backend
- **Storage Abstraction**: `IStorage` interface allows swapping between in-memory and database storage
- **Component Library**: Radix UI primitives wrapped with Tailwind styling via shadcn/ui

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations with `npm run db:push`

### Third-Party Services
- **Google Fonts**: Outfit (headings) and Plus Jakarta Sans (body text)

### Key NPM Packages
- **Frontend**: React, Wouter, TanStack Query, Framer Motion, Radix UI components
- **Backend**: Express, Drizzle ORM, connect-pg-simple (session storage ready)
- **Validation**: Zod, drizzle-zod
- **Build**: Vite, esbuild, TypeScript