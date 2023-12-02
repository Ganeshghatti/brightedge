import React, { useState } from "react";
import Navbar from "./pages/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import PageNotFound from "./Components/NotFound/PageNotFound";
import Footer from "./pages/Footer/Footer";
import Success from "./Components/Success";
import Failure from "./Components/Failure";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-thankyou" element={<Success />} />
        <Route path="/form-error" element={<Failure />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
