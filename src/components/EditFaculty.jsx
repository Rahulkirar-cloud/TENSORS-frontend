import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";


function EditFaculty() {

  const { facultyId } = useParams();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    faculty_id: "",
    qualification: "",
    role: "",

  });


  // GET SINGLE FACULTY
  useEffect(() => {

    fetch(
      `http://127.0.0.1:8000/api/faculty/${facultyId}/`
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        setFormData(data);

      })

      .catch((error) => {

        console.log("Error:", error);

      });

  }, [facultyId]);


  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };


  // UPDATE FACULTY
  const handleSubmit = (e) => {

    e.preventDefault();


    fetch(
      `http://127.0.0.1:8000/api/faculty/${facultyId}/`,
      {

        method: "PUT",

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
          "Faculty updated successfully!"
        );


        navigate(`/admin/faculty/edit/${faculty.faculty_id}`)

      })

      .catch((error) => {

        console.log("Error:", error);

      });

  };


  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-2xl">


        <h1 className="mb-6 text-3xl font-bold text-gray-800">

          Edit Faculty

        </h1>


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

              readOnly

              className="w-full rounded-lg border bg-gray-100 px-4 py-3 text-gray-600"

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

              value={
                formData.qualification
              }

              onChange={handleChange}

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

              Update Faculty

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


export default EditFaculty;