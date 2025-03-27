import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                About <span className="text-blue-600">TechFin</span>
                <span className="text-red-600">IA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">Innovating Financial Solutions for the Digital Age</p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">About Us</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2025, <span className="text-blue-600">TechFin</span>
                  <span className="text-red-600">IA</span> is a leading provider of cutting-edge Fintech solutions,
                  delivering a comprehensive Fintech Suite (FTS) designed to streamline financial operations for
                  businesses of all sizes. Our mission is to empower enterprises with seamless financial management,
                  automation, and integration capabilities, ensuring efficiency and accuracy at every step.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">
                      To revolutionize financial technology by providing innovative, secure, and user-friendly solutions
                      that empower businesses to achieve their financial goals.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the global leader in fintech innovation, setting new standards for financial management
                      technology and driving digital transformation across industries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Why Choose <span className="text-blue-600">TechFin</span>
                  <span className="text-red-600">IA</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Started Today!</h2>
                  <p className="text-gray-600 mb-6">
                    Join leading businesses that trust <span className="text-blue-600">TechFin</span>
                    <span className="text-red-600">IA</span> for their financial management needs.
                  </p>
                  <p className="text-gray-600 mb-8">
                    📩 Contact us today to schedule a demo or learn more about how our Fintech Suite (FTS) can transform
                    your financial operations!
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

