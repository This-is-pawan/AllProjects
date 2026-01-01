import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDashboardContext } from "./DashboardLayout";

/* ---------------- FAKE EDIT JOB API ---------------- */
const fakeEditJobApi = (id, updatedJob) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

      // Update the job safely using STRING comparison
      const updatedJobs = jobs.map((job) =>
        String(job.id) === String(id) ? { ...job, ...updatedJob } : job
      );

      localStorage.setItem("jobs", JSON.stringify(updatedJobs));

      resolve({
        success: true,
        message: "Job updated successfully ✏️",
      });
    }, 800);
  });
};
/* -------------------------------------------------- */

const EditJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { Getdatajob } = useDashboardContext();

  const [jobPosition, setJobPosition] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobStatus, setJobStatus] = useState("pending");
  const [jobType, setJobType] = useState("full-time");

  /* -------- Load job from localStorage -------- */
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const job = jobs.find((j) => String(j.id) === String(id));

    if (!job) {
      toast.error("Job not found");
      navigate("/dashboard/all-jobs");
      return;
    }

    setJobPosition(job.jobPosition || "");
    setCompany(job.company || "");
    setJobLocation(job.jobLocation || "");
    setJobStatus(job.jobStatus || "pending");
    setJobType(job.jobType || "full-time");
  }, [id, navigate]);

  /* -------- Handle Update -------- */
  const EditjobHandle = async (e) => {
    e.preventDefault();

    try {
      const data = await fakeEditJobApi(id, {
        jobPosition,
        company,
        jobLocation,
        jobStatus,
        jobType,
      });

      if (data.success) {
        toast.success(data.message);

        // Optional: refresh jobs in context
        Getdatajob();

        // Navigate back to all jobs
        navigate("/dashboard/all-jobs");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-start justify-center p-4">
      <div className="w-full max-w-5xl shadow-xl rounded-2xl p-8 bg-white xl:relative top-[7rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Edit Job
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Input label="Position" value={jobPosition} setValue={setJobPosition} />
          <Input label="Company" value={company} setValue={setCompany} />
          <Input label="Job Location" value={jobLocation} setValue={setJobLocation} />

          <Select
            label="Job Status"
            value={jobStatus}
            setValue={setJobStatus}
            options={["pending", "interview", "declined"]}
          />

          <Select
            label="Job Type"
            value={jobType}
            setValue={setJobType}
            options={["full-time", "part-time", "remote"]}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700"
            onClick={EditjobHandle}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------- Reusable Components -------- */
const Input = ({ label, value, setValue }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-full border"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

const Select = ({ label, value, setValue, options }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      className="w-full px-4 py-2 rounded-full border"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default EditJob;
