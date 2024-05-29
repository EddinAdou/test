import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardMain from "./pages/DashboardMain";
import DashboardLastReport from "./pages/DashboardLastReport";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/DashboardMain" element={<DashboardMain />} />
        <Route path="/DashboardLastReport" element={<DashboardLastReport />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
