import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Devolver from "../pages/Devolver";
import Doar from "../pages/Doar";
import Retirar from "../pages/Retirar";
import Login from "../pages/Login";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="devolver" element={<Devolver />} />
        <Route path="doar" element={<Doar />} />
        <Route path="retirar" element={<Retirar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
