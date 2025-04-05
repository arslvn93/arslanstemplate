"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
// Removed footerData import
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Footer2({ parentClass = "" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <footer id="footer" className={parentClass} style={{ backgroundColor: '#161618' }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-logo">
                <Link href={`/`}>
                  <Image
                    id="logo_footer"
                    alt="logo-footer"
                    width={272}
                    height={85}
                    src="/images/logo/logo-2@2x.png"
                  />
                </Link>
              </div>
              <div className="wrap-contact-item style-1">
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-location-6" />
                  </div>
                  <div className="content">
                    <div className="title text-1">Address</div>
                    <h6>
                      <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a>
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-phone-2" />
                  </div>
                  <div className="content">
                    <div className="title text-1">{/* Assuming "Call Me" is better */}Call Me</div>
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
                    <div className="title text-1">{/* Assuming "Need Help?" is better */}Need Help?</div>
                    <h6 className="fw-4">
                      <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Removed footer-main section */}
        </div>
        <div className="col-12">
          <div className="footer-bottom">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="fw-7">{siteContent.agent.name} - {siteContent.agent.title}</span>. Website by
              <a href="#">Themesflat</a> {/* Keep credit as requested */}
            </p>
            <div className="wrap-social">
              <div className="text-3 fw-6 text_white">Follow Me:</div> {/* Added colon */}
              <ul className="tf-social">
                {siteContent.agent.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={link.iconClass} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
