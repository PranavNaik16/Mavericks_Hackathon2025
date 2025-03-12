import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart } from "lucide-react"

export default function GradesPage() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Grades & Performance</h1>

        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="history">Grade History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6 pt-4">
            {/* Grade Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle>Semester Overview</CardTitle>
                <CardDescription>Spring 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 space-y-2">
                    <div className="text-sm text-muted-foreground">Current GPA</div>
                    <div className="text-4xl font-bold">3.75</div>
                    <div className="text-sm text-green-600 dark:text-green-400">↑ 0.15 from last semester</div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="text-sm font-medium mb-4">Grade Distribution</div>
                    <div className="space-y-3">
                      {[
                        { grade: "A", count: 2, percentage: 40 },
                        { grade: "B", count: 2, percentage: 40 },
                        { grade: "C", count: 1, percentage: 20 },
                        { grade: "D", count: 0, percentage: 0 },
                        { grade: "F", count: 0, percentage: 0 },
                      ].map((item) => (
                        <div key={item.grade} className="flex items-center gap-2">
                          <div className="w-8 text-sm font-medium">{item.grade}</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <div className="w-8 text-sm text-muted-foreground text-right">{item.count}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Grades */}
            <Card>
              <CardHeader>
                <CardTitle>Course Grades</CardTitle>
                <CardDescription>Current grades and predictions for this semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      course: "Computer Science 101",
                      code: "CS101",
                      credits: 4,
                      currentGrade: "A-",
                      predictedGrade: "A",
                      assignments: [
                        { name: "Assignment 1", score: 92, weight: 15 },
                        { name: "Midterm Exam", score: 88, weight: 30 },
                        { name: "Project", score: 95, weight: 25 },
                        { name: "Final Exam", status: "upcoming", weight: 30 },
                      ],
                    },
                    {
                      course: "Mathematics for Engineers",
                      code: "MATH202",
                      credits: 3,
                      currentGrade: "B+",
                      predictedGrade: "B+",
                      assignments: [
                        { name: "Quiz 1", score: 85, weight: 10 },
                        { name: "Quiz 2", score: 82, weight: 10 },
                        { name: "Midterm Exam", score: 87, weight: 30 },
                        { name: "Assignments", score: 90, weight: 20 },
                        { name: "Final Exam", status: "upcoming", weight: 30 },
                      ],
                    },
                    {
                      course: "Introduction to AI",
                      code: "CS240",
                      credits: 3,
                      currentGrade: "A",
                      predictedGrade: "A",
                      assignments: [
                        { name: "Project 1", score: 95, weight: 20 },
                        { name: "Midterm", score: 92, weight: 25 },
                        { name: "Project 2", score: 94, weight: 25 },
                        { name: "Final Exam", status: "upcoming", weight: 30 },
                      ],
                    },
                  ].map((course, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-medium">{course.course}</h3>
                          <p className="text-sm text-muted-foreground">
                            {course.code} • {course.credits} credits
                          </p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Current</div>
                            <div className="text-xl font-bold">{course.currentGrade}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Predicted</div>
                            <div className="text-xl font-bold text-primary">{course.predictedGrade}</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4">
                        <h4 className="text-sm font-medium mb-3">Assignments & Exams</h4>
                        <div className="space-y-3">
                          {course.assignments.map((assignment, aIndex) => (
                            <div key={aIndex} className="flex items-center justify-between text-sm">
                              <span>{assignment.name}</span>
                              <div className="flex items-center gap-4">
                                <span className="text-muted-foreground">{assignment.weight}%</span>
                                {assignment.status === "upcoming" ? (
                                  <span className="text-muted-foreground">Upcoming</span>
                                ) : (
                                  <span className="font-medium">{assignment.score}%</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Grade Prediction */}
            <Card>
              <CardHeader>
                <CardTitle>Grade Predictions & Recommendations</CardTitle>
                <CardDescription>AI-powered insights to help improve your performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      course: "Computer Science 101",
                      currentGrade: "A-",
                      predictedGrade: "A",
                      recommendation:
                        "You're performing well in programming assignments. To secure an A, focus on the theoretical concepts that will likely appear in the final exam. Review chapters 7-9 thoroughly.",
                      improvementAreas: ["Theoretical concepts", "Algorithm complexity analysis"],
                    },
                    {
                      course: "Mathematics for Engineers",
                      currentGrade: "B+",
                      predictedGrade: "B+",
                      recommendation:
                        "Your quiz scores show consistent performance. To improve to an A-, focus on calculus applications and practice more complex integration problems. Consider joining the math study group.",
                      improvementAreas: ["Complex integration", "Vector calculus"],
                    },
                    {
                      course: "Introduction to AI",
                      currentGrade: "A",
                      predictedGrade: "A",
                      recommendation:
                        "Excellent work! Continue your current study habits. For extra enrichment, explore the optional neural network project which could benefit your future AI courses.",
                      improvementAreas: [],
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="md:w-1/2">
                          <h3 className="font-medium">{item.course}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <div>
                              <div className="text-xs text-muted-foreground">Current</div>
                              <div className="text-lg font-bold">{item.currentGrade}</div>
                            </div>
                            <div className="text-muted-foreground">→</div>
                            <div>
                              <div className="text-xs text-muted-foreground">Predicted</div>
                              <div className="text-lg font-bold text-primary">{item.predictedGrade}</div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <h4 className="text-sm font-medium mb-1">Recommendation:</h4>
                          <p className="text-sm text-muted-foreground">{item.recommendation}</p>

                          {item.improvementAreas.length > 0 && (
                            <div className="mt-2">
                              <h4 className="text-sm font-medium mb-1">Focus areas:</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.improvementAreas.map((area, areaIndex) => (
                                  <span
                                    key={areaIndex}
                                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                                  >
                                    {area}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Your GPA trend across semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground opacity-50" />
                  <span className="ml-2 text-muted-foreground">GPA Trend Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Previous Semesters</CardTitle>
                <CardDescription>Your academic history by semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      semester: "Fall 2024",
                      gpa: 3.6,
                      courses: [
                        { name: "Introduction to Programming", code: "CS100", credits: 3, grade: "A" },
                        { name: "Calculus I", code: "MATH101", credits: 4, grade: "B+" },
                        { name: "Physics I", code: "PHYS101", credits: 4, grade: "B+" },
                        { name: "English Composition", code: "ENG101", credits: 3, grade: "A-" },
                      ],
                    },
                    {
                      semester: "Spring 2024",
                      gpa: 3.5,
                      courses: [
                        { name: "Data Structures", code: "CS150", credits: 3, grade: "B+" },
                        { name: "Calculus II", code: "MATH102", credits: 4, grade: "B" },
                        { name: "Physics II", code: "PHYS102", credits: 4, grade: "B" },
                        { name: "Technical Writing", code: "ENG201", credits: 3, grade: "A" },
                      ],
                    },
                  ].map((semester, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{semester.semester}</h3>
                          <p className="text-sm text-muted-foreground">
                            {semester.courses.length} courses •{" "}
                            {semester.courses.reduce((acc, course) => acc + course.credits, 0)} credits
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">GPA</div>
                          <div className="text-xl font-bold">{semester.gpa.toFixed(2)}</div>
                        </div>
                      </div>

                      <div className="border-t">
                        <table className="w-full">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="text-sm font-medium text-left p-3">Course</th>
                              <th className="text-sm font-medium text-left p-3">Code</th>
                              <th className="text-sm font-medium text-center p-3">Credits</th>
                              <th className="text-sm font-medium text-center p-3">Grade</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {semester.courses.map((course, courseIndex) => (
                              <tr key={courseIndex}>
                                <td className="p-3 text-sm">{course.name}</td>
                                <td className="p-3 text-sm">{course.code}</td>
                                <td className="p-3 text-sm text-center">{course.credits}</td>
                                <td className="p-3 text-sm font-medium text-center">{course.grade}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

