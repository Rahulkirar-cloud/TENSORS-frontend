import React, { useState } from "react";
import { Link } from "react-router-dom";

const Classroom = () => {

  // ================= SUBJECT LIST =================
  const [classroom, setClassroom] = useState([]);

  // ================= FORM STATES =================
  const [buildingID, setBuildingID] = useState("");
  const [roomnumber, setRoomnumber] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");

  // ================= EDIT STATE =================
  const [editId, setEditId] = useState(null);


  // ================= ADD SUBJECT =================
  const handleAddClassroom = () => {

    if (
      !buildingID ||
      !roomnumber ||
      !type ||
      !capacity
    ) {
      alert("Please fill all  details");
      return;
    }

    const newClassroom = {
      id: Date.now(),
      buildingID: buildingID,
      roomnumber: roomnumber,
      type: type,
      capacity: capacity
    };

    setClassroom([...classroom, newClassroom]);

    // Clear form
    setBuildingID("");
    setRoomnumber("");
    setType("");
    setCapacity("");
  };


  // ================= EDIT SUBJECT =================
  const handleEdit = (classroom) => {

    setBuildingID(classroom.buildingID);
    setRoomnumber(classroom.roomnumber);
    setType(classroom.type);
    setCapacity(classroom.capacity);

    setEditId(classroom.id);
  };


  // ================= UPDATE SUBJECT =================
  const handleUpdateClassroom = () => {

    if (
      !buildingID ||
      !roomnumber ||
      !type ||
      !capacity
    ) {
      alert("Please fill all subject details");
      return;
    }

    setClassroom(
      classroom.map((classroom) =>
        classroom.id === editId
          ? {
            ...classroom,
            buildingID: buildingID,
            roomnumber: roomnumber,
            type: type,
            capacity: capacity
          }
          : classroom
      )
    );

    // Clear form
    setEditId(null);
    setBuildingID("");
    setRoomnumber("");
    setType("");
    setCapacity("");
  };


  // ================= CANCEL EDIT =================
  const handleCancelEdit = () => {

    setEditId(null);

    setBuildingID("");
    setRoomnumber("");
    setType("");
    setCapacity("");
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
          Class-Rooms
        </h1>

        <p className="text-xl text-gray-500 mt-1">
          Enter the Class details of your timetable.
        </p>

      </div>


      {/* ================= Building INFORMATION ================= */}

      <form
        className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-5xl"
        onSubmit={(e) => e.preventDefault()}
      >

        {/* Building ID */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Building ID
          </label>

          <input
            type="text"
            placeholder="Enter building ID"
            value={buildingID}
            onChange={(e) => setBuildingID(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Building Name */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Building Name
          </label>

          <input
            type="text"
            placeholder="Enter building name"
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />

        </div>


        {/* Room Number */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Room number
          </label>

          <input
            type="text"
            placeholder="Enter the Room number"
            value={roomnumber}
            onChange={(e) => setRoomnumber(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          />

        </div>

        {/* Type */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"

          >
            <option value="">Select Type</option>
            <option value="Theory">Theory</option>
            <option value="Practical">Practical</option>

          </select>
        </div>


        {/* Capacity */}

        <div className="flex flex-col">

          <label className="text-lg font-semibold text-blue-900 mb-2">
            Capacity
          </label>

          <input
            type="number"
            placeholder="Enter the capacity of the classroom"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
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
              onClick={handleUpdateClassroom}
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
            onClick={handleAddClassroom}
            className="px-6 py-3 rounded-lg
                       bg-blue-900 text-white font-semibold
                       hover:bg-blue-700
                       transition duration-200"
          >
            + Add Classroom
          </button>

        )}

      </div>


      {/* ================= ADDED SUBJECTS ================= */}

      {classroom.length > 0 && (

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Added Classroom
          </h2>


          <div className="overflow-x-auto rounded-xl shadow-md">

            <table className="w-full bg-white">

              {/* TABLE HEADER */}

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-3 text-left">
                    Building ID
                  </th>

                  <th className="p-3 text-left">
                    Room number
                  </th>

                  <th className="p-3 text-left">
                    Type
                  </th>

                  <th className="p-3 text-left">
                    Capacity
                  </th>

                  <th className="p-3 text-left">
                    Action
                  </th>





                </tr>

              </thead>


              {/* TABLE BODY */}

              <tbody>

                {classroom.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-blue-50"
                  >
                    <td className="p-3">
                      {item.buildingID}
                    </td>

                    <td className="p-3">
                      {item.roomnumber}
                    </td>

                    <td className="p-3">
                      {item.type}
                    </td>

                    <td className="p-3">
                      {item.capacity}
                    </td>

                    <td className="p-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
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
          to="/management/faculty"
          className="px-8 py-3 rounded-lg
                     bg-blue-900 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
        >
          ← Previous
        </Link>


        {/* Next */}

        <Link
          to="/management/timeslot"
          className="px-8 py-3 rounded-lg
                     bg-blue-900 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
        >
          Next →
        </Link>

      </div>

    </div>
  );
};

export default Classroom;