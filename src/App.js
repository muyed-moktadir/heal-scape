import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  const [theme, setTheme] = useState(false)


  return (

    <div data-theme={theme ?"dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
