import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Users } from "lucide-react"

export default function FacultyDashboard() {
  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Card className="w-full md:w-2/3">
            <CardHeader className="pb-2">
              <CardTitle>Welcome back, Dr. Smith</CardTitle>
              <CardDescription>Tuesday, March 11, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Today's Classes</h3>
                  <div className="space-y-3">
                    {[
                      { time: "09:00 AM - 10:30 AM", course: "Computer Science 101", room: "Room 302", students: 35 },
                      { time: "01:00 PM - 02:30 PM", course: "Advanced Programming", room: "Lab 105", students: 28 },
                      { time: "03:00 PM - 04:30 PM", course: "Data Structures", room: "Room 201", students: 32 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 rounded-md border">
                        <Clock className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">{item.course}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.time} • {item.room}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {item.students} students
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="w-full md:w-1/3 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-2 p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Classes</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 p-2 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Students</p>
                      <p className="text-2xl font-bold">142</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Upcoming Deadlines</p>
                  <div className="space-y-2">
                    {[
                      { task: "Grade Midterms", course: "CS101", days: 2 },
                      { task: "Project Review", course: "CS240", days: 5 },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div>
                          <p>{item.task}</p>
                          <p className="text-muted-foreground">{item.course}</p>
                        </div>
                        <div className="font-medium">{item.days} days left</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: "Monday", time: "10:00 AM - 12:00 PM", location: "Office 405" },
                  { day: "Wednesday", time: "2:00 PM - 4:00 PM", location: "Office 405" },
                  { day: "Friday", time: "11:00 AM - 1:00 PM", location: "Virtual (Zoom)" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.day}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="text-sm">{item.location}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Student Performance Section */}
        <Card>
          <CardHeader>
            <CardTitle>Student Performance Analytics</CardTitle>
            <CardDescription>AI-powered insights on student performance across your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="at-risk">At-Risk Students</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      course: "Computer Science 101",
                      averageGrade: "B+",
                      attendance: 92,
                      insight:
                        "Overall strong performance. Students are struggling with pointers and memory management concepts.",
                    },
                    {
                      course: "Advanced Programming",
                      averageGrade: "B",
                      attendance: 88,
                      insight:
                        "Project submissions show good coding practices, but test scores are lower than expected.",
                    },
                    {
                      course: "Data Structures",
                      averageGrade: "B-",
                      attendance: 85,
                      insight:
                        "Students need additional support with tree and graph algorithms. Consider extra practice sessions.",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.course}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Average Grade</p>
                            <p className="text-xl font-bold">{item.averageGrade}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Attendance</p>
                            <p className="text-xl font-bold">{item.attendance}%</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">AI Insight:</p>
                          <p className="text-sm text-muted-foreground">{item.insight}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="at-risk">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Students who may need additional support based on attendance, grades, and engagement patterns.
                  </p>

                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="text-sm font-medium text-left p-3">Student</th>
                          <th className="text-sm font-medium text-left p-3">Course</th>
                          <th className="text-sm font-medium text-left p-3">Current Grade</th>
                          <th className="text-sm font-medium text-left p-3">Attendance</th>
                          <th className="text-sm font-medium text-left p-3">Risk Factors</th>
                          <th className="text-sm font-medium text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {[
                          {
                            name: "Alex Johnson",
                            course: "Computer Science 101",
                            grade: "C-",
                            attendance: "75%",
                            factors: ["Missing assignments", "Low test scores"],
                          },
                          {
                            name: "Sarah Williams",
                            course: "Data Structures",
                            grade: "D+",
                            attendance: "68%",
                            factors: ["Poor attendance", "Struggling with key concepts"],
                          },
                          {
                            name: "Michael Brown",
                            course: "Advanced Programming",
                            grade: "C",
                            attendance: "82%",
                            factors: ["Declining performance", "Late submissions"],
                          },
                        ].map((student, index) => (
                          <tr key={index}>
                            <td className="p-3">{student.name}</td>
                            <td className="p-3">{student.course}</td>
                            <td className="p-3 font-medium text-red-600 dark:text-red-400">{student.grade}</td>
                            <td className="p-3">{student.attendance}</td>
                            <td className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {student.factors.map((factor, fIndex) => (
                                  <span
                                    key={fIndex}
                                    className="text-xs px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-full"
                                  >
                                    {factor}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="p-3">
                              <Button variant="outline" size="sm">
                                Contact
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="engagement">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Student engagement metrics across your courses, including participation and resource usage.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Discussion Participation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center">
                          <div className="text-muted-foreground">Participation Chart</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Resource Access</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center">
                          <div className="text-muted-foreground">Resource Access Chart</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Assignment Completion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] flex items-center justify-center">
                          <div className="text-muted-foreground">Assignment Chart</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Notices and Events Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Notices & Events</CardTitle>
              <CardDescription>Department announcements and upcoming events</CardDescription>
            </div>
            <Button>Post Notice</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Faculty Meeting",
                  date: "March 15, 2025",
                  description: "Monthly faculty meeting to discuss department updates and curriculum changes.",
                  type: "event",
                },
                {
                  title: "Grade Submission Deadline",
                  date: "April 10, 2025",
                  description: "Final deadline for submitting mid-semester grades for all courses.",
                  type: "notice",
                },
                {
                  title: "Teaching Workshop",
                  date: "March 25, 2025",
                  description: "Workshop on incorporating AI tools in teaching computer science concepts.",
                  type: "event",
                },
              ].map((item, index) => (
                <div key={index} className="flex border rounded-lg p-4">
                  <div
                    className={`mr-4 p-2 rounded-full ${item.type === "event" ? "bg-primary/10 text-primary" : "bg-orange-100 text-orange-500 dark:bg-orange-900/30 dark:text-orange-300"}`}
                  >
                    {item.type === "event" ? <Calendar className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted">{item.type}</span>
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

