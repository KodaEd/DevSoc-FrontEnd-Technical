import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
