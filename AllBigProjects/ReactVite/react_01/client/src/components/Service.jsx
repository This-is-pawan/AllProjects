import React, { useState, useEffect } from "react";

const services = [
  { title: "Free Medicines", desc: "Providing essential cancer medicines at zero cost for needy patients.", icon: "💊" },
  { title: "Free Checkup & Screening", desc: "Early detection tests such as mammography & blood screening.", icon: "🩺" },
  { title: "Chemotherapy Support", desc: "Guidance and support to patients undergoing chemotherapy.", icon: "💉" },
  { title: "Counselling & Mental Support", desc: "Expert counselling sessions for patients and families.", icon: "🧠" },
  { title: "Blood Donation Camps", desc: "We organize blood donation drives every month.", icon: "🩸" },
  { title: "Financial Aid Help", desc: "Helping families apply for funds and medical aid.", icon: "💰" },
  { title: "Awareness Workshops", desc: "Educating people in schools, colleges & public places.", icon: "📢" },
  { title: "Nutritional Guide", desc: "Diet plans designed specially for cancer patients.", icon: "🥗" },
];

const ServicesGrid = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.name) {
      setName(savedUser.name);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-center text-3xl font-bold text-red-800 mb-8">
        Our Cancer Care Services
      </h2>

      {name && (
        <p className="text-center p-4 font-bold capitalize tracking-wider text-xl">
          Hello, <span className="text-pink-400">{name}</span> — Welcome to our service ❤️
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-pink-50 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center cursor-pointer"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
