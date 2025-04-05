import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function About() {
  return (
    <div className="section-dream-home tf-spacing-7">
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="box-dream-home">
              <div className="left scroll-effect">
                <div className="text-display-4 text_white title text-change-color">
                  {siteContent.about.sectionTitle}
                </div>
                <p
                  className="text-1 text-color1 description wow animate__fadeInUp animate__animated"
                  data-wow-delay="0.3s"
                >
                  {/* Using template literals to insert dynamic data if needed, or just use the full string */}
                  {siteContent.about.mainParagraph}
                </p>
                <div
                  className="wrap-contact-item wow animate__fadeInUp animate__animated"
                  data-wow-delay="0.3s"
                >
                  <div className="contact-item">
                    <div className="icons">
                      <i className="icon-phone-2" />
                    </div>
                    <div className="content">
                      <div className="title text-1">{siteContent.about.callLabel}</div>
                      <h6>
                        <a href={`tel:${siteContent.agent.phone}`}>{siteContent.agent.phone}</a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icons">
                      <i className="icon-letter-2" />
                    </div>
                    <div className="content">
                      <div className="title text-1">{siteContent.about.helpLabel}</div>
                      <h6 className="fw-4">
                        <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <a
                  className="tf-btn bg-color-primary pd-25 rounded-cycle height-1 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0.3s"
                >
                  {siteContent.about.moreButtonText} <i className="icon-arrow-right-3" />
                </a>
              </div>
              <div className="center xl-hide">
                <div className="img-style img-custom-anim-left">
                  <Image
                    className="lazyload parallax-img"
                    data-src="/images/section/section-find-home-2.jpg"
                    alt=""
                    width={620}
                    height={816}
                    src={siteContent.about.image1Src}
                  />
                </div>
              </div>
              <div className="right">
                <div className="content">
                  <div className="text-11 text_white fw-6 title wow animate__fadeInUp animate__animated">
                    {siteContent.about.expertiseTitle}
                  </div>
                  <p className="text-color1 text-1 description wow animate__fadeInUp animate__animated">
                    {siteContent.about.expertiseIntro}
                  </p>
                  <ul className="list-check">
                    {siteContent.about.expertiseItems.map((item, index) => (
                       <li key={index} className="text-1 text-color1 wow animate__fadeInUp animate__animated" data-wow-delay={`${index * 0.1}s`}>
                         <i className="icon-check-cycle" />
                         {item}
                       </li>
                    ))}
                  </ul>
                </div>
                <div className="img-style">
                  <Image
                    className="lazyload parallax-img img-custom-anim-left"
                    data-src="/images/section/section-find-home.jpg"
                    alt=""
                    width={552}
                    height={319}
                    src={siteContent.about.image2Src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
