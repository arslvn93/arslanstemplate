import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
import Cta from "@/components/otherPages/LoanProcess/Cta";
import Facts from "@/components/otherPages/LoanProcess/Facts";
import LoanCalculator from "@/components/otherPages/LoanProcess/LoanCalculator";
// Removed PageTitle import
import Process from "@/components/otherPages/LoanProcess/Process";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  title: `Home Loan Process ${siteContent.metadata.baseTitleSuffix}`,
  description: `Understanding the home loan process with guidance from ${siteContent.agent.name}.`,
};

export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header6 />
        {/* Removed PageTitle */}
        <div className="main-content">
          <Facts />
          <Process />
          <LoanCalculator />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}