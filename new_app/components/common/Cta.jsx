import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Cta() {
  return (
    <section className="section-CTA">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <Image
                alt=""
                src="/images/section/cta.png"
                width={216}
                height={312}
              />
              <div className="content">
                <h4 className="text_white mb-8">
                  {siteContent.common.ctaTitle}
                </h4>
                <p className="text_white text-1">
                  {siteContent.common.ctaDescription}
                </p>
              </div>
              <a href="#" className="tf-btn style-2 fw-6">
                {siteContent.common.ctaButtonText}
                <i className="icon-MagnifyingGlass fw-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
