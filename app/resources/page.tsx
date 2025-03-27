import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video, Calendar } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Getting Started with TechFinIA's Fintech Suite",
      type: "Guide",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      description: "A comprehensive guide to help you get started with our Fintech Suite.",
      cta: "Read Guide",
    },
    {
      title: "API Integration Tutorial",
      type: "Video",
      icon: <Video className="h-6 w-6 text-blue-400" />,
      description: "Step-by-step tutorial on integrating our APIs with your existing systems.",
      cta: "Watch Video",
    },
    {
      title: "Cost Center Management Tutorial",
      type: "Video",
      icon: <Video className="h-6 w-6 text-blue-400" />,
      description: "Learn how to effectively manage cost centers in our Fintech Suite.",
      cta: "Watch Video",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Resources</h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our library of resources to help you get the most out of our Fintech Suite
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12" id="guides">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Knowledge Center</h2>
              <p className="text-gray-600">Access guides and tutorials to help you succeed with our Fintech Suite.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2"
                >
                  <div className="flex items-center mb-4">
                    {resource.icon}
                    <span className="ml-2 text-sm font-medium text-gray-500">{resource.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                    {resource.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Documentation */}
            <div
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-16"
              id="documentation"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Documentation</h2>
                  <p className="text-gray-600 mb-6">
                    Comprehensive documentation for our Fintech Suite, including user guides, API references, and more.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      "User Guides",
                      "API Reference",
                      "Integration Guides",
                      "Release Notes",
                      "FAQs",
                      "Troubleshooting",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-blue-100 p-1 rounded-full mr-3">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                    Browse Documentation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div
                  className="md:w-1/3 bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2"
                  id="developer-hub"
                >
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2 text-gray-900">Developer Hub</h3>
                    <p className="text-gray-600 mb-4">
                      Access developer resources, including API documentation, SDKs, and code samples.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-600">
                      Visit Developer Hub
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Events - Updated to show no upcoming events */}
            <div className="max-w-4xl mx-auto" id="events">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Upcoming Events</h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                <div className="flex flex-col items-center justify-center py-8">
                  <Calendar className="h-16 w-16 text-blue-300 mb-4" />
                  <h3 className="text-xl font-medium mb-2 text-gray-700">No Upcoming Events</h3>
                  <p className="text-gray-500 text-center max-w-md mb-6">
                    There are currently no scheduled events. Please check back later for updates on our upcoming
                    webinars, conferences, and workshops.
                  </p>
                  <Button variant="outline" className="border-blue-500 text-blue-600">
                    Subscribe to Event Notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team today to learn more about our Fintech Suite and how it can transform your financial
                operations.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
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

