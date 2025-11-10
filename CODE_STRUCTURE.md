# TRADINGSYSTEM - Code Structure Guide

This document provides an overview of the codebase structure and key files.

## 📁 Directory Structure

```
tradingsystem/
├── app/                          # Next.js 16 App Router
│   ├── api/                      # API Routes
│   │   └── auth/
│   │       └── callback/         # OAuth callback handler
│   ├── authentication/           # Authentication page
│   ├── dashboard/                # Main dashboard (protected)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/                   # React Components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── layout/                   # Layout components (empty)
│   ├── dashboard/                # Dashboard-specific components (empty)
│   ├── ai-elements/              # AI components (empty)
│   ├── emails/                   # Email templates (empty)
│   ├── tiptap/                   # TipTap editor components (empty)
│   └── magicui/                  # Custom UI components (empty)
│
├── lib/                          # Utilities & Helpers
│   ├── utils.ts                  # Common utilities (cn, formatters, etc.)
│   ├── prisma.ts                 # Prisma client singleton
│   └── supabase/
│       ├── client.ts             # Supabase browser client
│       └── server.ts             # Supabase server client
│
├── prisma/                       # Database
│   └── schema.prisma             # Complete database schema
│
├── locales/                      # Internationalization
│   ├── client.ts                 # Client-side i18n
│   ├── server.ts                 # Server-side i18n
│   ├── en.ts                     # English translations
│   ├── fr.ts                     # French translations
│   └── [de,es,it,pt,vi,hi,ja,zh,yo].ts  # Other languages
│
├── hooks/                        # Custom React Hooks
│   └── use-user.ts               # User authentication hook
│
├── store/                        # Zustand State Management
│   └── user-store.ts             # User state
│
├── context/                      # React Context (empty)
├── server/                       # Server-side logic (empty)
├── docs/                         # Documentation (empty)
├── scripts/                      # Build scripts (empty)
└── public/                       # Static assets
    ├── images/
    └── videos/
```

## 🗄️ Database Schema (Prisma)

### Core Models

1. **User** - User accounts and authentication
   - Supabase auth integration
   - Subscription management (Free, Starter, Pro, Enterprise)
   - Locale and timezone preferences

2. **Account** - Trading accounts
   - Broker integration (Tradovate, Rithmic, IBKR, etc.)
   - Balance tracking
   - Encrypted credentials

3. **Trade** - Individual trades
   - Entry/exit prices and times
   - P&L calculations
   - AI insights
   - Multiple executions support

4. **Journal** - Trading journal entries
   - Rich text content (TipTap)
   - Trade associations
   - AI summaries

5. **DashboardLayout** - Customizable dashboards
   - Drag-and-drop layouts
   - User-specific configurations

6. **Other Models**
   - AIConversation - AI chat history
   - Notification - User notifications
   - ApiKey - External API keys
   - Webhook - Webhook configurations
   - ImportHistory - CSV import tracking
   - AuditLog - System audit trail

## 🔑 Key Features Implemented

### ✅ Authentication
- **Pages**: `/authentication`
- **Methods**:
  - Email/Password
  - Discord OAuth
  - Supabase Auth integration
- **Protected Routes**: Dashboard requires authentication

### ✅ Dashboard
- **Path**: `/dashboard`
- **Features**:
  - Stats overview (P&L, Win Rate, Total Trades, Drawdown)
  - Quick actions
  - Getting started guide

### ✅ Internationalization (i18n)
- **11 Languages**: en, fr, de, es, it, pt, vi, hi, ja, zh, yo
- **Implementation**: next-international
- **Usage**: Client and server-side translation support

### ✅ UI Components
- **Library**: shadcn/ui (Radix UI primitives)
- **Theme**: Dark/Light mode support
- **Components**: Button, Card, Input, Label

### ✅ State Management
- **User State**: Zustand store
- **Auth State**: Custom `useUser` hook

## 🚀 Getting Started

### 1. Install Dependencies

```bash
bun install
# or npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Add other variables as needed
```

### 3. Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database (development)
npx prisma db push

# Or run migrations (production)
npx prisma migrate dev
```

### 4. Run Development Server

```bash
npm run dev
# or bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Development Workflow

### Adding a New Page

1. Create file in `app/` directory
2. Use Server or Client Components as needed
3. Add to navigation if required

### Adding UI Components

1. Create in `components/ui/` or relevant directory
2. Follow shadcn/ui patterns
3. Use `cn()` utility for className merging

### Adding Translations

1. Add keys to `locales/en.ts`
2. Copy to other locale files
3. Translate text
4. Use `useI18n()` hook in components

### Adding API Routes

1. Create in `app/api/` directory
2. Export GET, POST, etc. functions
3. Use type-safe responses

### Database Changes

1. Update `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name description`
3. Run `npx prisma generate`

## 🔧 Utilities

### `lib/utils.ts`

- **`cn()`** - Tailwind class merging
- **`formatCurrency()`** - Currency formatting
- **`formatPercentage()`** - Percentage formatting
- **`calculateWinRate()`** - Win rate calculation
- **`calculateSharpeRatio()`** - Sharpe ratio
- **`calculateMaxDrawdown()`** - Max drawdown
- And many more...

## 🏗️ Architecture Decisions

### Why Next.js 16 App Router?
- Server Components for better performance
- Nested layouts
- Built-in API routes
- Excellent TypeScript support

### Why Supabase?
- PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- Row Level Security (RLS)

### Why Prisma?
- Type-safe database queries
- Excellent migration system
- Great DX with TypeScript

### Why next-international?
- App Router compatible
- Server Component support
- Minimal bundle size
- Great DX

## 🚧 TODO / Not Yet Implemented

### High Priority
- [ ] Trade listing page (`/dashboard/trades`)
- [ ] Trade detail page (`/dashboard/trades/[id]`)
- [ ] CSV import functionality
- [ ] Broker integrations (Tradovate, Rithmic, IBKR)
- [ ] Analytics charts (Recharts)
- [ ] Journal pages
- [ ] Settings page

### Medium Priority
- [ ] AI chat assistant
- [ ] Notifications system
- [ ] Dashboard layout customization (drag-and-drop)
- [ ] Export functionality
- [ ] Email templates
- [ ] Stripe integration
- [ ] Webhook system

### Low Priority
- [ ] Admin panel
- [ ] API documentation
- [ ] Component Storybook
- [ ] E2E tests
- [ ] Mobile app

## 📚 Additional Documentation

- **Prisma Schema**: See `prisma/schema.prisma` for complete database structure
- **Environment Variables**: See `.env.example` for all required variables
- **Project Status**: See `PROJECT_STATUS.md` for detailed project analysis
- **License**: See `LICENSE` for MIT License details

## 🤝 Contributing

This is an open-source project under the MIT License. Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Discord**: https://discord.gg/a5YVF5Ec2n
- **GitHub Issues**: Report bugs and request features
- **Email**: support@tradingsystem.app

---

**Built with ❤️ by the TRADINGSYSTEM community**
