import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  return (
    <div className="border bg-pink-200">
      <div className="flex justify-around m-3 font-bold capitalize tracking-wide items-center">
        {user && (
          <>
            <Link to="/" className="hover:text-pink-500">canvas</Link>
            <Link to="/service" className="hover:text-pink-500">service</Link>
            <Link to="/contact" className="hover:text-pink-500">contact</Link>
          </>
        )}

        {user ? <button className="bg-black p-2 pl-3 pr-3 text-white rounded" onClick={handleLogout} >Logout</button> : <Link to="/register" className="bg-black p-2 pl-3 pr-3 text-white rounded" >Register/Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
