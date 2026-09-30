import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BulkUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/api/faculty/bulk-upload/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setResult(data);

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">

        <div className="rounded-xl bg-white p-6 shadow-md">

          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Bulk Faculty Upload
          </h1>

          <p className="mb-6 text-sm text-gray-500">
            Upload an Excel file to add multiple faculty members.
          </p>

          {/* File Input */}
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          {/* Selected File */}
          {file && (
            <p className="mt-3 text-sm text-gray-600">
              Selected file:{" "}
              <span className="font-medium">
                {file.name}
              </span>
            </p>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Excel"}
          </button>

          {/* Back Button */}
          <button
            onClick={() => navigate("/admin/faculty")}
            className="mt-3 w-full rounded-lg bg-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-300"
          >
            Back to Faculty List
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">

              <h2 className="mb-3 text-lg font-bold text-green-700">
                Upload Completed
              </h2>

              <p className="text-sm text-gray-700">
                Added:{" "}
                <span className="font-bold">
                  {result.added}
                </span>
              </p>

              <p className="text-sm text-gray-700">
                Skipped:{" "}
                <span className="font-bold">
                  {result.skipped}
                </span>
              </p>

              {/* Errors */}
              {result.errors?.length > 0 && (
                <div className="mt-4">

                  <h3 className="font-semibold text-red-600">
                    Errors
                  </h3>

                  <ul className="mt-2 list-disc pl-5 text-sm text-red-600">
                    {result.errors.map((error, index) => (
                      <li key={index}>
                        Row {error.row}: {error.error}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

              {/* Go to list */}
              <button
                onClick={() => navigate("/admin/faculty")}
                className="mt-5 rounded-lg bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-700"
              >
                View Faculty List
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default BulkUpload;