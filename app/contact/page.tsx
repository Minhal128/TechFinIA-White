"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, Check, ChevronDown, Linkedin, Twitter, Facebook, Github } from "lucide-react"
import Link from "next/link"

// Add the Breadcrumb import
import { Breadcrumb } from "@/components/breadcrumb"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      // Scroll to top of form
      window.scrollTo({
        top: document.getElementById("contact-form")?.offsetTop || 0,
        behavior: "smooth",
      })
    }, 1000)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What are your business hours?",
      answer:
        "Our support team is available Monday through Friday from 9:00 AM to 6:00 PM EST. For urgent matters outside of these hours, please use our emergency contact form.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We strive to respond to all inquiries within 24 business hours. For urgent matters, our premium support customers receive priority response times.",
    },
    {
      question: "Do you offer on-site support?",
      answer:
        "Yes, we offer on-site support for enterprise customers. Please contact our sales team to discuss your specific requirements and arrange for on-site support.",
    },
    {
      question: "How can I schedule a product demo?",
      answer:
        "You can schedule a product demo by filling out the contact form on this page and selecting 'Request a Demo' from the inquiry type dropdown. One of our product specialists will contact you to arrange a convenient time.",
    },
    {
      question: "Do you have international offices?",
      answer:
        "Yes, we have offices in North America, Europe, and Asia. Please see our office locations section for specific addresses and contact information.",
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
            { label: "Contact Us", href: "/contact", active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions or need assistance? Our team is here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-2/3" id="contact-form">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>

                  {/* Contact Form Tabs */}
                  <div className="flex border-b border-gray-200 mb-6">
                    {[
                      { id: "general", label: "General Inquiry" },
                      { id: "sales", label: "Sales" },
                      { id: "support", label: "Technical Support" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === tab.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="bg-green-100 p-4 rounded-full mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 text-center mb-6">
                        Thank you for reaching out. Our team will get back to you shortly.
                      </p>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-1">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-500 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-blue-500"
                            required
                          />
                        </div>
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-500">
                          I agree to the{" "}
                          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and consent to being contacted regarding my inquiry.
                        </label>
                      </div>

                      <div className="flex flex-col gap-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={(e) => {
                            e.preventDefault()
                            const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                            const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                            const message = `Hey, I want to connect. From: ${name} (${email})`;
                            
                            // Send email using mailto (simple approach)
                            window.location.href = `mailto:rminhal783@gmailc.om?subject=Connection Request&body=${encodeURIComponent(message)}`;
                            setIsSubmitted(true);
                          }}
                        >
                          Quick Connect
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                        
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Send Detailed Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Email</p>
                        <a
                          href="mailto:contact@techfinia.com"
                          className="text-gray-900 hover:text-red-600 transition-colors"
                        >
                          contact@techfinia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Phone</p>
                        <a href="tel:+15551234567" className="text-gray-900 hover:text-red-600 transition-colors">
                        +92 (313) 202-0111
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Headquarters</p>
                        <p className="text-gray-900">4/C Block A</p>
                        <p className="text-gray-900">Karachi, Pakistan</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div> */}
                      {/* <div>
                        <p className="text-gray-500 text-sm">Business Hours</p>
                        <p className="text-gray-900">Monday - Friday</p>
                        <p className="text-gray-900">9:00 AM - 6:00 PM EST</p>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
                      <Twitter className="h-5 w-5 text-gray-500 hover:text-red-600" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-500 hover:text-red-600" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
                      <Facebook className="h-5 w-5 text-gray-500 hover:text-red-600" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
                      <Github className="h-5 w-5 text-gray-500 hover:text-red-600" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:border-2"
                  >
                    <button
                      className="flex justify-between items-center w-full p-6 text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-blue-600 transition-transform ${
                          expandedFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Financial Operations?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team today to learn more about our solutions and how they can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Schedule a Demo</Button>
                <Button variant="outline" className="border-blue-500 text-blue-600 px-8 py-6 text-lg">
                  View Solutions
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

