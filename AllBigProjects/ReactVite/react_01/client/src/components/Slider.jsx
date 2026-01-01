import { useState, useEffect } from "react";
import first from "../assets/firstimage.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import fourth from "../assets/fourth.svg";
import fifth from "../assets/fifth.svg";
import SuccessGrid from "./SucessGrid";

const img = [
  { img: first, text: "Early detection saves lives. Do regular screening." },
  { img: second, text: "Symptoms ignored today can become danger tomorrow." },
  { img: third, text: "Support cancer fighters. They are stronger than you think." },
  { img: fourth, text: "A healthy lifestyle can reduce cancer risk by 40%." },
  { img: fifth, text: "Cancer is not the end—treatment and hope exist." },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === img.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? img.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === img.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <div className="relative w-full max-w-[1200px] mx-auto h-[350px] md:h-[450px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {img.map((image, index) => (
            <div key={index} className="w-full flex flex-col items-center shrink-0 px-1">
              <img
                src={image.img}
                alt="awareness"
                className="w-[100%] md:w-[65%] h-auto mt-4 max-h-[350px] object-contain rounded-xl shadow-xl bg-transparent bg-black"
              />
              <p className="text-center mt-4 px-4 font-semibold text-base md:text-xl text-red-600">
                {image.text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-100/70 px-3 py-2 text-xl rounded-full shadow"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-100/70 px-3 py-2 text-xl rounded-full shadow"
        >
          ▶
        </button>
      </div>

      <SuccessGrid />
    </>
  );
};

export default Slider;
