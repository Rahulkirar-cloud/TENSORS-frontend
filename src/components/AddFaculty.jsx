import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddFaculty() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    faculty_id: "",
    qualification: "",
    role: "",

  });


  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };


  // FORM SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();


    fetch(
      "http://127.0.0.1:8000/api/faculty/",
      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json",

        },

        body: JSON.stringify(formData),

      }
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        console.log(data);


        if (data.error) {

          alert(data.error);

          return;

        }


        alert(
          "Faculty added successfully!"
        );


        navigate("/admin/faculty/add")

      })

      .catch((error) => {

        console.log("Error:", error);

      });

  };


  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-2xl">


        <div className="mb-6">

          <h1 className="text-3xl font-bold text-gray-800">

            Add Faculty

          </h1>

        </div>



        <form

          onSubmit={handleSubmit}

          className="space-y-4 rounded-xl bg-white p-6 shadow-md"

        >


          {/* NAME */}

          <div>

            <label className="mb-2 block font-medium">

              Name

            </label>

            <input

              type="text"

              name="name"

              value={formData.name}

              onChange={handleChange}

              placeholder="Enter faculty name"

              required

              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-300"

            />

          </div>



          {/* FACULTY ID */}

          <div>

            <label className="mb-2 block font-medium">

              Faculty ID

            </label>

            <input

              type="text"

              name="faculty_id"

              value={formData.faculty_id}

              onChange={handleChange}

              placeholder="Example: FAC002"

              required

              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-300"

            />

          </div>



          {/* QUALIFICATION */}

          <div>

            <label className="mb-2 block font-medium">

              Qualification

            </label>

            <input

              type="text"

              name="qualification"

              value={formData.qualification}

              onChange={handleChange}

              placeholder="Example: M.Tech"

              required

              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-300"

            />

          </div>



          {/* ROLE */}

          <div>

            <label className="mb-2 block font-medium">

              Role

            </label>

            <input

              type="text"

              name="role"

              value={formData.role}

              onChange={handleChange}

              placeholder="Example: Professor"

              required

              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-300"

            />

          </div>



          {/* BUTTONS */}

          <div className="flex gap-3 pt-4">

            <button

              type="submit"

              className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"

            >

              Add Faculty

            </button>


            <button

              type="button"

              onClick={() =>
                navigate("/faculty")
              }

              className="rounded-lg bg-gray-500 px-5 py-3 font-medium text-white hover:bg-gray-600"

            >

              Cancel

            </button>

          </div>


        </form>

      </div>

    </div>

  );

}


export default AddFaculty;