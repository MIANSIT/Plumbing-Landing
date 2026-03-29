

import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import AboutUs from "./components/sections/AboutUs";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TrustSection from "./components/sections/TrustSection";
import WhyUs from "./components/sections/WhyUs";


export default function Home() {
  return (
    <main className="relative" > 
      <div className="sticky top-0 z-50"><Navbar/></div>
      <Hero/>
      <Services/>
      <WhyUs/>
      <TrustSection/>
      <Gallery/>
      <AboutUs/>
      <Footer/>
      
    </main>
  );
}