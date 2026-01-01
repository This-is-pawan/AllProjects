import React from "react";
import { useNavigate } from "react-router-dom";

const GlobalError = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
      
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-illustration-download-in-svg-png-gif-file-formats--server-down-internet-issue-pack-web-illustrations-4926354.png"
        alt="Error"
        className="w-80 mb-6"
      />

      <h1 className="text-3xl font-bold text-red-600 mb-2">Something Went Wrong 😥</h1>
      <p className="text-gray-700 text-lg w-3/4 md:w-1/2">
        An unexpected error occurred. Please try refreshing the page or return back to home.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default GlobalError;
