"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, Camera, Check, Clock, X } from "lucide-react"

export default function AttendancePage() {
  const [cameraActive, setCameraActive] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [attendanceMarked, setAttendanceMarked] = useState(false)

  const handleStartCamera = () => {
    setCameraActive(true)
    // In a real app, this would request camera permissions and start the webcam
  }

  const handleMarkAttendance = () => {
    setProcessing(true)
    // Simulate processing time for facial recognition
    setTimeout(() => {
      setProcessing(false)
      setAttendanceMarked(true)
      setCameraActive(false)
    }, 2000)
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Attendance Tracking</h1>

        <Tabs defaultValue="mark">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
            <TabsTrigger value="history">Attendance History</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="mark" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Classes</CardTitle>
                <CardDescription>Mark your attendance for today's scheduled classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      course: "Computer Science 101",
                      time: "09:00 AM - 10:30 AM",
                      status: "present",
                      instructor: "Dr. Smith",
                    },
                    {
                      course: "Mathematics for Engineers",
                      time: "11:00 AM - 12:30 PM",
                      status: "upcoming",
                      instructor: "Prof. Johnson",
                    },
                    {
                      course: "Introduction to AI",
                      time: "02:00 PM - 03:30 PM",
                      status: "upcoming",
                      instructor: "Dr. Williams",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            item.status === "present"
                              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {item.status === "present" ? <Check className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.course}</h3>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                          <p className="text-sm text-muted-foreground">Instructor: {item.instructor}</p>
                        </div>
                      </div>

                      {item.status === "upcoming" && (
                        <Button
                          variant="outline"
                          onClick={handleStartCamera}
                          disabled={cameraActive || attendanceMarked}
                        >
                          <Camera className="mr-2 h-4 w-4" />
                          Mark Attendance
                        </Button>
                      )}

                      {item.status === "present" && (
                        <div className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center">
                          <Check className="mr-1 h-4 w-4" />
                          Present
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {cameraActive && (
              <Card>
                <CardHeader>
                  <CardTitle>Webcam Attendance</CardTitle>
                  <CardDescription>Position your face in the frame for facial recognition</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative w-full max-w-md h-[300px] bg-muted rounded-lg mb-4 overflow-hidden">
                    {/* This would be a real webcam feed in a production app */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-16 w-16 text-muted-foreground opacity-50" />
                    </div>

                    {/* Face detection overlay */}
                    {!processing && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="border-2 border-dashed border-primary w-48 h-48 rounded-full"></div>
                      </div>
                    )}

                    {/* Processing overlay */}
                    {processing && (
                      <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center">
                        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-2"></div>
                        <p className="text-sm font-medium">Processing...</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCameraActive(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleMarkAttendance} disabled={processing}>
                      {processing ? "Processing..." : "Confirm Attendance"}
                    </Button>
                  </div>

                  {attendanceMarked && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md flex items-center">
                      <Check className="mr-2 h-5 w-5" />
                      Attendance successfully marked!
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance History</CardTitle>
                <CardDescription>Your attendance record for the current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "March 10, 2025",
                      courses: [
                        { name: "Computer Science 101", status: "present" },
                        { name: "Mathematics for Engineers", status: "present" },
                        { name: "Introduction to AI", status: "present" },
                      ],
                    },
                    {
                      date: "March 9, 2025",
                      courses: [
                        { name: "Computer Science 101", status: "present" },
                        { name: "Mathematics for Engineers", status: "absent" },
                        { name: "Introduction to AI", status: "present" },
                      ],
                    },
                    {
                      date: "March 8, 2025",
                      courses: [
                        { name: "Computer Science 101", status: "present" },
                        { name: "Mathematics for Engineers", status: "present" },
                        { name: "Introduction to AI", status: "present" },
                      ],
                    },
                  ].map((day, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-3 font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {day.date}
                      </div>
                      <div className="divide-y">
                        {day.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="p-3 flex justify-between items-center">
                            <span>{course.name}</span>
                            <span
                              className={`flex items-center ${
                                course.status === "present"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }`}
                            >
                              {course.status === "present" ? (
                                <>
                                  <Check className="mr-1 h-4 w-4" /> Present
                                </>
                              ) : (
                                <>
                                  <X className="mr-1 h-4 w-4" /> Absent
                                </>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Statistics</CardTitle>
                <CardDescription>Your attendance performance for each course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { course: "Computer Science 101", attendance: 95, classes: 20, present: 19 },
                    { course: "Mathematics for Engineers", attendance: 85, classes: 20, present: 17 },
                    { course: "Introduction to AI", attendance: 90, classes: 20, present: 18 },
                  ].map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{course.course}</h3>
                        <span className="text-sm font-medium">{course.attendance}%</span>
                      </div>
                      <Progress value={course.attendance} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        Present: {course.present}/{course.classes} classes
                      </p>
                    </div>
                  ))}

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-medium mb-4">Overall Attendance</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 relative">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                          <circle
                            className="text-muted stroke-current"
                            strokeWidth="10"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-primary stroke-current"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={2 * Math.PI * 40}
                            strokeDashoffset={2 * Math.PI * 40 * (1 - 0.92)}
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">92%</div>
                      </div>
                      <div>
                        <p className="font-medium">Excellent Attendance</p>
                        <p className="text-sm text-muted-foreground">
                          You've attended 54 out of 60 classes this semester
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

