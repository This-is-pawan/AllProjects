import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Globalcontext } from "../components/ContextApi";

/* ---------------- FAKE LOGIN API ---------------- */
const fakeLoginApi = ({ email, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // get registered user from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        resolve({
          success: false,
          message: "No account found. Please register first.",
        });
      } else if (
        storedUser.email === email &&
        storedUser.password === password
      ) {
        resolve({
          success: true,
          message: "Login successful 🚀",
          user: storedUser,
        });
      } else {
        resolve({
          success: false,
          message: "Invalid email or password",
        });
      }
    }, 1000); // fake network delay
  });
};
/* ------------------------------------------------ */

const Login = () => {
  const navigate = useNavigate();
  const { dataHandler } = Globalcontext();

  const [name, setName] = useState("peter");
  const [email, setEmail] = useState("peter@gmail.com");
  const [password, setPassword] = useState("peter!2#3");

  const LoginHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await fakeLoginApi({name, email, password });

      if (data.success) {
        // save logged-in user
        localStorage.setItem("user", JSON.stringify(data.user));
        
        

        toast.success(data.message);
        dataHandler();
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full">
      <div className="w-80 p-4 rounded-xl bg-gray-700 grid justify-center shadow-xl m-auto relative top-10">
        <div className="w-full flex justify-center p-4 items-center">
          <article className="w-10 rounded bg-pink-300 text-center text-3xl font-bold text-blue-900">
            <Link to="/">J</Link>
          </article>
          <h1 className="font-bold text-3xl mx-3 tracking-wider text-white">
            Jobify
          </h1>
        </div>

        <h1 className="text-2xl text-center text-white">Login</h1>

        <form onSubmit={LoginHandler}>
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
              type="email"
              className="p-3 rounded-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="flex justify-center">
            <button className="btn w-[50%] m-2 text-white">
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center m-2 items-center">
          <span className="text-blue-400">Create an account →</span>
          <Link to="/register" className="underline text-blue-400 px-3">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
