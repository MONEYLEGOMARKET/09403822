import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Globe, Lock, Rocket, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-8 h-8" />
              <span className="text-xl font-bold">TRADINGSYSTEM</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm hover:underline">
                Dashboard
              </Link>
              <Link href="/authentication" className="text-sm hover:underline">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/50">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium">100% Free & Open Source - MIT License</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Professional Trading Analytics
                <span className="block text-muted-foreground">For Everyone</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track your trades, analyze performance, and improve your trading with AI-powered insights.
                No license fees. No restrictions. Forever free.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/authentication"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://github.com/yourusername/tradingsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything You Need to Succeed
                </h2>
                <p className="text-lg text-muted-foreground">
                  Professional-grade features without the enterprise price tag
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<BarChart3 className="w-10 h-10" />}
                  title="Advanced Analytics"
                  description="Track P&L, win rate, risk metrics, and more with beautiful charts and insights."
                />
                <FeatureCard
                  icon={<Brain className="w-10 h-10" />}
                  title="AI-Powered Insights"
                  description="Get intelligent analysis of your trading patterns and suggestions for improvement."
                />
                <FeatureCard
                  icon={<Globe className="w-10 h-10" />}
                  title="Multi-Broker Support"
                  description="Import trades from Tradovate, Rithmic, IBKR, and more with AI-powered CSV mapping."
                />
                <FeatureCard
                  icon={<Zap className="w-10 h-10" />}
                  title="Real-time Sync"
                  description="Automatic synchronization with supported brokers for up-to-date data."
                />
                <FeatureCard
                  icon={<Rocket className="w-10 h-10" />}
                  title="Customizable Dashboard"
                  description="Drag-and-drop widgets to create your perfect trading workspace."
                />
                <FeatureCard
                  icon={<Lock className="w-10 h-10" />}
                  title="Secure & Private"
                  description="Your data is encrypted and belongs to you. Self-host or use our cloud."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Open Source CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Built by Traders, For Traders
              </h2>
              <p className="text-lg text-muted-foreground">
                TRADINGSYSTEM is completely free and open-source under the MIT License.
                Use it for personal trading, commercial products, or anything else.
                No strings attached.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/authentication"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Start Trading Analytics
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://discord.gg/a5YVF5Ec2n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  Join Discord Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                <span className="font-bold">TRADINGSYSTEM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open-source trading analytics for professional traders.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link href="/features" className="hover:underline">Features</Link></li>
                <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
                <li><Link href="https://github.com/yourusername/tradingsystem" className="hover:underline">GitHub</Link></li>
                <li><Link href="https://discord.gg/a5YVF5Ec2n" className="hover:underline">Discord</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/LICENSE" className="hover:underline">MIT License</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TRADINGSYSTEM. Released under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
