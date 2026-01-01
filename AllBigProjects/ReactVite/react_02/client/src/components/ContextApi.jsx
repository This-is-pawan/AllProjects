import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

/* ---------------- CONTEXT ---------------- */
const CreateContext = createContext();
export const Globalcontext = () => useContext(CreateContext);

/* ---------------- PROVIDER ---------------- */
const ContextApi = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [profile, setProfile] = useState("");
  const [getjob, setGetjob] = useState([]);

 

  /* ---------------- DARK THEME ---------------- */
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("Home_dark_theme") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("Home_dark_theme", isDarkTheme);
    localStorage.setItem("Home_dark_theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  /* ---------------- LOAD DATA ON START ---------------- */
  useEffect(() => {
    dataHandler();
    Profiledata();
  }, []);

  /* ---------------- USER DATA ---------------- */
  const dataHandler = () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        setUserData("");
        return;
      }

      const data = JSON.parse(storedUser);

      // ✅ FIX: Proper validation
      if (data && typeof data === "object" && data.name) {
        setUserData(data);
        setProfileData({ userData: data });
      } else {
        setUserData("");
      }
    } catch (error) {
      toast.error("Failed to load user data");
    }
  };

  /* ---------------- PROFILE DATA ---------------- */
  const Profiledata = async () => {
    try {
      const data = await fakeGetProfile();

      if (data?.success) {
        setProfile(data.user?.profile || "");
      }
    } catch (error) {
      toast.error("Profile load failed");
    }
  };

  return (
    <CreateContext.Provider
      value={{
        userData,
        setUserData,
        profileData,
        profile,
        getjob,
        setGetjob,
        dataHandler,
        Profiledata,
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default ContextApi;
