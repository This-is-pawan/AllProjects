import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "./DashboardLayout";

/* ---------------- FAKE ADD JOB API ---------------- */
const fakeAddJobApi = (job) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

      const newJob = {
        id: Date.now(),
        ...job,
        createdAt: new Date().toISOString(),
      };

      jobs.push(newJob);
      localStorage.setItem("jobs", JSON.stringify(jobs));

      resolve({
        success: true,
        message: "Job added successfully ✅",
        job: newJob,
      });
    }, 1000); // fake delay
  });
};
/* -------------------------------------------------- */

const AddJob = () => {
  const navigate = useNavigate();
  const { Getdatajob } = useDashboardContext();

  const [jobPosition, setJobPosition] = useState("developer");
  const [company, setCompany] = useState("google");
  const [jobLocation, setJobLocation] = useState("new-york");
  const [jobStatus, setJobStatus] = useState("pending");
  const [jobType, setJobType] = useState("part-time");

  const AddJobHandle = async (e) => {
    e.preventDefault();

    const job = {
      jobPosition,
      company,
      jobLocation,
      jobStatus,
      jobType,
    };

    try {
      const data = await fakeAddJobApi(job);

      if (data.success) {
        toast.success(data.message);
        Getdatajob(); // refresh job list
        navigate("all-jobs");
      } else {
        toast.error("Failed to add job");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-start justify-center p-4">
      <div className="w-full max-w-5xl shadow-xl rounded-2xl p-8 bg-white xl:relative top-[7rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Add Job
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Job Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Job Status
            </label>
            <select
              className="w-full px-4 py-2 rounded-full border"
              value={jobStatus}
              onChange={(e) => setJobStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              className="w-full px-4 py-2 rounded-full border"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700"
            onClick={AddJobHandle}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
