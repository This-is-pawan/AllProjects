import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    login(data);  // update state + localStorage
    navigate("/");
    reset();
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Register / Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" placeholder="Enter your name" {...register("name",{required:true})}
          className="w-full border border-gray-300 p-3 rounded-lg" />
        {errors.name && <p className="text-red-600">Name is required</p>}

        <input type="email" placeholder="Enter your email" {...register("email",{required:true})}
          className="w-full border border-gray-300 p-3 rounded-lg" />

        <input type="password" placeholder="Enter password" {...register("password",{required:true})}
          className="w-full border border-gray-300 p-3 rounded-lg" />

        <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
