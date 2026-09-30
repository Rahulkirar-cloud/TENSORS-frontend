import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // GET FACULTY
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faculty/")
      .then((response) => response.json())
      .then((data) => {
        setFaculties(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  // DELETE
  const handleDelete = (facultyId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this faculty?"
    );

    if (!confirmDelete) return;

    fetch(`http://127.0.0.1:8000/api/faculty/${facultyId}/`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);

        setFaculties((currentFaculties) =>
          currentFaculties.filter(
            (faculty) => faculty.faculty_id !== facultyId
          )
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // SEARCH
  const filteredFaculties = faculties.filter((faculty) => {
    const searchValue = search.toLowerCase().trim();

    return (
      faculty.name.toLowerCase().includes(searchValue) ||
      faculty.faculty_id.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4 sm:px-6 sm:py-6 lg:px-8">

      <div className="mx-auto w-full max-w-7xl">

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-4 sm:mb-6 lg:flex-row lg:items-center lg:justify-between">

          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Faculty List
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage faculty information
            </p>
          </div>


          {/* BUTTONS */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

            {/* ADD FACULTY */}
            <button
              onClick={() => navigate("/admin/faculty/add")}

              className="w-full rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-700 sm:w-auto"
            >
              + Add Faculty
            </button>


            {/* BULK UPLOAD */}
            <button
              onClick={() => navigate("/admin/faculty/bulk-upload")}
              className="w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 sm:w-auto"
            >
              📁 Bulk Upload
            </button>

          </div>

        </div>


        {/* SEARCH */}
        <div className="mb-5 rounded-xl bg-white p-4 shadow-md sm:mb-6 sm:p-5">

          <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
            Search Faculty
          </label>

          <input
            type="text"
            placeholder="Search by name or Faculty ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-300 sm:px-4 sm:text-base"
          />

        </div>


        {/* TABLE */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">

          {/* MOBILE HORIZONTAL SCROLL */}
          <div className="w-full overflow-x-auto">

            <table className="w-full min-w-[750px] text-left">

              {/* TABLE HEADER */}
              <thead className="bg-violet-600 text-white">

                <tr>

                  <th className="px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">
                    Name
                  </th>

                  <th className="px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">
                    Faculty ID
                  </th>

                  <th className="px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">
                    Qualification
                  </th>

                  <th className="px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">
                    Role
                  </th>

                  <th className="px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base">
                    Action
                  </th>

                </tr>

              </thead>


              {/* TABLE BODY */}
              <tbody>

                {filteredFaculties.length > 0 ? (

                  filteredFaculties.map((faculty) => (

                    <tr
                      key={faculty.id}
                      className="border-b transition hover:bg-gray-50"
                    >

                      {/* NAME */}
                      <td className="px-4 py-3 text-sm font-medium text-gray-800 sm:px-6 sm:py-4 sm:text-base">
                        {faculty.name}
                      </td>


                      {/* FACULTY ID */}
                      <td className="px-4 py-3 text-sm text-gray-700 sm:px-6 sm:py-4 sm:text-base">
                        {faculty.faculty_id}
                      </td>


                      {/* QUALIFICATION */}
                      <td className="px-4 py-3 text-sm text-gray-700 sm:px-6 sm:py-4 sm:text-base">
                        {faculty.qualification}
                      </td>


                      {/* ROLE */}
                      <td className="px-4 py-3 text-sm text-gray-700 sm:px-6 sm:py-4 sm:text-base">
                        {faculty.role}
                      </td>


                      {/* ACTION */}
                      <td className="px-4 py-3 sm:px-6 sm:py-4">

                        <div className="flex flex-col gap-2 sm:flex-row">

                          {/* EDIT */}
                          <button
                            onClick={() =>
                              navigate(
                                `/faculty/edit/${faculty.faculty_id}`
                              )
                            }
                            className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-700 sm:px-4 sm:text-sm"
                          >
                            Edit
                          </button>


                          {/* DELETE */}
                          <button
                            onClick={() =>
                              handleDelete(faculty.faculty_id)
                            }
                            className="rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-red-700 sm:px-4 sm:text-sm"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="px-4 py-8 text-center text-sm text-gray-500 sm:text-base"
                    >
                      No faculty found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FacultyList;