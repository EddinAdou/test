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
import Banners from "./components/Banners";
import SectionDeuxAccueil from "./components/SectionDeuxAccueil";
import SectionTrois from "./components/SectionTroisAccueil";
import SectionQuatre from "./components/SectionQuatreAccueil";

const App = () => {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <Routes>
        <Route path="/DashboardMain" element={<DashboardMain />} />
        <Route path="/DashboardLastReport" element={<DashboardLastReport />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SectionDeuxAccueil" element={<SectionDeuxAccueil />} />
        <Route path="/SectionTrois" element={<SectionTrois />} />
        <Route path="/SectionQuatre" element={<SectionQuatre />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="Banners" element={<Banners />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/*<Footer />*/}
        <Banners />
    </BrowserRouter>
  );
};

export default App;