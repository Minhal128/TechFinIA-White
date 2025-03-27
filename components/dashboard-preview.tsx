"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, DollarSign, Users, Activity } from "lucide-react"
import Link from "next/link"

export function DashboardPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Make canvas responsive
    const parent = canvas.parentElement
    if (parent) {
      canvas.width = parent.clientWidth
      canvas.height = Math.min(300, parent.clientWidth * 0.6)
    }

    // Data for the chart
    const data = [42, 45, 53, 58, 48, 52, 60, 65, 68, 75, 71, 80]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Chart configuration
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    ctx.strokeStyle = "#e5e7eb" // gray-200
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight * i) / 4
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.stroke()
    }

    // Draw x-axis labels (months)
    ctx.fillStyle = "#6b7280" // gray-500
    ctx.font = "10px Arial"
    ctx.textAlign = "center"

    const xStep = chartWidth / (months.length - 1)

    // Only show every other month on small screens
    const skipFactor = windowWidth < 640 ? 2 : 1

    months.forEach((month, i) => {
      if (i % skipFactor === 0 || i === months.length - 1) {
        const x = padding + xStep * i
        ctx.fillText(month, x, canvas.height - padding / 2)
      }
    })

    // Draw line chart
    ctx.strokeStyle = "#2563eb" // blue-600
    ctx.lineWidth = 2
    ctx.lineJoin = "round"

    ctx.beginPath()

    const maxValue = Math.max(...data)

    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / maxValue)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw area under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, canvas.height - padding)
    gradient.addColorStop(0, "rgba(37, 99, 235, 0.2)") // blue-600 with opacity
    gradient.addColorStop(1, "rgba(37, 99, 235, 0.0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(padding, canvas.height - padding)

    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / maxValue)
      ctx.lineTo(x, y)
    })

    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.closePath()
    ctx.fill()

    // Draw data points
    ctx.fillStyle = "#2563eb" // blue-600

    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / maxValue)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [windowWidth])

  return (
    <section className="py-16 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Real-time Financial Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Monitor your financial performance with our intuitive dashboard. Get real-time insights, track key
              metrics, and make data-driven decisions with confidence.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Interactive data visualization",
                "Customizable widgets and reports",
                "AI-powered financial forecasting",
                "Automated anomaly detection",
                "Multi-currency support",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/products">
                Explore Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Financial Performance</h3>
                <div className="text-sm text-gray-500">Last 12 months</div>
              </div>

              <div className="mb-6">
                <canvas ref={canvasRef} className="w-full h-auto"></canvas>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Revenue", value: "$1.2M", icon: <DollarSign className="h-4 w-4 text-blue-600" /> },
                  { label: "Customers", value: "2,543", icon: <Users className="h-4 w-4 text-blue-600" /> },
                  { label: "Growth", value: "+18.7%", icon: <Activity className="h-4 w-4 text-blue-600" /> },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 border border-gray-100 transition-all duration-300 hover:border-blue-300 hover:shadow-sm hover:border-2"
                  >
                    <div className="flex items-center mb-1">
                      {stat.icon}
                      <p className="text-gray-500 text-xs ml-1">{stat.label}</p>
                    </div>
                    <p className="text-gray-900 font-semibold text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

