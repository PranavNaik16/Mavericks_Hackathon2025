import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, Calendar, GraduationCap, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Students</p>
                <p className="text-3xl font-bold">2,845</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Users className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Faculty Members</p>
                <p className="text-3xl font-bold">142</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <GraduationCap className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Courses</p>
                <p className="text-3xl font-bold">86</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <BookOpen className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Departments</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <BarChart className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <Card>
          <CardHeader>
            <CardTitle>College Analytics</CardTitle>
            <CardDescription>Key performance indicators and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="enrollment">
              <TabsList className="mb-4">
                <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
                <TabsTrigger value="performance">Academic Performance</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
              </TabsList>

              <TabsContent value="enrollment">
                <div className="space-y-6">
                  <div className="h-[300px] border rounded-lg p-4 flex items-center justify-center">
                    <div className="text-muted-foreground">Enrollment Trends Chart</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Enrollment by Department</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { dept: "Computer Science", count: 520, change: "+5%" },
                            { dept: "Engineering", count: 480, change: "+3%" },
                            { dept: "Business", count: 410, change: "-2%" },
                            { dept: "Arts & Humanities", count: 320, change: "+1%" },
                            { dept: "Sciences", count: 390, change: "+4%" },
                          ].map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm">{item.dept}</span>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{item.count}</span>
                                <span
                                  className={`text-xs ${
                                    item.change.startsWith("+")
                                      ? "text-green-600 dark:text-green-400"
                                      : "text-red-600 dark:text-red-400"
                                  }`}
                                >
                                  {item.change}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">New Admissions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center">
                          <div className="text-muted-foreground">Admissions Chart</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Graduation Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center">
                          <div className="text-muted-foreground">Graduation Rate Chart</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance">
                <div className="space-y-6">
                  <div className="h-[300px] border rounded-lg p-4 flex items-center justify-center">
                    <div className="text-muted-foreground">GPA Distribution Chart</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Department Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { dept: "Computer Science", gpa: 3.4 },
                            { dept: "Engineering", gpa: 3.5 },
                            { dept: "Business", gpa: 3.2 },
                            { dept: "Arts & Humanities", gpa: 3.6 },
                            { dept: "Sciences", gpa: 3.3 },
                          ].map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm">{item.dept}</span>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{item.gpa.toFixed(1)}</span>
                                <div
                                  className={`w-24 h-2 rounded-full ${
                                    item.gpa >= 3.5
                                      ? "bg-green-500 dark:bg-green-600"
                                      : item.gpa >= 3.0
                                        ? "bg-blue-500 dark:bg-blue-600"
                                        : "bg-orange-500 dark:bg-orange-600"
                                  }`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Course Success Rates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { course: "Introduction to Programming", rate: 92 },
                            { course: "Calculus I", rate: 78 },
                            { course: "Business Ethics", rate: 88 },
                            { course: "Organic Chemistry", rate: 72 },
                            { course: "World History", rate: 85 },
                          ].map((item, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{item.course}</span>
                                <span className="font-medium">{item.rate}%</span>
                              </div>
                              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    item.rate >= 85
                                      ? "bg-green-500 dark:bg-green-600"
                                      : item.rate >= 75
                                        ? "bg-blue-500 dark:bg-blue-600"
                                        : "bg-orange-500 dark:bg-orange-600"
                                  }`}
                                  style={{ width: `${item.rate}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="attendance">
                <div className="space-y-6">
                  <div className="h-[300px] border rounded-lg p-4 flex items-center justify-center">
                    <div className="text-muted-foreground">Attendance Trends Chart</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Attendance by Department</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { dept: "Computer Science", rate: 88 },
                            { dept: "Engineering", rate: 92 },
                            { dept: "Business", rate: 85 },
                            { dept: "Arts & Humanities", rate: 82 },
                            { dept: "Sciences", rate: 90 },
                          ].map((item, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{item.dept}</span>
                                <span className="font-medium">{item.rate}%</span>
                              </div>
                              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${item.rate}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Low Attendance Alerts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { course: "Calculus I", section: "A", rate: 68, instructor: "Dr. Johnson" },
                            {
                              course: "Introduction to Psychology",
                              section: "C",
                              rate: 72,
                              instructor: "Prof. Williams",
                            },
                            { course: "Organic Chemistry", section: "B", rate: 65, instructor: "Dr. Smith" },
                          ].map((item, index) => (
                            <div key={index} className="p-3 border rounded-lg">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{item.course}</p>
                                  <p className="text-sm text-muted-foreground">
                                    Section {item.section} • {item.instructor}
                                  </p>
                                </div>
                                <div className="text-red-600 dark:text-red-400 font-medium">{item.rate}%</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* System Notices Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>System Notices & Announcements</CardTitle>
              <CardDescription>Important updates and announcements for all users</CardDescription>
            </div>
            <Button>Create Announcement</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "System Maintenance",
                  date: "March 20, 2025",
                  description:
                    "The system will be down for maintenance from 2:00 AM to 4:00 AM. Please plan accordingly.",
                  priority: "high",
                },
                {
                  title: "New Grading Policy",
                  date: "Effective April 1, 2025",
                  description:
                    "The college has updated its grading policy. All faculty members are required to review the changes.",
                  priority: "medium",
                },
                {
                  title: "Summer Registration",
                  date: "Opens March 25, 2025",
                  description:
                    "Summer course registration will open for all students. The course catalog is now available for preview.",
                  priority: "low",
                },
              ].map((item, index) => (
                <div key={index} className="flex border rounded-lg p-4">
                  <div
                    className={`mr-4 p-2 rounded-full ${
                      item.priority === "high"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : item.priority === "medium"
                          ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}
                  >
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.priority === "high"
                            ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                            : item.priority === "medium"
                              ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                              : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {item.priority} priority
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

