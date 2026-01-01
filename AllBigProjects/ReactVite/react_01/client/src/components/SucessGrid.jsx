import React from "react";

const successStories = [
  {
    title: "Breast Cancer Survivor",
    desc: "Riya fought breast cancer and returned to a healthy life after 1 year of treatment.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    review: "I never thought I could smile again, but hope and treatment saved me — stay strong!"
  },
  {
    title: "Childhood Leukemia Fighter",
    desc: "Aarav, 10 years old, defeated leukemia with strong will & support.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    review: "Believe in miracles — I am one of them."
  },
  {
    title: "Stage-3 Lung Cancer",
    desc: "Mahesh proved hope and treatment can change destiny.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Never lose hope. Today I am alive because I kept fighting."
  },
  {
    title: "Blood Cancer Warrior",
    desc: "Meera continues to inspire thousands with her story.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "Early detection and courage is the real medicine."
  },
  {
    title: "Oral Cancer Victory",
    desc: "Vikram overcame cancer caused by tobacco habit.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    review: "Quit tobacco before it quits you."
  },
  {
    title: "Brain Tumor Survivor",
    desc: "Successful surgery gave Aditi a new life direction.",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Life is beautiful — never stop fighting."
  },
  {
    title: "Prostate Cancer Fighter",
    desc: "Rahul proved that awareness & early testing saves lives.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    review: "Check-up saved my life. Don't wait."
  },
  {
    title: "Bone Cancer Winner",
    desc: "Akash runs marathons after defeating bone cancer.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    review: "Pain is temporary, victory is forever!"
  },
];


const SuccessGrid = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-center text-3xl font-bold text-red-800 mb-8">
        Cancer Awareness — Real Success Stories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h3 className="mt-3 text-lg font-bold text-gray-800">
              {story.title}
            </h3>
            <p className="text-sm mt-1 text-gray-600">{story.desc}</p>

            <p className="mt-2 text-sm italic text-green-700 font-semibold">
              “{story.review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessGrid;
