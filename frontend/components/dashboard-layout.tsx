"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Chatbot } from "@/components/chatbot"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "student" | "faculty" | "admin"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Common navigation items
  const commonNavItems = [
    { name: "Dashboard", href: `/dashboard/${role}`, icon: LayoutDashboard },
    { name: "Calendar", href: `/dashboard/${role}/calendar`, icon: Calendar },
    { name: "Settings", href: `/dashboard/${role}/settings`, icon: Settings },
  ]

  // Role-specific navigation items
  const roleNavItems = {
    student: [
      { name: "Courses", href: `/dashboard/student/courses`, icon: GraduationCap },
      { name: "Grades", href: `/dashboard/student/grades`, icon: BarChart3 },
      { name: "Attendance", href: `/dashboard/student/attendance`, icon: Users },
    ],
    faculty: [
      { name: "Classes", href: `/dashboard/faculty/classes`, icon: GraduationCap },
      { name: "Students", href: `/dashboard/faculty/students`, icon: Users },
      { name: "Grades", href: `/dashboard/faculty/grades`, icon: BarChart3 },
    ],
    admin: [
      { name: "Users", href: `/dashboard/admin/users`, icon: Users },
      { name: "Reports", href: `/dashboard/admin/reports`, icon: BarChart3 },
      { name: "Departments", href: `/dashboard/admin/departments`, icon: Home },
    ],
  }

  const navItems = [...commonNavItems, ...roleNavItems[role]]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar role={role} navItems={navItems} pathname={pathname} />

        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-16 border-b flex items-center justify-between px-4 bg-background">
            <div className="flex items-center">
              <SidebarTrigger className="mr-2" />
              <h1 className="text-xl font-semibold capitalize">{role} Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="relative" onClick={() => setIsChatOpen(true)}>
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Open chatbot</span>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Link>
              </Button>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
        </div>
      </div>

      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot onClose={() => setIsChatOpen(false)} />
        </div>
      )}

      {/* Floating chat button (only visible when chat is closed) */}
      {!isChatOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full shadow-lg z-50 h-14 w-14"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open chatbot</span>
        </Button>
      )}
    </SidebarProvider>
  )
}

function AppSidebar({
  role,
  navItems,
  pathname,
}: {
  role: string
  navItems: { name: string; href: string; icon: any }[]
  pathname: string
}) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-md" />
          <div>
            <h2 className="text-lg font-semibold">EduPortal</h2>
            <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

