import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Building, BarChart3, Layers, RefreshCw, Users } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function EnterpriseAndCorporatePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Enterprise & Corporate", href: "/solutions/enterprise-corporate", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Enterprise & Corporate Solutions</h1>
              <p className="text-xl text-gray-600 mb-8">
                Optimize financial processes, improve reporting, and enhance decision-making for large enterprises and
                corporations.
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Empowering Enterprise Financial Management</h2>
                <p className="text-gray-600 mb-6">
                  Large enterprises and corporations face unique financial challenges, from managing multiple entities
                  to complex reporting requirements and regulatory compliance. Our enterprise solutions are designed to
                  address these challenges and help you optimize your financial operations.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Centralized financial management across multiple entities",
                    "Advanced financial analytics and reporting",
                    "Automated reconciliation and financial processes",
                    "Seamless integration with existing enterprise systems",
                    "Scalable solutions that grow with your business",
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
                  <Building className="h-24 w-24 text-blue-400 opacity-50" />
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
                Our comprehensive suite of solutions for enterprises and corporations addresses your specific needs and
                challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Layers className="h-10 w-10 text-blue-400" />,
                  title: "Multi-Entity Management",
                  description:
                    "Manage finances across multiple entities, subsidiaries, or branches from a single platform with consolidated reporting.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
                  title: "Advanced Financial Analytics",
                  description:
                    "Gain deep insights into your financial performance with advanced analytics and customizable dashboards.",
                },
                {
                  icon: <RefreshCw className="h-10 w-10 text-blue-400" />,
                  title: "Automated Reconciliation",
                  description:
                    "Streamline reconciliation processes with automated matching and exception handling for improved accuracy and efficiency.",
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-400" />,
                  title: "Role-Based Access Control",
                  description:
                    "Ensure security and compliance with granular access controls based on roles and responsibilities.",
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

        {/* Case Study */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Case Study</h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-blue-50 rounded-lg p-4 h-full flex flex-col justify-center items-center">
                      <Building className="h-16 w-16 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 text-center">Tech Innovations Inc</h3>
                      <p className="text-gray-600 text-center">Global technology company</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Streamlining Multi-Entity Financial Management
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Challenge</h4>
                        <p className="text-gray-600">
                          Tech Innovations Inc was struggling to manage finances across multiple subsidiaries and
                          countries, leading to inefficient processes, reporting delays, and limited visibility into
                          financial performance.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Solution</h4>
                        <p className="text-gray-600">
                          We implemented our Multi-Entity Management solution, which provided a centralized platform for
                          managing finances across all entities, with consolidated reporting and automated
                          reconciliation.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">Results</h4>
                        <ul className="space-y-2">
                          {[
                            "60% reduction in month-end close time",
                            "Improved financial visibility across all entities",
                            "40% reduction in reconciliation effort",
                            "Enhanced decision-making with real-time insights",
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
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Improved Financial Visibility",
                    description:
                      "Gain a comprehensive view of your financial performance across all entities and subsidiaries.",
                  },
                  {
                    title: "Streamlined Financial Processes",
                    description:
                      "Automate and standardize financial processes across your organization for improved efficiency.",
                  },
                  {
                    title: "Enhanced Decision-Making",
                    description:
                      "Make informed decisions with real-time insights into your financial performance and trends.",
                  },
                  {
                    title: "Reduced Compliance Risk",
                    description:
                      "Ensure compliance with regulatory requirements with automated controls and comprehensive audit trails.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Ready to Optimize Your Enterprise Financial Operations?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team today to learn more about our solutions for enterprises and corporations.
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

