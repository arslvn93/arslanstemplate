"use client";

import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed agents import
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Team() {
  return (
    <div className="section-box-team style-1 section-style style-border-top tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-55">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text={siteContent.aboutMike.sectionTitle} />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                {siteContent.aboutMike.description}
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout mb_38 style-pagination"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd17",
              }}
            >
              {/* Loop over a single agent defined in siteContent */}
              {[siteContent.agent].map((agent, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="agent-item style-4 hover-img wow animate__fadeInRight animate__animated"
                    data-wow-delay={agent.delay}
                  >
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          data-src={siteContent.agent.aboutImageSrc} // Use specific image from siteContent
                          alt=""
                          width={400}
                          height={494}
                          src={siteContent.agent.aboutImageSrc} // Use specific image from siteContent
                        />
                      </Link>
                      <div className="list-social">
                        <a href="#">
                          <i className="icon-fb" />
                        </a>
                        <a href="#">
                          <i className="icon-X" />
                        </a>
                        <a href="#">
                          <i className="icon-linked" />
                        </a>
                        <a href="#">
                          <i className="icon-ins" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text-11 fw-6">
                        <Link
                          href={`#`} // Link to # or maybe /contact ? Using # for now.
                          className="text_white link"
                        >
                          {siteContent.agent.name}
                        </Link>
                      </div>
                      <p className="text-1 text-color1">{siteContent.aboutMike.agentDescription}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center mt-20 spd17" />
            </Swiper>
            <a
              href="#"
              className="tf-btn bg-color-primary height-1 pd-25 rounded-cycle mx-auto btn-border"
            >
              {siteContent.aboutMike.buttonText} <i className="icon-arrow-right-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
