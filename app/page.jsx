import React from "react";
import ThemeController from "@/components/common/ThemeController";

// ----------------------------
// Home 6 Imports
// ----------------------------
import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";
import Hero6 from "@/components/homes/home-6/Hero";
import About6 from "@/components/homes/home-6/About";
import Services6 from "@/components/homes/home-6/Services";
import Projects6 from "@/components/homes/home-6/Projects";
import Team6 from "@/components/homes/home-6/Team";
import Testimonials6 from "@/components/homes/home-6/Testimonials";
import Blogs6 from "@/components/homes/home-6/Blogs";
import Contact6 from "@/components/homes/home-6/Contact";

// ----------------------------
// Home 7 Imports
// ----------------------------
import HighlightSection from "@/components/homes/home-7/HighlightSection";
import HelpCenter from "@/components/homes/home-7/HelpCenter";
import Contact7 from "@/components/homes/home-7/Contact";

// ----------------------------
// Home 10 Imports
// ----------------------------
import Brands10 from "@/components/homes/home-10/Brands";
import Properties10 from "@/components/homes/home-10/Properties";
import Properties2_10 from "@/components/homes/home-10/Properties2";
import Properties3_10 from "@/components/homes/home-10/Properties3";
import HelpSection10 from "@/components/homes/home-10/HelpSection";

// ----------------------------
// Home 1 Imports
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

// ----------------------------
// Home 2 Imports
// ----------------------------
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Home2Hero from "@/components/homes/home-2/Hero";
import Home2About from "@/components/homes/home-2/About";
import Home2Agents from "@/components/homes/home-2/Agents";
import Home2Banner from "@/components/homes/home-2/Banner";
import Home2Blogs from "@/components/homes/home-2/Blogs";
import Home2Brands from "@/components/homes/home-2/Brands";
import Home2Categories from "@/components/homes/home-2/Categories";
import Home2Cities from "@/components/homes/home-2/Cities";
import Home2Facts from "@/components/homes/home-2/Facts";
import Home2Properties from "@/components/homes/home-2/Properties";
import Home2Testimonials from "@/components/homes/home-2/Testimonials";

// ----------------------------
// Home 3 Imports
// ----------------------------
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3Hero from "@/components/homes/home-3/Hero";
import Home3About from "@/components/homes/home-3/About";
import Home3Agents from "@/components/homes/home-3/Agents";
import Home3Banner from "@/components/homes/home-3/Banner";
import Home3Blogs from "@/components/homes/home-3/Blogs";
import Home3Brands from "@/components/homes/home-3/Brands";
import Home3Categories from "@/components/homes/home-3/Categories";
import Home3Cities from "@/components/homes/home-3/Cities";
import Home3Facts from "@/components/homes/home-3/Facts";
import Home3Properties from "@/components/homes/home-3/Properties";
import Home3Testimonials from "@/components/homes/home-3/Testimonials";

export const metadata = {
  title: "Combined Real Estate Website",
  description: "Combined Real Estate Website with all home sections",
};

export default function HomePage() {
  return (
    <>
      <ThemeController themeColor="default-dark" />
      <div id="wrapper" className="bg-body-1 counter-scroll">
        {/* ---------------------------- */}
        {/* Home 6 Section */}
        {/* ---------------------------- */}
        <Header6 />
        <Hero6 />
        <div className="main-content">
          <About6 />
          <Services6 />
          <Projects6 />
          <Team6 />
          <Testimonials6 />
          <Blogs6 />
          <Contact6 />
        </div>

        {/* ---------------------------- */}
        {/* Home 7 Section */}
        {/* ---------------------------- */}
        <HighlightSection />
        <HelpCenter />
        <Contact7 />

        {/* ---------------------------- */}
        {/* Home 10 Section */}
        {/* ---------------------------- */}
        <Brands10 />
        <Properties10 />
        <Properties2_10 />
        <Properties3_10 />
        <HelpSection10 />

        {/* ---------------------------- */}
        {/* Home 1 Section */}
        {/* ---------------------------- */}
        <Hero1 />
        <Banner1 />
        <About1 />
        <Agents1 />
        <Facts1 />
        <Featured1 />
        <FeaturedProperty1 />
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

        {/* ---------------------------- */}
        {/* Home 2 Section */}
        {/* ---------------------------- */}
        <Header2 />
        <Home2Hero />
        <div className="main-content">
          <Home2Categories />
          <Home2About />
          <Home2Properties />
          <Home2Facts />
          <Home2Agents />
          <Home2Cities />
          <Home2Testimonials />
          <Home2Banner />
          <Home2Brands />
          <Home2Blogs />
        </div>
        <Footer1 logo="/images/logo/logo-3@2x.png" />

        {/* ---------------------------- */}
        {/* Home 3 Section */}
        {/* ---------------------------- */}
        <Header3 />
        <Home3Hero />
        <div className="main-content">
          <Home3Categories />
          <Home3About />
          <Home3Properties />
          <Home3Facts />
          <Home3Agents />
          <Home3Cities />
          <Home3Testimonials />
          <Home3Banner />
          <Home3Brands />
          <Home3Blogs />
        </div>
        <Footer3 />

        {/* ---------------------------- */}
        {/* Global Footer */}
        {/* ---------------------------- */}
        <Footer2 />
      </div>
    </>
  );
}
