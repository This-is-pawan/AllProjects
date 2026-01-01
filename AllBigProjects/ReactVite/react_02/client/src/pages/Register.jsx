import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Globalcontext } from "../components/ContextApi";

/* ------------------ FAKE API ------------------ */
const fakeRegisterApi = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate email already exists
      if (userData.email === "test@gmail.com") {
        resolve({
          success: false,
          message: "Email already registered",
        });
      } else {
        resolve({
          success: true,
          message: "Registration successful 🎉",
          user: userData,
        });
      }
    }, 1200); // fake network delay
  });
};
/* --------------------------------------------- */

function Register() {
  const navigate = useNavigate();
  const { dataHandler } = Globalcontext();

  const [name, setName] = useState("peter");
  const [lastName, setLastName] = useState("smith");
  const [password, setPassword] = useState("peter!2#3");
  const [email, setEmail] = useState("peter@gmail.com");
  const [location, setLocation] = useState("new city");

  const RegisterHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await fakeRegisterApi({
        name,
        lastName,
        email,
        password,
        location,
      });

      if (data.success) {
        // save fake auth user
       localStorage.setItem("user", JSON.stringify(data.user));
   

        toast.success(data.message);
        dataHandler(); // update context
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full p-2">
      <div className="w-[90%] max-w-96 p-4 rounded-xl bg-gray-700 grid justify-center shadow-xl m-auto relative top-10">
        <div className="w-full flex justify-center items-center">
          <article className="w-10 rounded bg-pink-300 text-center text-3xl font-bold text-blue-900">
            <Link to="/">J</Link>
          </article>
          <h1 className="font-bold text-3xl mx-3 tracking-wider text-white">
            Jobify
          </h1>
        </div>

        <h1 className="text-2xl text-center text-white">Register</h1>

        <form onSubmit={RegisterHandler}>
          <div className="m-2 p-2">
            <input
              type="text"
              className="p-3 rounded-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="m-2 p-2">
            <input
              type="text"
              className="p-3 rounded-full"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="m-2 p-2">
            <input
              type="password"
              className="p-3 rounded-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="m-2 p-2">
            <input
              type="email"
              className="p-3 rounded-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="m-2 p-2">
            <input
              type="text"
              className="p-3 rounded-full"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button className="btn w-[50%] m-2 text-white">
              Register
            </button>
          </div>
        </form>

        <div className="flex justify-center m-2 items-center">
          <span className="text-blue-400">
            Already have an account?
          </span>
          <Link to="/login" className="underline text-blue-400 px-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
