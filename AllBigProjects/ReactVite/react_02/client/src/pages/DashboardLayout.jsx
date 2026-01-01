import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { toast } from "react-toastify";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [getjob, setGetjob] = useState([]);

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("dark_theme") === "true";
  });

  /* ---------------- FAKE GET JOBS API ---------------- */
  const Getdatajob = () => {
    try {
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
      setGetjob(jobs);
    } catch (error) {
      toast.error("Failed to load jobs");
    }
  };
  /* -------------------------------------------------- */

  useEffect(() => {
    Getdatajob();
    document.body.classList.toggle("dark_theme", isDarkTheme);
  }, [isDarkTheme]);

  /* ---------------- UI HELPERS ---------------- */
  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("dark_theme", newTheme);
    document.body.classList.toggle("dark_theme", newTheme);
  };

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  /* -------------------------------------------- */

  return (
    <DashboardContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        showSidebar,
        toggleSideBar,
        user,
        getjob,
        setGetjob,
        Getdatajob,
      }}
    >
      <div className="w-full h-screen flex transition-all duration-500">
        {/* Sidebar */}
        <aside className="hidden xl:block">
          <BigSidebar />
        </aside>
        <aside className="xl:hidden">
          <SmallSidebar />
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
