import { useState } from "react";
import { Link } from "react-router-dom";

const Slides = () => {
  const [activeSlide, setActiveSlide] = useState("/dashboard");

  const handleSlideClick = (path) => {
    setActiveSlide(path);
  };

  return (
    <div className="flex max-w-[600px] justify-between mx-auto pb-2 bg-transparent gap-3">
      <Link
        to="/dashboard"
        className={`rounded px-2 py-1 ${
          activeSlide === "/dashboard"
            ? "bg-green-500 text-white"
            : " bg-gray-200 text-black"
        }`}
        onClick={() => handleSlideClick("/dashboard")}
      >
        Dashboard
      </Link>
      <Link
        to="/topicwise"
        className={`rounded px-2 py-1 ${
          activeSlide === "/topicwise"
            ? "bg-green-500 text-white"
            : " bg-gray-200    text-black"
        }`}
        onClick={() => handleSlideClick("/topicwise")}
      >
        Topic Wise
      </Link>
      <Link
        to="/compare"
        className={`rounded px-2 py-1 ${
          activeSlide === "/compare"
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => handleSlideClick("/compare")}
      >
        Compare
      </Link>
      <Link
        to="/students"
        className={`rounded px-2 py-1 ${
          activeSlide === "/students"
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => handleSlideClick("/students")}
      >
        Students
      </Link>
    </div>
  );
};

export default Slides;
