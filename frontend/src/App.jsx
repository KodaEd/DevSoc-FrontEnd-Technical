import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
