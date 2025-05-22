"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, FileCheck, Globe, Mail, MapPin, Phone, Shield } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { ContactForm } from "@/components/contact-form"
import { LearnMoreButton } from "@/components/learn-more-button"

export default function Home() {
  const calendlyUrl = "https://calendly.com/contact-securefrontsoftware/30min"

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white">
      {/* Header - Simplified for conversion focus */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-cyan-500 mr-2" />
            <span className="text-xl font-bold">SecureFront</span>
          </div>
          <div className="flex items-center">
            <CalendlyButton className="bg-cyan-500 hover:bg-cyan-600 text-white">Schedule Call</CalendlyButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Screenshot 2025-05-22 214859.png"
            alt="Security professional"
            fill
            className="object-fit brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="bg-[#0a192f]/80 p-6 backdrop-blur-sm rounded-lg border-l-4 border-cyan-500 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Your New Dispatch Control</h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline operations, improve efficiency, and ensure compliance with a solution built for security
                agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CalendlyButton className="bg-cyan-500 hover:bg-cyan-600 text-white">Schedule Call</CalendlyButton>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built Specifically For Security Agencies</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors group cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Calendar className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Simplified Scheduling</h3>
              <p className="text-gray-300">
                Say goodbye to manual scheduling headaches. Easily assign shifts, track attendance, and manage time-offs
                in seconds.
              </p>
            </div>

            <div
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors group cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <MapPin className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-300">
                Track staff location, monitor performance, and ensure compliance from anywhere with live data.
              </p>
            </div>

            <div
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors group cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <FileCheck className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Regulatory Compliance Made Easy</h3>
              <p className="text-gray-300">
                Ensure your team is always compliant with the latest security regulations and automatically generate
                necessary reports.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <LearnMoreButton>Learn More About Features</LearnMoreButton>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Done-For-You, Fully Managed Setup</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative cursor-pointer" onClick={() => window.open(calendlyUrl, "_blank")}>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 h-full hover:border-cyan-500 transition-colors">
                <div className="absolute -top-4 -left-4 bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Onboarding Your Client Data</h3>
                <p className="text-gray-300">
                  Our team helps you upload your client's information to make setup seamless.
                </p>
              </div>
            </div>

            <div className="relative cursor-pointer" onClick={() => window.open(calendlyUrl, "_blank")}>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 h-full hover:border-cyan-500 transition-colors">
                <div className="absolute -top-4 -left-4 bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Training & User Onboarding</h3>
                <p className="text-gray-300">
                  Your team will be trained for easy platform adoption, ensuring full usability.
                </p>
              </div>
            </div>

            <div className="relative cursor-pointer" onClick={() => window.open(calendlyUrl, "_blank")}>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 h-full hover:border-cyan-500 transition-colors">
                <div className="absolute -top-4 -left-4 bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Ongoing Support</h3>
                <p className="text-gray-300">
                  We're here to help you every step of the way with reliable support whenever you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CalendlyButton className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Schedule a Call for Onboarding
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Got Questions? We've Got Answers.</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <h3 className="text-xl font-bold mb-2">How does this improve my agency?</h3>
              <p className="text-gray-300">
                SecureFront automates scheduling, tracking, and reporting so you spend less time on admin tasks and more
                on managing your team.
              </p>
            </div>

            <div
              className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <h3 className="text-xl font-bold mb-2">How quickly can we be operational?</h3>
              <p className="text-gray-300">
                The interface is simple and intuitive. With training and our support team's help, you'll be operational
                in no time.
              </p>
            </div>

            <div
              className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <h3 className="text-xl font-bold mb-2">Can SecureFront Integrate with Our Existing Systems?</h3>
              <p className="text-gray-300">
                Yes, SecureFront integrates easily with your current systems to keep your workflow seamless.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <CalendlyButton className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Have More Questions? Schedule a Call
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Talk About How SecureFront Can Transform Your Agency
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're ready to help you get started with a custom solution tailored to your needs. Schedule a call with us
              today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CalendlyButton className="bg-cyan-500 hover:bg-cyan-600 text-white">Schedule Call</CalendlyButton>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyan-500 mr-2" />
                <span className="text-xl font-bold">SecureFront Software</span>
              </div>
              <p className="text-gray-400 mb-4">Streamlining security operations with innovative software solutions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 mr-2 text-cyan-500 mt-0.5" />
                  <span className="text-gray-400">securefrontsoftware.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-cyan-500 mt-0.5" />
                  <span className="text-gray-400">+1 (754) 422-8813</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-cyan-500 mt-0.5" />
                  <span className="text-gray-400">contact@securefrontsoftware.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">© 2025 SecureFront Software – All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
