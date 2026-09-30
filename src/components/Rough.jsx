import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rough = () => {

  // ================= SUBJECT LIST =================
  const [subjects, setSubjects] = useState([]);

  // ================= FORM STATES =================
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [lecturesRequired, setLecturesRequired] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");

  // ================= EDIT STATE =================
  const [editId, setEditId] = useState(null);


  // ================= ADD SUBJECT =================
  const handleAddSubject = () => {

    if (
      !subjectCode ||
      !subjectName ||
      !lecturesRequired ||
      !weeklyHours
    ) {
      alert("Please fill all subject details");
      return;
    }

    const newSubject = {
      id: Date.now(),
      subjectCode: subjectCode,
      subjectName: subjectName,
      lecturesRequired: lecturesRequired,
      weeklyHours: weeklyHours
    };

    setSubjects([...subjects, newSubject]);

    // Clear form
    setSubjectCode("");
    setSubjectName("");
    setLecturesRequired("");
    setWeeklyHours("");
  };


  // ================= EDIT SUBJECT =================
  const handleEdit = (subject) => {

    setSubjectCode(subject.subjectCode);
    setSubjectName(subject.subjectName);
    setLecturesRequired(subject.lecturesRequired);
    setWeeklyHours(subject.weeklyHours);

    setEditId(subject.id);
  };


  // ================= UPDATE SUBJECT =================
  const handleUpdateSubject = () => {

    if (
      !subjectCode ||
      !subjectName ||
      !lecturesRequired ||
      !weeklyHours
    ) {
      alert("Please fill all subject details");
      return;
    }

    setSubjects(
      subjects.map((subject) =>
        subject.id === editId
          ? {
              ...subject,
              subjectCode: subjectCode,
              subjectName: subjectName,
              lecturesRequired: lecturesRequired,
              weeklyHours: weeklyHours
            }
          : subject
      )
    );

    // Clear form
    setEditId(null);
    setSubjectCode("");
    setSubjectName("");
    setLecturesRequired("");
    setWeeklyHours("");
  };


  // ================= CANCEL EDIT =================
  const handleCancelEdit = () => {

    setEditId(null);

    setSubjectCode("");
    setSubjectName("");
    setLecturesRequired("");
    setWeeklyHours("");
  };


  return (
    <div
      className="container mx-auto my-4 p-6 rounded-2xl shadow-2xl
                 bg-linear-to-br from-blue-50 via-white to-indigo-100
                 font-['Times_New_Roman']"
    >

      {/* ================= HEADER ================= */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-blue-900">
          Subjects, Courses and Department
        </h1>

        <p className="text-xl text-gray-500 mt-1">
          Enter the Subject details of your timetable.
        </p>

      </div>


      {/* ================= DEPARTMENT INFORMATION ================= */}

      <form
        className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-5xl"
        onSubmit={(e) => e.preventDefault()}
      >

        {/* Department ID */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Department ID
          </label>

          <input
            type="text"
            placeholder="Enter department ID"
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Department Name */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Department Name
          </label>

          <input
            type="text"
            placeholder="Enter department name"
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Course ID */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Course ID
          </label>

          <input
            type="text"
            placeholder="Enter the Course ID"
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          />

        </div>


        {/* Course Name */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Course Name
          </label>

          <input
            type="text"
            placeholder="Enter Course name"
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Subject Code */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Subject Code
          </label>

          <input
            type="text"
            placeholder="Enter subject code"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Subject Name */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Subject Name
          </label>

          <input
            type="text"
            placeholder="Enter subject name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Lectures Required */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Lectures Required
          </label>

          <input
            type="number"
            placeholder="Enter number of lectures required"
            value={lecturesRequired}
            onChange={(e) => setLecturesRequired(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          />

        </div>


        {/* Weekly Hours */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Weekly Hours
          </label>

          <input
            type="number"
            placeholder="Enter number of hours"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          />

        </div>

      </form>


      {/* ================= ADD / UPDATE BUTTON ================= */}

      <div className="mt-8 flex justify-end gap-3">

        {editId ? (

          <>
            <button
              type="button"
              onClick={handleUpdateSubject}
              className="px-6 py-3 rounded-lg
                         bg-green-600 text-white font-semibold
                         hover:bg-green-700
                         transition duration-200"
            >
              Update Subject
            </button>

            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-6 py-3 rounded-lg
                         bg-gray-500 text-white font-semibold
                         hover:bg-gray-600
                         transition duration-200"
            >
              Cancel
            </button>
          </>

        ) : (

          <button
            type="button"
            onClick={handleAddSubject}
            className="px-6 py-3 rounded-lg
                       bg-blue-600 text-white font-semibold
                       hover:bg-blue-700
                       transition duration-200"
          >
            + Add Subject
          </button>

        )}

      </div>


      {/* ================= ADDED SUBJECTS ================= */}

      {subjects.length > 0 && (

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Added Subjects
          </h2>


          <div className="overflow-x-auto rounded-xl shadow-md">

            <table className="w-full bg-white">

              {/* TABLE HEADER */}

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-3 text-left">
                    Subject Code
                  </th>

                  <th className="p-3 text-left">
                    Subject Name
                  </th>

                  <th className="p-3 text-left">
                    Lectures
                  </th>

                  <th className="p-3 text-left">
                    Weekly Hours
                  </th>

                  <th className="p-3 text-left">
                    Action
                  </th>

                </tr>

              </thead>


              {/* TABLE BODY */}

              <tbody>

                {subjects.map((subject) => (

                  <tr
                    key={subject.id}
                    className="border-b hover:bg-blue-50"
                  >

                    <td className="p-3">
                      {subject.subjectCode}
                    </td>

                    <td className="p-3">
                      {subject.subjectName}
                    </td>

                    <td className="p-3">
                      {subject.lecturesRequired}
                    </td>

                    <td className="p-3">
                      {subject.weeklyHours}
                    </td>

                    <td className="p-3">

                      <button
                        type="button"
                        onClick={() => handleEdit(subject)}
                        className="px-4 py-2
                                   bg-yellow-500 text-white
                                   rounded-lg
                                   hover:bg-yellow-600
                                   transition duration-200"
                      >
                        Edit
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}


      {/* ================= PREVIOUS / NEXT ================= */}

      <div
        className="mt-10 border-t border-gray-200 pt-6
                   flex justify-between"
      >

        {/* Previous */}

        <Link
          to="/management/basicinfo"
          className="px-8 py-3 rounded-lg
                     bg-blue-600 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
        >
          ← Previous
        </Link>


        {/* Next */}

        <Link
          to="/management/faculty"
          className="px-8 py-3 rounded-lg
                     bg-blue-600 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
        >
          Next →
        </Link>

      </div>

    </div>
  );
};

export default Rough;