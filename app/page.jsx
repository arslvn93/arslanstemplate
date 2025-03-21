import React from "react";
import ThemeController from "@/components/common/ThemeController";
import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";

// ----------------------------
// Home 6
// ----------------------------
import Hero6 from "@/components/homes/home-6/Hero";
import About from "@/components/homes/home-6/About";
import Services from "@/components/homes/home-6/Services";
import Projects from "@/components/homes/home-6/Projects";
import Team from "@/components/homes/home-6/Team";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Blogs from "@/components/homes/home-6/Blogs";
import Contact from "@/components/homes/home-6/Contact";

// ----------------------------
// Home 7
// ----------------------------
import HighlightSection from "@/components/homes/home-7/HighlightSection";
import HelpCenter from "@/components/homes/home-7/HelpCenter";
import PropertyGallery from "@/components/homes/home-7/PropertyGallery";
import Contact7 from "@/components/homes/home-7/Contact";

// ----------------------------
// Home 10
// ----------------------------
import Brands from "@/components/homes/home-10/Brands";
import Properties from "@/components/homes/home-10/Properties";
import Properties2 from "@/components/homes/home-10/Properties2";
import Properties3 from "@/components/homes/home-10/Properties3";
import HelpSection from "@/components/homes/home-10/HelpSection";

// ----------------------------
// Home 1 (renamed imports to avoid collisions)
// ----------------------------
import Hero1 from "@/components/homes/home-1/Hero";
import About1 from "@/components/homes/home-1/About";
import Agents1 from "@/components/homes/home-1/Agents";
import Banner1 from "@/components/homes/home-1/Banner";
import Blogs1 from "@/components/homes/home-1/Blogs";
import Brands1 from "@/components/homes/home-1/Brands";
import Categories1 from "@/components/homes/home-1/Categories";
import Cities1 from "@/components/homes/home-1/Cities";
import Contact1 from "@/components/homes/home-1/Contact";
import Cta1 from "@/components/homes/home-1/Cta";
import DownloadApp1 from "@/components/homes/home-1/DownloadApp";
import Facts1 from "@/components/homes/home-1/Facts";
import Featured1 from "@/components/homes/home-1/Featured";
import FeaturedProperty1 from "@/components/homes/home-1/FeaturedProperty";
import Features1 from "@/components/homes/home-1/Features";
import HelpCenter1 from "@/components/homes/home-1/HelpCenter";
import HelpSection1 from "@/components/homes/home-1/HelpSection";
import LoanCalculator1 from "@/components/homes/home-1/LoanCalculator";
import Projects1 from "@/components/homes/home-1/Projects";
import Properties1 from "@/components/homes/home-1/Properties";

export const metadata = {
  title: "My Real Estate Website",
  description: "Custom Real Estate Website",
};

export default function HomePage() {
  return (
    <>
      <ThemeController themeColor="default-dark" />
      <div id="wrapper" className="bg-body-1 counter-scroll">

        {/* Header (Home 6) */}
        <Header6 />

        {/* -- Hero (Home 6) -- */}
        <Hero6 />

        <div className="main-content">
          {/* -- About (Home 6) -- */}
          <About />

          {/* -- Highlight section (Home 7) -- */}
          <HighlightSection />

          {/* -- Services (Home 6) -- */}
          <Services />

          {/* -- Projects (Home 6) -- */}
          <Projects />

          {/* -- Properties (Home 10) -- */}
          <Properties />
          <Properties2 />
          <Properties3 />

          {/* -- Help/FAQ (Home 7 & Home 10) -- */}
          <HelpCenter />
          <HelpSection />

          {/* -- Property Gallery (Home 7) -- */}
          <PropertyGallery />

          {/* -- Team (Home 6) -- */}
          <Team />

          {/* -- Testimonials (Home 6) -- */}
          <Testimonials />

          {/* -- Brands (Home 10) -- */}
          <Brands />

          {/* -- Blogs (Home 6) -- */}
          <Blogs />

          {/* ---------------------------------- */}
          {/* Home 1 Sections                    */}
          {/* Uncomment / remove as needed       */}
          {/* ---------------------------------- */}
          
          <Hero1 />
          <Banner1 />
          <About1 />
          <Agents1 />
          <Facts1 />
          <Featured1 />
          <FeaturedProperty1 />
          <Properties1 />
          <Cities1 />
          <Categories1 />
          <Features1 />
          <HelpCenter1 />
          <HelpSection1 />
          <DownloadApp1 />
          <LoanCalculator1 />
          <Projects1 />
          <Blogs1 />
          <Brands1 />
          <Cta1 />
          <Contact1 />

          {/* ---------------------------------- */}
          {/* Contacts from Home 6 and Home 7    */}
          {/* ---------------------------------- */}
          <Contact />
          <Contact7 />

        </div>
        
        {/* Footer */}
        <Footer2 />
      </div>
    </>
  );
}
