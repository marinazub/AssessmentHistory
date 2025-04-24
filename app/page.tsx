"use client"

import Link from "next/link"
import { ChevronDown, ChevronLeft, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { LineChart } from "@/components/line-chart"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-semibold mt-2">New Session</h1>
            <p className="text-gray-500">
              Add notes, add and modify treatment plan, schedule follow ups, complete relevant assessments
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Jane Doe, 38</h2>
                <div className="text-sm text-gray-500 mt-1">
                  Last visit: March 28, 2025 • Previous PHQ-9: self-assessed 12 • Risk Level: moderate
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-4">
                <p>
                  Follow up assessment. Patient shows signs of severe depression (PHQ-9: 12). Self-reported feelings of
                  hopelessness and fatigue. Medication Adherence requires review - reported side effects and low
                  adherence for Metformin. Treatment adherence requires review, reported low adherence for Behavioural
                  Activation and Progressive Muscle Relaxation. See recommended Suggestions in the treatment plan.
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="assessment-history">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="appointment-details">Appointment Details</TabsTrigger>
              <TabsTrigger value="suicide-safety">Suicide Safety Planning</TabsTrigger>
              <TabsTrigger value="medication-adherence">Medication Adherence</TabsTrigger>
              <TabsTrigger value="treatment-adherence">Treatment Adherence</TabsTrigger>
              <TabsTrigger value="assessment-history">Assessment History</TabsTrigger>
            </TabsList>
            <TabsContent value="assessment-history">
              <div className="flex items-start mb-6">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                <div>
                  <h2 className="text-lg font-semibold">Assessment History</h2>
                  <p className="text-gray-500 text-sm">
                    View patient's past assessments, track progress, and analyze trends
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card className="bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium">PHQ-9 Depression</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium">GAD-7 Anxiety</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium">C-SSRS Suicide Risk</h3>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">PHQ-9 Depression Assessment History</h2>
                <div className="flex items-center">
                  <span className="text-sm mr-2">All Assessments</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="h-64">
                    <LineChart />
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                      <span className="text-xs">Severe (20-27)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
                      <span className="text-xs">Mod. Severe (15-19)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="text-xs">Moderate (10-14)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                      <span className="text-xs">Mild (5-9)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-xs">Minimal (0-4)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-4">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">March 28, 2025</h3>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Self-reported</Badge>
                      <span className="text-sm">Score: 6 - Mild</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Observations</h4>
                    <p className="text-sm text-gray-700">
                      Anxious about loneliness coupled with low self-esteem • Sleep issues and related overeating
                      concerns • Reports being tired and experiencing low mood • Open to external referrals and group
                      therapy
                    </p>
                  </div>
                  <div className="mt-4">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-gray-100">
                        <span>View question details</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-2 space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Little interest or pleasure:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Feeling down or depressed:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Trouble sleeping:</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Poor appetite or overeating:</span>
                              <span className="font-medium">1</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Trouble concentrating:</span>
                              <span className="font-medium">1</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Moving slowly or being restless:</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Feeling bad about yourself:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Thoughts of self-harm:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">March 18, 2025</h3>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Clinician-administered</Badge>
                      <span className="text-sm">Score: 6 - Mild</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Observations</h4>
                    <p className="text-sm text-gray-700">
                      Patient reports some difficulty with sleep and concentration. Denies suicidal ideation.
                    </p>
                  </div>
                  <div className="mt-4">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-gray-100">
                        <span>View question details</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-2 space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Little interest or pleasure:</span>
                              <span className="font-medium">1</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Feeling down or depressed:</span>
                              <span className="font-medium">1</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Trouble sleeping:</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Poor appetite or overeating:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Trouble concentrating:</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Moving slowly or being restless:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Feeling bad about yourself:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between">
                              <span>Thoughts of self-harm:</span>
                              <span className="font-medium">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
