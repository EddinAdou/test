import React from "react";
import Header from "../components/Header";
import SectionDeuxAccueil from "../components/SectionDeuxAccueil";
import SectionTrois from "../components/SectionTroisAccueil";
import SectionQuatreAccueil from "../components/SectionQuatreAccueil";
import EcoWebsiteExamples from "../components/EcoWebsiteExamples";
import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <div>
        <Header />
      < SectionDeuxAccueil/>
      < SectionTrois/>
      < SectionQuatreAccueil/>
      < EcoWebsiteExamples/>
        <Footer />
    

    </div>
  );
};

export default LandingPage;
