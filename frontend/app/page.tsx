import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-md" />
            <h1 className="text-2xl font-bold">EduPortal</h1>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Modern College Management System</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive platform for students, faculty, and administrators to manage academic activities
              efficiently.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="College Management System"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Login Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Portal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LoginCard
            title="Student Portal"
            description="Access your courses, grades, attendance, and more."
            icon="👨‍🎓"
            href="/login?role=student"
          />
          <LoginCard
            title="Faculty Portal"
            description="Manage classes, attendance, grades, and student performance."
            icon="👩‍🏫"
            href="/login?role=faculty"
          />
          <LoginCard
            title="Admin Portal"
            description="Oversee all college operations, users, and system settings."
            icon="👨‍💼"
            href="/login?role=admin"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-lg my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Smart Attendance"
            description="Webcam-based attendance tracking with facial recognition."
            icon="📸"
          />
          <FeatureCard
            title="Grade Prediction"
            description="AI-powered grade predictions and study recommendations."
            icon="📊"
          />
          <FeatureCard
            title="Event Management"
            description="Dynamic notice board for announcements and events."
            icon="📅"
          />
          <FeatureCard
            title="AI Assistance"
            description="24/7 AI chatbot for instant support and guidance."
            icon="🤖"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=30&width=30"
                alt="Logo"
                width={30}
                height={30}
                className="rounded-md"
              />
              <h2 className="text-xl font-bold">EduPortal</h2>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduPortal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function LoginCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: string
  href: string
}) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={href}>Login</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

