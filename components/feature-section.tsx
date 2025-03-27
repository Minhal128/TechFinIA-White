import { Shield, Zap, Globe, Lock, RefreshCw } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and multi-factor authentication to keep your financial data secure.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Lightning Fast API",
    description: "High-performance API with 99.99% uptime and sub-millisecond response times.",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "Global Compliance",
    description: "Built-in compliance with financial regulations across multiple jurisdictions.",
  },
  {
    icon: <Lock className="h-6 w-6 text-blue-600" />,
    title: "Secure Transactions",
    description: "End-to-end encrypted transaction processing.",
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
    title: "Seamless Integration",
    description: "Connect with existing financial systems through our extensive library of pre-built connectors.",
  },
]

export function FeatureSection() {
  return (
    <section className="py-16 bg-blue-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Fintech Suite combines cutting-edge technology with intuitive design to deliver a comprehensive
            financial management solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

