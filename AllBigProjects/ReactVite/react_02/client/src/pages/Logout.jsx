import React, { useState } from "react";
import { FaUserCircle, FaSortDown } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Globalcontext } from "../components/ContextApi";

/* ---------------- FAKE LOGOUT API ---------------- */
const fakeLogoutApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Logout successful 👋",
      });
    }, 500);
  });
/* ------------------------------------------------ */

const Logout = () => {
  const navigate = useNavigate();

 
  const [showLogout, setShowLogout] = useState(false);

  const { userData, profile, setUserData } = Globalcontext();



  const LogoutHandler = async () => {
    try {
      const data = await fakeLogoutApi();

      if (data.success) {
        // clear fake auth
        localStorage.removeItem("user");

        // clear context user
        setUserData("");

        toast.success(data.message);
        navigate("/");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-[9rem] px-2 relative">
      <button
        type="button"
        className="w-full p-3 flex justify-between items-center bg-slate-400 text-white rounded-xl"
        onClick={() => setShowLogout(!showLogout)}
      >
        {profile ? (
          <img
            src={profile}
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <FaUserCircle className="w-6 h-6" />
        )}

        {/* ✅ USER NAME FIX */}
        <span className="text-sm font-medium truncate">
          {userData?.name || "Guest"}
        </span>

        <FaSortDown className="text-sm" />
      </button>

      {showLogout && (
        <ul className="absolute right-0 mt-2 w-24 bg-pink-400 text-white rounded shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-pink-600 cursor-pointer text-center rounded"
            onClick={LogoutHandler}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Logout;
