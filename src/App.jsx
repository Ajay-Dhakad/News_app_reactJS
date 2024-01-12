import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
