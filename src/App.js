import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Homee";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {/* show only the selected page */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "service" && <Service />}
      {page === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
