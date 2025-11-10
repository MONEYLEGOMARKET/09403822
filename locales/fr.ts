export default {
  // Common
  common: {
    welcome: "Bienvenue",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    create: "Créer",
    search: "Rechercher",
    filter: "Filtrer",
    export: "Exporter",
    import: "Importer",
    close: "Fermer",
    back: "Retour",
    next: "Suivant",
    previous: "Précédent",
    submit: "Soumettre",
    confirm: "Confirmer",
  },

  // Navigation
  nav: {
    dashboard: "Tableau de bord",
    trades: "Transactions",
    analytics: "Analytique",
    journal: "Journal",
    accounts: "Comptes",
    settings: "Paramètres",
    logout: "Déconnexion",
  },

  // Authentication
  auth: {
    login: "Connexion",
    signup: "S'inscrire",
    email: "Email",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié?",
    noAccount: "Vous n'avez pas de compte?",
    hasAccount: "Vous avez déjà un compte?",
    signInWith: "Se connecter avec {provider}",
    signUpWith: "S'inscrire avec {provider}",
    emailPlaceholder: "votre@email.com",
    passwordPlaceholder: "Entrez votre mot de passe",
  },

  // Dashboard
  dashboard: {
    title: "Tableau de bord",
    overview: "Aperçu",
    totalPnL: "P&L Total",
    winRate: "Taux de réussite",
    totalTrades: "Total des transactions",
    avgWin: "Gain moyen",
    avgLoss: "Perte moyenne",
    sharpeRatio: "Ratio de Sharpe",
    maxDrawdown: "Drawdown maximum",
    profitFactor: "Facteur de profit",
  },

  // Trades
  trades: {
    title: "Transactions",
    addTrade: "Ajouter une transaction",
    importTrades: "Importer des transactions",
    symbol: "Symbole",
    side: "Côté",
    quantity: "Quantité",
    entryPrice: "Prix d'entrée",
    exitPrice: "Prix de sortie",
    pnl: "P&L",
    commission: "Commission",
    netPnL: "P&L Net",
    date: "Date",
    long: "Long",
    short: "Short",
  },

  // Settings
  settings: {
    title: "Paramètres",
    profile: "Profil",
    account: "Compte",
    preferences: "Préférences",
    integrations: "Intégrations",
    billing: "Facturation",
    language: "Langue",
    theme: "Thème",
    timezone: "Fuseau horaire",
  },
} as const
