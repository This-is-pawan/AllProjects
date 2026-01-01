import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const ContactForm = () => {
 const navigate=useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    if (data) {
     navigate('/service')
     JSON.parse(localStorage.getItem("user"));

    }
    reset(); // clear form after submit
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.name && (
          <p className="text-red-600 text-sm -mt-2">Name is required</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          
          {...register("email", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.email && (
          <p className="text-red-600 text-sm -mt-2">Email is required</p>
        )}

        {/* Message */}
        <textarea
          placeholder="Write your message"
          rows="4"
          
          {...register("message", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
        {errors.message && (
          <p className="text-red-600 text-sm -mt-2">Message is required</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
