import { useState } from "react";

export default function Header({ darkMode }) {
  const [color, setColor] = useState("text-blue-500");

  const changeColor = () => {
    if (color === "text-red-500") {
      setColor("text-blue-500");
    } else {
      setColor("text-red-500");
    }
  };

  return (
    <div>
      <p
        className={`${darkMode ? "text-white" : ""} mb-3 ${color}`}
        onClick={changeColor}
      >
        DevSoc presents
      </p>
      <p
        className={`${
          darkMode ? "text-white" : ""
        } text-6xl font-extrabold ${color} hover:bg-gray-500`}
        onClick={changeColor}
      >
        unilectives
      </p>
      <p className="my-3 font-extrabold">
        Your one-stop shop for UNSW course and elective reviews.
      </p>
    </div>
  );
}
