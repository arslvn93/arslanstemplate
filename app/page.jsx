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
import HelpSection10 from "@/components/homes/home-10/HelpSection";
// (Removed: Properties10, Properties2_10, Properties3_10)

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
// (Removed: FeaturedProperty1)
import Features1 from "@/components/homes/home-1/Features";
import HelpCenter1 from "@/components/homes/home-1/HelpCenter";
import HelpSection1 from "@/components/homes/home-1/HelpSection";
import LoanCalculator1 from "@/components/homes/home-1/LoanCalculator";
import Projects1 from "@/components/homes/home-1/Projects";
// (Removed: Properties1)

// ----------------------------
// Home 2 Imports
// ----------------------------
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Home2Hero from "@/components/homes/home-2/Hero";
import Home2About from "@/components/homes/home-2/About";
import Home2Agents from "@/components/homes/home-2/Agents";
// (Removed: Home2Properties)
import Home2Banner from "@/components/homes/home-2/Banner";
import Home2Blogs from "@/components/homes/home-2/Blogs";
import Home2Brands from "@/components/homes/home-2/Brands";
import Home2Categories from "@/components/homes/home-2/Categories";
import Home2Cities from "@/components/homes/home-2/Cities";
import Home2Facts from "@/components/homes/home-2/Facts";
import Home2Testimonials from "@/components/homes/home-2/Testimonials";

// ----------------------------
// Home 8 Imports
// ----------------------------
import Header8 from "@/components/headers/Header8";
import Home8Hero from "@/components/homes/home-8/Hero";
import Home8Agents from "@/components/homes/home-8/Agents";
import Home8Banner from "@/components/homes/home-8/Banner";
import Home8Blogs from "@/components/homes/home-8/Blogs";
import Home8Brands from "@/components/homes/home-8/Brands";
import Home8Facts from "@/components/homes/home-8/Facts";
import Home8Services from "@/components/homes/home-8/Services";
import Home8Testimonials from "@/components/homes/home-8/Testimonials";
import Home8WelcomeSection from "@/components/homes/home-8/WelcomeSection";
// (Removed: Home8FeaturedProperty, Home8Properties)

// ----------------------------
// Home 9 Imports
// ----------------------------
import Header9 from "@/components/headers/Header9";
import Home9Hero from "@/components/homes/home-9/Hero";
import Home9About from "@/components/homes/home-9/About";
import Home9Agents from "@/components/homes/home-9/Agents";
import Home9Blogs from "@/components/homes/home-9/Blogs";
import Home9Brands from "@/components/homes/home-9/Brands";
import Home9Facts from "@/components/homes/home-9/Facts";
import Home9Services from "@/components/homes/home-9/Services";
import Home9Services2 from "@/components/homes/home-9/Services2";
import Home9Features from "@/components/homes/home-9/Features";
import Home9Testimonials from "@/components/homes/home-9/Testimonials";
// (Removed: Home9Properties)

export const metadata = {
  title: "Combined Real Estate Website",
  description: "Combined Real Estate Website with all home sections (excluding property ones)",
};

export default function HomePage() {
  return (
    <>
      <ThemeController themeColor="default-dark" />
      <div id="wrapper" className="bg-body-1 counter-scroll">

        {/* ---------------------------- */}
        {/* Headers */}
        {/* ---------------------------- */}
        <section id="headers">
          <Header6 />
          <Header2 />
          <Header8 />
          <Header9 />
        </section>

        {/* ---------------------------- */}
        {/* Heroes */}
        {/* ---------------------------- */}
        <section id="heroes">
          <Hero6 />
          <Home2Hero />
          <Home8Hero />
          <Home9Hero />
          <Hero1 />
        </section>

        {/* ---------------------------- */}
        {/* About / Introduction */}
        {/* ---------------------------- */}
        <section id="about">
          <About6 />
          <Home2About />
          <Home9About />
          <About1 />
          <Home8WelcomeSection />
        </section>

        {/* ---------------------------- */}
        {/* Services / Features */}
        {/* ---------------------------- */}
        <section id="services">
          <Services6 />
          <Home9Services />
          <Home9Features />
          <Home9Services2 />
          <Home8Services />
          <Features1 />
        </section>

        {/* ---------------------------- */}
        {/* Agents */}
        {/* ---------------------------- */}
        <section id="agents">
          <Agents1 />
          <Home2Agents />
          <Home8Agents />
          <Home9Agents />
        </section>

        {/* ---------------------------- */}
        {/* Testimonials */}
        {/* ---------------------------- */}
        <section id="testimonials">
          <Testimonials6 />
          <Home2Testimonials />
          <Home8Testimonials />
          <Home9Testimonials />
        </section>

        {/* ---------------------------- */}
        {/* Blogs */}
        {/* ---------------------------- */}
        <section id="blogs">
          <Blogs6 />
          <Home2Blogs />
          <Home8Blogs />
          <Home9Blogs />
          <Blogs1 />
        </section>

        {/* ---------------------------- */}
        {/* Miscellaneous / Other Content */}
        {/* ---------------------------- */}
        <section id="misc">
          {/* Home 6 Content */}
          <Projects6 />
          <Team6 />
          {/* Home 7 Content */}
          <HighlightSection />
          <HelpCenter />
          <Contact7 />
          {/* Facts from various homes */}
          <Facts1 />
          <Home2Facts />
          <Home8Facts />
          <Home9Facts />
          {/* Categories, Cities, Banners */}
          <Categories1 />
          <Cities1 />
          <Banner1 />
          <Home2Banner />
          <Home8Banner />
          {/* Additional Home 1 Components */}
          <DownloadApp1 />
          <LoanCalculator1 />
          <Projects1 />
          <Cta1 />
          <Contact1 />
          {/* Brands from various homes */}
          <Brands1 />
          <Home2Brands />
          <Home8Brands />
          <Home9Brands />
          {/* Home 10 Content */}
          <Brands10 />
          <HelpSection10 />
          {/* Additional Help Sections */}
          <HelpCenter1 />
          <HelpSection1 />
        </section>

        {/* ---------------------------- */}
        {/* Footers */}
        {/* ---------------------------- */}
        <section id="footers">
          <Footer2 />
          <Footer1 logo="/images/logo/logo-3@2x.png" />
          <Footer2 parentClass="style-2" />
          <Footer2 />
        </section>

      </div>
    </>
  );
}
