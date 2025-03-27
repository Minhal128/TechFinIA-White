import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Services</h1>
              <p className="text-lg text-gray-600 mb-8">Comprehensive services to support your financial operations</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            {/* API Integrations */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-16 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Seamless API Integrations</h2>
              <p className="text-gray-600 mb-6">
                Our RESTful APIs ensure smooth integration with your existing operational systems, enabling real-time
                financial data exchange.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">Available APIs:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                  <span className="text-gray-600">Authentication API – Secure authentication for accessing FTS.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                  <span className="text-gray-600">
                    JV Posting API – Automate journal voucher postings with external systems.
                  </span>
                </li>
              </ul>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/resources#documentation">
                  View API Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Admin Portal */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-16 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Admin Portal – Complete Control at Your Fingertips
              </h2>
              <p className="text-gray-600 mb-6">
                The FTS Admin Portal is designed for authenticated users, providing full control over financial
                activities and user roles.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">Admin Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "User Management & Role-Based Access Control",
                  "COA Management – Define and structure financial accounts.",
                  "Cost Centre Management – Track and manage financial allocations.",
                  "JV Posting Screen – Manage and approve journal entries.",
                  "User Posting & Authorization Limits – Define limits for financial transactions.",
                  "Bank Reconciliation – Ensure financial accuracy and compliance.",
                  "Fiscal Year Closure – Automate year-end financial closing activities.",
                  "General Ledger Budgeting – Set financial budgets and track expenditures.",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/contact">
                  Request Admin Portal Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Flexible Deployment Options */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Flexible Deployment Options</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">On-Premise Deployment</h3>
                  <p className="text-gray-600 mb-4">Secure and fully managed within your own infrastructure.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Complete control over your data</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Enhanced security and compliance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Cloud Deployment</h3>
                  <p className="text-gray-600 mb-4">Scalable, flexible, and accessible from anywhere.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Quick and easy setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Automatic updates and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/contact">
                  Discuss Deployment Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to schedule a demo or learn more about how our Fintech Suite (FTS) can transform your
                financial operations!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

