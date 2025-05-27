import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Smartphone, Lock, Wifi, Eye, Zap, Download, QrCode, CheckCircle, Globe, ArrowLeft } from "lucide-react"

export default function AndroidDownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="border-b border-[#1e3a5f]/50 bg-[#0a1628]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#00d4ff] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-[#00d4ff]" />
              <span className="text-xl font-bold text-white">SecureFront</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Security
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  SecureFront for
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00f5ff]">
                    {" "}
                    Android
                  </span>
                </h1>
                <p className="text-xl text-[#94a3b8] leading-relaxed">
                  Advanced portal for security professionals, create reports, manage your schedule and clock-in to work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#00d4ff] hover:bg-[#00c4ef] text-[#0a1628] px-8 py-6 text-lg">
                  <Download className="w-5 h-5 mr-2" /><a href="/apk/sfd.apk" download >
                  Download for Android
                  </a>
                </Button>
       
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
        
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-4 bg-[#1e3a5f]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Powerful Security Features</h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Everything you need to keep your Android device secure and your data protected
            </p>
          </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      icon: Shield,
      title: "Real-time Clock-in",
      description: "Employees clock in with automatic GPS validation, ensuring accountability and live tracking.",
    },
    {
      icon: Wifi,
      title: "Geofenced Attendance",
      description: "Clock-ins and outs are restricted to the designated site boundaries for full compliance.",
    },
    {
      icon: Lock,
      title: "Secure Biometric Login",
      description: "Employees sign in using biometrics or secure Firebase authentication for protected access.",
    },
    {
      icon: Eye,
      title: "Live Shift Monitoring",
      description: "Managers can view active shifts, check-ins, and late reports in real time from the dashboard.",
    },
    {
      icon: Zap,
      title: "Instant Incident Reports",
      description: "Employees can submit incident or hourly reports directly from their mobile device.",
    },
    {
      icon: Globe,
      title: "Site-Based Messaging",
      description: "Built-in messaging keeps employees and managers aligned on shift updates and alerts.",

              },
            ].map((feature, index) => (
              <Card key={index} className="bg-[#1e3a5f]/50 border-[#2d4f73] hover:bg-[#1e3a5f]/70 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-[#00d4ff] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#94a3b8]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4 bg-[#1e3a5f]/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">System Requirements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1e3a5f]/50 border-[#2d4f73]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Minimum Requirements</h3>
                <div className="space-y-4">
                  {[
                    "Android 7.0 (API level 24) or higher",
                    "2GB RAM",
                    "100MB free storage space",
                    "Internet connection for updates",
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff]" />
                      <span className="text-[#94a3b8]">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1e3a5f]/50 border-[#2d4f73]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Recommended</h3>
                <div className="space-y-4">
                  {[
                    "Android 10.0 or higher",
                    "4GB RAM or more",
                    "500MB free storage space",
                    " authentication support",
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff]" />
                      <span className="text-[#94a3b8]">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#00d4ff]/20 to-[#00f5ff]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to manage your work from your Android Device?</h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Get SecureFront on your Android device and stay connected wherever you go. Professional-grade security in
            your pocket.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#00d4ff] hover:bg-[#00c4ef] text-[#0a1628] px-8 py-6 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download from Google Play [ Coming Soon ]
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg"
              ><a href="/apk/sfd.apk" download >
                Download APK Direct
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            <p>Free download • No ads • Premium features included</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e3a5f]/50 bg-[#0a1628]/90 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#00d4ff]" />
                <span className="text-lg font-bold text-white">SecureFront</span>
              </div>
              <p className="text-[#94a3b8]"></p>
            </div>

     

         

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="terms-of-service" className="block text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
                  Terms of Service
                </Link>
              
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e3a5f]/50 mt-8 pt-8 text-center text-[#94a3b8]">
            <p>&copy; 2025 SecureFront. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
