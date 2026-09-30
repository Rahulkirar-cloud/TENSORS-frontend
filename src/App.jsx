import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/Toast.jsx";

import Landing from "./pages/Landing.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Management from "./pages/Management.jsx";

import BasicInfo from "./components/BasicInfo.jsx";
import Subjects from "./components/Subjects.jsx";
import FacultyList from "./components/FacultyList.jsx";
import AddFaculty from "./components/AddFaculty.jsx";
import EditFaculty from "./components/EditFaculty.jsx";
import BulkUpload from "./components/BulkUpload.jsx";
import Classroom from "./components/Classroom.jsx";
import TimeSlot from "./components/TimeSlot.jsx";
import Student from "./components/Student.jsx";
import Review from "./components/Review.jsx";

function App() {
  return (
    <ToastProvider>
      <Routes>

        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Admin */}
        <Route element={<AdminLayout />}>

          <Route path="/admin" element={<Management />}>

            {/* Faculty */}
            <Route path="faculty" element={<FacultyList />} />
            <Route path="faculty/add" element={<AddFaculty />} />
            <Route
              path="faculty/edit/:facultyId"
              element={<EditFaculty />}
            />
            <Route
              path="faculty/bulk-upload"
              element={<BulkUpload />}
            />

            {/* Other Management Pages */}
            <Route path="basicinfo" element={<BasicInfo />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="timeslot" element={<TimeSlot />} />
            <Route path="student" element={<Student />} />
            <Route path="review" element={<Review />} />

          </Route>

        </Route>

      </Routes>
    </ToastProvider>
  );
}

export default App;