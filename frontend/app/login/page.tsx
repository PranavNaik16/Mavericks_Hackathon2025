"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || "student"
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>, role: string) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful",
        description: `Welcome to the ${role} dashboard`,
      })
      router.push(`/dashboard/${role}`)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Image src="/placeholder.svg?height=50&width=50" alt="Logo" width={50} height={50} className="rounded-md" />
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Login to access your portal</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={defaultRole} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <LoginForm role="student" onSubmit={handleLogin} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="faculty">
              <LoginForm role="faculty" onSubmit={handleLogin} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="admin">
              <LoginForm role="admin" onSubmit={handleLogin} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Forgot your password?
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

function LoginForm({
  role,
  onSubmit,
  isLoading,
}: {
  role: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>, role: string) => void
  isLoading: boolean
}) {
  return (
    <form onSubmit={(e) => onSubmit(e, role)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${role}-id`}>ID</Label>
        <Input id={`${role}-id`} placeholder={`Enter your ${role} ID`} required />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor={`${role}-password`}>Password</Label>
        </div>
        <Input id={`${role}-password`} type="password" placeholder="••••••••" required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  )
}

