import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Products</h1>
              <p className="text-lg text-gray-600 mb-8">TechFinIA – Innovating Financial Solutions</p>
            </div>
          </div>
        </section>

        {/* Fintech Suite Overview */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Fintech Suite (FTS)</h2>
                  <p className="text-gray-600 mb-6">
                    Our Fintech Suite (FTS) is an end-to-end financial management solution equipped with a full-fledged
                    Chart of Accounts (COA) management system, JV postings, cost center management, and powerful
                    reporting tools.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <div className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-lg font-medium mb-2 text-gray-900">Fintech Suite Demo</h3>
                      <p className="text-gray-600 mb-4">Watch our product demo to see the Fintech Suite in action</p>
                      <Button variant="outline" className="border-gray-300 text-gray-700">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>

              {/* Multi Currency Support */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Multi Currency Support</h3>
                <p className="text-gray-600">
                  Support for multiple currencies with automatic exchange rate calculations.
                </p>
              </div>

              {/* COA Management */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Comprehensive Chart of Accounts (COA) Management
                </h3>
                <p className="text-gray-600">
                  Our FTS solution ensures seamless COA management, allowing businesses to effectively organize and
                  control financial accounts.
                </p>
              </div>

              {/* JV Postings */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">JV (Journal Voucher) Postings</h3>
                <p className="text-gray-600">
                  Record and manage all financial transactions with automated and manual JV postings, ensuring accuracy
                  and compliance.
                </p>
              </div>

              {/* Cost Centre Management */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cost Centre Management</h3>
                <p className="text-gray-600">
                  Efficiently allocate expenses and revenues across multiple cost centers for detailed financial
                  tracking and reporting.
                </p>
              </div>

              {/* Advanced Financial Reporting */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Financial Reporting</h3>
                <p className="text-gray-600 mb-4">Generate real-time, detailed financial reports, including:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">
                      Balance Sheet – Get an overview of assets, liabilities, and equity.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">
                      Trial Balance – Validate financial accuracy with a complete summary of ledger balances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">
                      Profit & Loss (P&L) Statement – Assess your company's financial performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">
                      Cash Flow Statement – Monitor cash movement and financial liquidity.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">
                      Custom Reports – Up to three customized reports based on your specific business requirements.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose TechFinIA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why Choose TechFinIA?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "End-to-End Financial Management – From COA to financial reporting, we cover it all.",
                  "Seamless API Integration – Integrate with your existing systems effortlessly.",
                  "Flexible Deployment – Choose between on-premise or cloud solutions.",
                  "Secure & Scalable – Enterprise-grade security with unlimited scalability.",
                  "User-Friendly Interface – Intuitive design for ease of use and efficiency.",
                ].map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Get Started Today!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join leading businesses that trust TechFinIA for their financial management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

