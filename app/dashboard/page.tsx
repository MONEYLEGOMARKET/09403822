"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, TrendingDown, Activity, Plus } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push("/authentication")
        return
      }

      setUser(user)
    } catch (error) {
      console.error("Error checking user:", error)
      router.push("/authentication")
    } finally {
      setLoading(false)
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xl font-bold">TRADINGSYSTEM</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">
              Here's an overview of your trading performance
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total P&L"
              value="$0.00"
              change={"+0.00%"}
              positive={true}
              icon={<TrendingUp className="w-4 h-4" />}
            />
            <StatsCard
              title="Win Rate"
              value="0%"
              change="0 wins / 0 trades"
              positive={true}
              icon={<Activity className="w-4 h-4" />}
            />
            <StatsCard
              title="Total Trades"
              value="0"
              change="This month"
              positive={true}
              icon={<BarChart3 className="w-4 h-4" />}
            />
            <StatsCard
              title="Max Drawdown"
              value="0%"
              change="All time"
              positive={false}
              icon={<TrendingDown className="w-4 h-4" />}
            />
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Get started by importing your trades or connecting your broker
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <Plus className="w-6 h-6" />
                  <span>Add Trade</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>Import Trades</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <Activity className="w-6 h-6" />
                  <span>Connect Broker</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Follow these steps to set up your trading analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Connect your trading account</h4>
                    <p className="text-sm text-muted-foreground">
                      Link your broker account for automatic trade sync
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Import your trade history</h4>
                    <p className="text-sm text-muted-foreground">
                      Upload CSV files or sync automatically from your broker
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Analyze your performance</h4>
                    <p className="text-sm text-muted-foreground">
                      View detailed analytics and AI-powered insights
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function StatsCard({
  title,
  value,
  change,
  positive,
  icon,
}: {
  title: string
  value: string
  change: string
  positive: boolean
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${positive ? "text-green-500" : "text-muted-foreground"}`}>
          {change}
        </p>
      </CardContent>
    </Card>
  )
}
