export default {
  // Common
  common: {
    welcome: "Welcome",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    search: "Search",
    filter: "Filter",
    export: "Export",
    import: "Import",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    confirm: "Confirm",
  },

  // Navigation
  nav: {
    dashboard: "Dashboard",
    trades: "Trades",
    analytics: "Analytics",
    journal: "Journal",
    accounts: "Accounts",
    settings: "Settings",
    logout: "Logout",
  },

  // Authentication
  auth: {
    login: "Login",
    signup: "Sign Up",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot Password?",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    signInWith: "Sign in with {provider}",
    signUpWith: "Sign up with {provider}",
    emailPlaceholder: "your@email.com",
    passwordPlaceholder: "Enter your password",
  },

  // Dashboard
  dashboard: {
    title: "Dashboard",
    overview: "Overview",
    totalPnL: "Total P&L",
    winRate: "Win Rate",
    totalTrades: "Total Trades",
    avgWin: "Avg Win",
    avgLoss: "Avg Loss",
    sharpeRatio: "Sharpe Ratio",
    maxDrawdown: "Max Drawdown",
    profitFactor: "Profit Factor",
  },

  // Trades
  trades: {
    title: "Trades",
    addTrade: "Add Trade",
    importTrades: "Import Trades",
    symbol: "Symbol",
    side: "Side",
    quantity: "Quantity",
    entryPrice: "Entry Price",
    exitPrice: "Exit Price",
    pnl: "P&L",
    commission: "Commission",
    netPnL: "Net P&L",
    date: "Date",
    long: "Long",
    short: "Short",
  },

  // Settings
  settings: {
    title: "Settings",
    profile: "Profile",
    account: "Account",
    preferences: "Preferences",
    integrations: "Integrations",
    billing: "Billing",
    language: "Language",
    theme: "Theme",
    timezone: "Timezone",
  },
} as const
