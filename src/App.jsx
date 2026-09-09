import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/Toast.jsx'

import PublicLayout from './layouts/PublicLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'

import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import StudyPlanner from './pages/StudyPlanner.jsx'
import DoubtSolver from './pages/DoubtSolver.jsx'
import Courses from './pages/Courses.jsx'
import Notes from './pages/Notes.jsx'
import Quiz from './pages/Quiz.jsx'
import ProgressPage from './pages/Progress.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import StudentDashboard from "./components/StudentDashboard.jsx"

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StudentDashboard studentName="Rahul" />} />
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="planner" element={<StudyPlanner />} />
          <Route path="doubt-solver" element={<DoubtSolver />} />
          <Route path="courses" element={<Courses />} />
          <Route path="notes" element={<Notes />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </ToastProvider>
    
  )
}
