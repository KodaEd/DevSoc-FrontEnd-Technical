import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TnC from "./pages/TermsAndCondition";
import Login from "./pages/Login";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div
        className={
          darkMode ? "dark dark:bg-slate-800 dark:text-white h-full" : ""
        }
      >
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />{" "}
        <div className="ml-40 mx-20">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode}/>} />
            <Route path="/terms-and-conditions" element={<TnC />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
