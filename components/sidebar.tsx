import Link from "next/link"
import { Calendar, Clock, FileText, Settings, Users } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-white h-full flex flex-col">
      <div className="p-6 border-b">
        <h1 className="font-bold text-lg">Depression Care Tool</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <Clock className="h-5 w-5 mr-3 text-gray-500" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/reminders" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <Clock className="h-5 w-5 mr-3 text-gray-500" />
              Reminders
            </Link>
          </li>
          <li>
            <Link href="/resources" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <FileText className="h-5 w-5 mr-3 text-gray-500" />
              Resources
            </Link>
          </li>
          <li>
            <Link href="/patients" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <Users className="h-5 w-5 mr-3 text-gray-500" />
              Patients
            </Link>
          </li>
          <li>
            <Link href="/appointments" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-3 text-gray-500" />
              Appointments
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-100">
              <Settings className="h-5 w-5 mr-3 text-gray-500" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium mr-3">
          JS
        </div>
        <div>
          <div className="text-sm font-medium">Dr. John Smith</div>
          <div className="text-xs text-gray-500">My Account</div>
        </div>
      </div>
    </div>
  )
}
