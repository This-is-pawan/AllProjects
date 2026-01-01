import { Link } from "react-router-dom";

const Donation = () => {
  return (
    <div className="flex justify-center mt-6">
      <button className="relative flex items-center gap-2 bg-red-900 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition">
        
        {/* Blinking Icon */}
        <span className="w-3 h-3 rounded-full bg-green-200 animate-ping  absolute "></span>
        <span className="w-3 h-3 rounded-full bg-green-900"></span>
<Link to='/pay'>Donate Now 💚</Link>
      </button>
    </div>
  );
};

export default Donation;
