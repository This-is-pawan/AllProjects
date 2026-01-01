import React from "react";
import { useDashboardContext } from "./DashboardLayout";
import { FaLocationArrow, FaBriefcase } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

/* ---------------- FAKE DELETE JOB API ---------------- */
const fakeDeleteJobApi = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

      const updatedJobs = jobs.filter((job) => job.id !== id);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));

      resolve({
        success: true,
        message: "Job deleted successfully 🗑️",
      });
    }, 700); // fake delay
  });
};
/* ---------------------------------------------------- */

const AllJobs = () => {
  const { getjob, Getdatajob } = useDashboardContext();

  const handleDelete = async (id) => {
    try {
      const data = await fakeDeleteJobApi(id);

      if (data.success) {
        toast.success(data.message);
        Getdatajob(); // refresh jobs
      }
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };

  return (
    <div className="p-4 h-screen overflow-y-auto">
      {getjob?.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No jobs found
        </p>
      )}

      {getjob?.map((item) => {
        const {
          id,
          company,
          jobLocation,
          jobPosition,
          jobStatus,
          jobType,
          createdAt,
        } = item;

        const formattedDate = new Date(createdAt).toLocaleDateString(
          "en-GB",
          { day: "numeric", month: "short", year: "numeric" }
        );

        return (
          <div
            key={id}
            className="w-full shadow-xl bg-pink-800 rounded-lg my-4 xl:relative top-[6rem]"
          >
            {/* Header */}
            <div className="w-full flex justify-around items-center border-b border-cyan-900 p-4">
              <article className="w-12 h-12 text-center p-2 bg-pink-400 text-2xl font-bold text-black rounded-lg uppercase">
                {company.charAt(0)}
              </article>

              <div className="text-xl tracking-wider capitalize">
                <p className="font-semibold">{jobPosition}</p>
                <span>{company}</span>
              </div>
            </div>

            {/* Info */}
            <div className="md:flex justify-around items-center xl:grid grid-cols-2">
              <p className="flex items-center m-4">
                <FaLocationArrow className="mx-2" />
                {jobLocation}
              </p>
              <p className="flex items-center m-4">
                <FaBriefcase className="mx-2" />
                {jobType}
              </p>
              <p className="flex items-center m-4">
                <IoCalendarNumberSharp className="mx-2" />
                {formattedDate}
              </p>
              <p className="w-24 m-4 bg-green-400 p-2 rounded text-black text-center">
                {jobStatus}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end p-4">
              <Link
                to={`/dashboard/edit-job/${id}`}
                className="bg-pink-200 mx-2 px-4 py-2 rounded-lg text-black hover:bg-pink-300"
              >
                Edit
              </Link>

              <button
                className="bg-pink-200 mx-2 px-4 py-2 rounded-lg text-black hover:bg-red-400"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllJobs;
