import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Store, BarChart3, Shield, Zap, CreditCard } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SmallMediumBusinessesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Small & Medium Businesses", href: "/solutions/small-medium-businesses", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Small & Medium Business Solutions</h1>
              <p className="text-xl text-gray-600 mb-8">
                Affordable and scalable financial management solutions designed specifically for the needs of small and
                medium-sized businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-600">
                  View Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Financial Solutions Tailored for Growth</h2>
                <p className="text-gray-600 mb-6">
                  Small and medium-sized businesses need financial solutions that are both powerful and affordable. Our
                  SMB solutions provide the tools you need to manage your finances effectively without the complexity
                  and cost of enterprise systems.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Cost-effective deployment options",
                    "Easy-to-use interface",
                    "Growth-ready scalability",
                    "Integrated accounting and payments",
                    "Simplified compliance",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="aspect-video rounded-lg bg-blue-50 flex items-center justify-center">
                  <Store className="h-24 w-24 text-blue-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Solutions</h2>
              <p className="text-gray-600">
                Our solutions for small and medium businesses are designed to be easy to use, affordable, and scalable
                as your business grows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
                  title: "Financial Management",
                  description:
                    "Simplified financial management with essential accounting features and easy-to-understand reporting.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-blue-400" />,
                  title: "Payment Processing",
                  description:
                    "Accept payments online and in-person with integrated payment processing and automated reconciliation.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-400" />,
                  title: "Security & Compliance",
                  description:
                    "Keep your financial data secure and stay compliant with regulations without the complexity.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-400" />,
                  title: "Growth-Ready Platform",
                  description: "Start with what you need now and easily add more features as your business grows.",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Deployment Options */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Flexible Deployment Options</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
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
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Customizable to your specific needs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
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
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                      <span className="text-gray-600">Reduced IT infrastructure costs</span>
                    </li>
                  </ul>
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

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Success Story</h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-blue-50 rounded-lg p-4 h-full flex flex-col justify-center items-center">
                      <Store className="h-16 w-16 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 text-center">GrowFast Solutions</h3>
                      <p className="text-gray-600 text-center">Digital marketing agency</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Scaling Financial Operations with Growth</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Challenge</h4>
                        <p className="text-gray-600">
                          GrowFast Solutions was experiencing rapid growth but their financial systems couldn't keep up,
                          leading to inefficiencies and reporting challenges.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Solution</h4>
                        <p className="text-gray-600">
                          We implemented our SMB Financial Management solution with cloud deployment, providing them
                          with scalable financial tools that could grow with their business.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Results</h4>
                        <ul className="space-y-2">
                          {[
                            "50% reduction in financial processing time",
                            "Real-time financial visibility for better decision-making",
                            "Seamless scaling as the company grew from 10 to 50 employees",
                            "Improved client billing and payment processing",
                          ].map((result, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                <Check className="h-3 w-3 text-blue-600" />
                              </div>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="border-blue-500 text-blue-600">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Grow Your Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team today to learn more about our solutions for small and medium businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Request a Demo</Button>
                <Button variant="outline" className="border-blue-500 text-blue-600 px-8 py-6 text-lg">
                  Contact Sales
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

