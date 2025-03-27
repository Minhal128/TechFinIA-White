import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Building, Store } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Solutions</h1>
              <p className="text-xl text-gray-600 mb-8">
                Tailored financial technology solutions for your industry and specific business needs
              </p>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Industry Solutions</h2>
              <p className="text-gray-600">
                Our financial technology solutions are tailored to meet the specific needs of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Enterprise & Corporate */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                <div className="mb-6">
                  <Building className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise & Corporate</h3>
                <p className="text-gray-600 mb-6">
                  Optimize financial processes, improve reporting, and enhance decision-making for large enterprises and
                  corporations.
                </p>

                <h4 className="text-lg font-medium mb-4 text-blue-600">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Centralized financial management",
                    "Multi-entity consolidation",
                    "Advanced financial analytics",
                    "Automated reconciliation",
                    "Custom reporting solutions",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group" asChild>
                  <Link href="/solutions/enterprise-corporate">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Small & Medium Businesses */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                <div className="mb-6">
                  <Store className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Small & Medium Businesses</h3>
                <p className="text-gray-600 mb-6">
                  Affordable and scalable financial management solutions designed specifically for the needs of small
                  and medium-sized businesses.
                </p>

                <h4 className="text-lg font-medium mb-4 text-blue-600">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Cost-effective deployment options",
                    "Easy-to-use interface",
                    "Growth-ready scalability",
                    "Integrated accounting and payments",
                    "Simplified compliance",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group" asChild>
                  <Link href="/solutions/small-medium-businesses">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Deployment Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Flexible Deployment Options</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">On-Premise Deployment</h3>
                  <p className="text-gray-600">Secure and fully managed within your own infrastructure.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Cloud Deployment</h3>
                  <p className="text-gray-600">Scalable, flexible, and accessible from anywhere.</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">
                    Contact Us to Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Started Today!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join leading businesses that trust TechFinIA for their financial management needs.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

