import React from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ServicesGrid from "./components/Service";
import Register from "./components/Register";
import { AuthProvider, useAuth } from "./components/AuthContext";
import Donation from "./components/Donation";
import Pay from "./components/Pay";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
     <Donation/>
      <Routes>
        <Route path="/" element={user ? <Slider /> : <Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={user ? <ServicesGrid /> : <Register />} />
        <Route path="/contact" element={user ? <ContactForm /> : <Register />} />
        <Route path="/pay" element={<Pay/>}/>
      </Routes>
    </div>
  );
};

const RootApp = () => (
  <AuthProvider>
    <App/>
  </AuthProvider>
);

export default RootApp;
