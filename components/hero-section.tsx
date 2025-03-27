"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Next-Gen Financial Technology</h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Revolutionize your financial operations with TechFinIA's cutting-edge Fintech Suite
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" className="border-gray-300 text-gray-700 px-6 py-2" asChild>
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

