import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Faqs() {
  // New Q&A Data for Mike Henry, grouped by category
  const faqCategories = [
    {
      title: "About Mike & His Services",
      idPrefix: "faq-serv",
      questions: [
        {
          id: "faq-q1",
          question: "What areas do you specialize in?",
          answer: "I specialize in residential real estate throughout Brampton and the surrounding Peel Region. With 10 years focused specifically on this area, I have deep knowledge of its diverse neighbourhoods and market dynamics.",
          active: true, // Make the first question active by default
        },
        {
          id: "faq-q2",
          question: "What services do you offer for buyers?",
          answer: "I provide comprehensive support for buyers, including personalized property searches based on your needs, market analysis, expert negotiation, guidance through inspections and financing, and ensuring a smooth closing process.",
        },
        {
          id: "faq-q3",
          question: "How do you help home sellers?",
          answer: "For sellers, I offer strategic pricing analysis, professional home staging advice, targeted marketing campaigns across multiple platforms, skilled negotiation to get you the best price, and management of the entire selling process from listing to closing.",
        },
        {
          id: "faq-q4",
          question: "What makes you different from other realtors?",
          answer: "My 10 years of dedicated experience in Brampton, combined with a client-first approach built on communication and trust, sets me apart. I'm committed to providing personalized service and achieving outstanding results for every client I work with.",
        },
      ],
    },
    {
      title: "The Process & Fees",
      idPrefix: "faq-proc",
      questions: [
        {
          id: "faq-q5",
          question: "What are your commission fees?",
          answer: "Real estate commissions are typically paid by the seller and can vary depending on the specifics of the transaction. I believe in full transparency and will discuss all fees and services clearly during our initial consultation.",
        },
        {
          id: "faq-q6",
          question: "What should I expect during the closing process?",
          answer: "The closing process involves the final transfer of ownership. Key steps include a final walkthrough of the property, signing legal documents (often with a lawyer), transferring funds, and receiving the keys. I will guide you through each step to ensure everything proceeds smoothly and on schedule.",
        },
      ],
    },
    {
      title: "Getting Started",
      idPrefix: "faq-start",
      questions: [
        {
          id: "faq-q7",
          question: "How do I get started working with you?",
          answer: "The best way to start is by scheduling a free, no-obligation consultation. We can discuss your specific needs, goals, and how I can best assist you in the Brampton real estate market. Use the contact form on this page or call me directly!",
        },
      ],
    },
  ];


  return (
    <section className="section-faq">
      <div className="tf-container">
        <div className="row">
          {/* Main FAQ Content Column */}
          <div className="col-xl-8 col-lg-7">
            <div className="heading-section mb-48">
              <h2 className="title">Frequently Asked Questions</h2>
            </div>

            {faqCategories.map((category, catIndex) => (
              <div key={category.idPrefix} className="tf-faq mb-49">
                <h3 className="fw-8 title mb-24">{category.title}</h3>
                <ul className="box-faq" id={`wrapper-${category.idPrefix}`}>
                  {category.questions.map((faq, index) => (
                    <li key={faq.id} className={`faq-item ${faq.active ? 'active' : ''}`}>
                      <a
                        href={`#${faq.id}`}
                        className={`faq-header h6 ${!faq.active ? 'collapsed' : ''}`}
                        data-bs-toggle="collapse"
                        aria-expanded={faq.active ? 'true' : 'false'}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                        <i className="icon-CaretDown" />
                      </a>
                      <div
                        id={faq.id}
                        className={`collapse ${faq.active ? 'show' : ''}`}
                        data-bs-parent={`#wrapper-${category.idPrefix}`}
                      >
                        <p className="faq-body">{faq.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

             {/* "Still have questions?" Box - Moved outside sidebar column */}
             <div className="box-contact-faq">
                <h4 className="title">Still have questions?</h4>
                <p className="text-1">
                  Can't find the answer you're looking for? Please get in touch.
                </p>
                <Link href="/contact" className="tf-btn bg-color-primary">
                  Get in touch
                </Link>
              </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-xl-4 col-lg-5">
            <div className="tf-sidebar sticky-sidebar">
              {/* Contact Form */}
              <form className="form-contact-seller mb-30">
                <h4 className="heading-title mb-30">Contact Mike Henry</h4>
                <div className="seller-info">
                  <div className="avartar">
                    <Image
                      alt="Mike Henry" // Updated alt text
                      width={200}
                      height={200}
                      src="/images/avatar/seller.jpg" // Placeholder image
                    />
                  </div>
                  <div className="content">
                    <h6 className="name">Mike Henry</h6>
                    <ul className="contact">
                      <li>
                        <i className="icon-phone-1" />
                        <span>1-333-345-6868</span> {/* Placeholder */}
                      </li>
                      <li>
                        <i className="icon-mail" />
                        <a href="#">mike.henry@example.com</a> {/* Placeholder */}
                      </li>
                    </ul>
                  </div>
                </div>
                <fieldset className="mb-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    required
                  />
                </fieldset>
                <fieldset className="mb-30">
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="How can I help you?" // Updated placeholder
                    id="message"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <button type="submit" className="tf-btn bg-color-primary w-full"> {/* Changed to button */}
                  Send message
                </button>
              </form>

              {/* Sidebar Ad */}
              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    data-src="/images/blog/ads.jpg"
                    alt="Brampton neighbourhood" // Updated alt text
                    width={400}
                    height={470}
                    src="/images/blog/ads.jpg"
                  />
                </div>
                {/* Removed logo from ad */}
                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      {/* Removed link from title */}
                      Ready to Buy or Sell in Brampton?
                    </h4>
                    <div className="text-addres">
                      <p>
                        Connect with Mike Henry - I know the market inside out and can help you achieve your goals.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="tf-btn fw-6 bg-color-primary w-full">
                    Contact Mike
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
