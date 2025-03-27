"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Users, BarChart, Shield } from "lucide-react"
import Link from "next/link"

export function AdminPortalPreview() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart className="h-4 w-4" /> },
    { id: "users", label: "Users", icon: <Users className="h-4 w-4" /> },
    { id: "security", label: "Security", icon: <Shield className="h-4 w-4" /> },
  ]

  return (
    <section className="py-16 bg-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Powerful Admin Portal</h2>
            <p className="text-gray-600 mb-6">
              Take control of your financial operations with our comprehensive admin portal. Manage users, configure
              settings, and ensure security compliance from a single interface.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Role-based access control",
                "Detailed audit logs",
                "Customizable security policies",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/products">
                Explore Admin Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Admin Portal</h3>
                <div className="text-sm text-blue-600">Administrator</div>
              </div>

              <div className="flex overflow-x-auto border-b border-gray-200 mb-4 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center whitespace-nowrap px-4 py-2 text-sm font-medium ${
                      activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                {activeTab === "dashboard" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { label: "Active Users", value: "2,458" },
                        { label: "Transactions", value: "14.5K" },
                        { label: "Revenue", value: "$85.2K" },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 border border-gray-100 transition-all duration-300 hover:border-blue-300 hover:shadow-sm hover:border-2"
                        >
                          <p className="text-gray-500 text-xs">{stat.label}</p>
                          <p className="text-gray-900 font-semibold">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-100 transition-all duration-300 hover:border-blue-300 hover:shadow-sm hover:border-2">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-900">Recent Activity</h4>
                        <button className="text-blue-600 text-xs">View All</button>
                      </div>
                      <div className="space-y-2">
                        {[
                          "New user registered: John Doe",
                          "Payment processed: $1,250.00",
                          "Security alert: Login attempt",
                          "System update completed",
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="text-xs text-gray-600 py-2 border-b border-gray-100 last:border-0"
                          >
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "users" && (
                  <div className="h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">User management interface</p>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Security settings and controls</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

