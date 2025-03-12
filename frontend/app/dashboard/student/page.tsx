import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Bell, Calendar, Clock } from "lucide-react"

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Card className="w-full md:w-2/3">
            <CardHeader className="pb-2">
              <CardTitle>Welcome back, John Doe</CardTitle>
              <CardDescription>Tuesday, March 11, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Today's Schedule</h3>
                  <div className="space-y-3">
                    {[
                      { time: "09:00 AM - 10:30 AM", course: "Computer Science 101", room: "Room 302" },
                      { time: "11:00 AM - 12:30 PM", course: "Mathematics for Engineers", room: "Room 201" },
                      { time: "02:00 PM - 03:30 PM", course: "Introduction to AI", room: "Lab 105" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 rounded-md border">
                        <Clock className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">{item.course}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.time} • {item.room}
                          </p>
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
                <CardTitle className="text-base">Attendance Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">92%</div>
                <Progress value={92} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">You've attended 23 out of 25 classes this semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { course: "CS101", task: "Project Submission", days: 2 },
                  { course: "MATH202", task: "Quiz", days: 5 },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.task}</p>
                      <p className="text-sm text-muted-foreground">{item.course}</p>
                    </div>
                    <div className="text-sm font-medium">{item.days} days left</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grade Prediction Section */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Predictions & Recommendations</CardTitle>
            <CardDescription>AI-powered predictions based on your current performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  course: "Computer Science 101",
                  currentGrade: "B+",
                  predictedGrade: "A-",
                  recommendation: "Complete the extra credit assignment to boost your grade.",
                },
                {
                  course: "Mathematics for Engineers",
                  currentGrade: "B",
                  predictedGrade: "B+",
                  recommendation: "Focus on reviewing calculus concepts from chapters 5-7.",
                },
                {
                  course: "Introduction to AI",
                  currentGrade: "A-",
                  predictedGrade: "A",
                  recommendation: "Continue your current study habits and participation.",
                },
              ].map((item, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.course}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Current</p>
                        <p className="text-xl font-bold">{item.currentGrade}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Predicted</p>
                        <p className="text-xl font-bold text-primary">{item.predictedGrade}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Recommendation:</p>
                      <p className="text-sm text-muted-foreground">{item.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notices and Events Section */}
        <Card>
          <CardHeader>
            <CardTitle>Notices & Events</CardTitle>
            <CardDescription>Stay updated with the latest announcements and upcoming events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Mid-Semester Exam Schedule",
                  date: "March 20, 2025",
                  description:
                    "The mid-semester examination schedule has been published. Please check your exam timings and venues.",
                  type: "notice",
                },
                {
                  title: "Annual Tech Fest",
                  date: "April 5-7, 2025",
                  description:
                    "Join us for the annual technology festival featuring workshops, competitions, and guest lectures from industry experts.",
                  type: "event",
                },
                {
                  title: "Library Hours Extended",
                  date: "Effective March 15, 2025",
                  description:
                    "The central library will remain open until midnight during the exam preparation period.",
                  type: "notice",
                },
              ].map((item, index) => (
                <div key={index} className="flex border rounded-lg p-4">
                  <div
                    className={`mr-4 p-2 rounded-full ${item.type === "event" ? "bg-primary/10 text-primary" : "bg-orange-100 text-orange-500 dark:bg-orange-900/30 dark:text-orange-300"}`}
                  >
                    {item.type === "event" ? <Calendar className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
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

