import BrandSlider from "@/components/common/BrandSlider";
import React from "react";

export default function Brands() {
  return (
    <section className="section-work-together style-2 tf-spacing-1">
      <div className="wg-partner">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <BrandSlider parentClass="infiniteslide wrap-partners mb-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
