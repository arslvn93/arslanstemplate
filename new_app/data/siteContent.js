/**
 * Centralized configuration object for website content.
 * Modifying values here will update the content across the site,
 * making it easy to adapt the template for different realtors.
 */
export const siteContent = {
  /**
   * @description Core information about the individual real estate agent.
   * Used across various components like headers, footers, contact sections, etc.
   */
  agent: {
    /** @type {string} Agent's full name (e.g., "Mike Henry"). Used widely. */
    name: "Mike Henry",
    /** @type {string} Agent's professional title (e.g., "Brampton Realtor"). Used in copyright, potentially titles. */
    title: "Brampton Realtor",
    /** @type {string} Primary city/town served (e.g., "Brampton"). Used in descriptions, titles. */
    location: "Brampton",
    /** @type {string} Broader region served (if applicable, e.g., "Peel Region"). Used in FAQ. */
    region: "Peel Region",
    /** @type {number} Agent's years of experience. Used in About section, potentially counters. */
    experienceYears: 10,
    /** @type {string} Agent's primary contact phone number. Used in Footer, Contact forms/sidebars. */
    phone: "1-333-345-6868", // Placeholder - Update with actual number
    /** @type {string} Agent's primary contact email address. Used in Footer, Contact forms/sidebars. */
    email: "mike.henry@example.com", // Placeholder - Update with actual email
    /** @type {string} File path for the main image in the "About [Agent Name]" section. Relative to /public. */
    aboutImageSrc: "/images/section/agent-item-16.jpg", // Placeholder - Update with agent's photo
    /** @type {string} File path for the smaller image in sidebar contact forms. Relative to /public. */
    sidebarImageSrc: "/images/avatar/seller.jpg", // Placeholder - Update with agent's photo
    /**
     * @description List of social media profiles for the footer.
     * @type {Array<{name: string, url: string, iconClass: string}>}
     */
    socialLinks: [
      // Provide actual URLs for the agent's profiles
      { name: "Facebook", url: "#", iconClass: "icon-fb" },
      { name: "Twitter", url: "#", iconClass: "icon-X" },
      { name: "LinkedIn", url: "#", iconClass: "icon-linked" },
      { name: "Instagram", url: "#", iconClass: "icon-ins" }
    ]
  },

  /**
   * @description Base templates for SEO metadata (page titles, descriptions).
   * Used in the metadata export of each page layout.
   */
  metadata: {
    /** @type {string} Text appended to page-specific titles (e.g., "| Mike Henry - Brampton Realtor"). */
    baseTitleSuffix: "| Mike Henry - Brampton Realtor",
    /** @type {string} Default site description for SEO. Concise summary of agent/service/location (~15-25 words). */
    baseDescription: "Mike Henry, your trusted realtor for buying and selling homes in Brampton. 10 years of local experience.",
  },

  /**
   * @description Content for the main hero section on the home page (`Hero6.jsx`).
   */
  hero: {
    /**
     * @description Content for the text/small image part of the hero slider.
     * Note: Currently simplified to use only the first item's content consistently.
     * @type {Array<{title: string, description: string, buttonText: string, smallImage: {src: string, alt: string}}>}
     */
    slides: [
      {
        /** @type {string} Main headline. Can include HTML spans for styling. (~5-10 words). */
        title: "Your <span class='text_white'>Trusted Brampton Realtor</span>: Meet <span class='text_white'>Mike Henry</span>",
        /** @type {string} Short introductory paragraph (~2-3 sentences / 150-250 chars). */
        description: "With 10 years of dedicated experience in the Brampton market, I offer personalized guidance for buyers and sellers. Let's navigate your real estate journey together.",
        /** @type {string} Text for the main call-to-action button (~2-4 words). */
        buttonText: "Learn How I Can Help",
        /** @type {{src: string, alt: string}} Small image next to hero text. `src` relative to /public. */
        smallImage: { src: "/images/page-title/gallery-1.jpg", alt: "Mike Henry Realtor" }
      }
    ],
    /**
     * @description Images for the large background slider.
     * @type {Array<{src: string, alt: string}>}
     */
    mainImages: [
      { src: "/images/page-title/thumbs-main.jpg", alt: "Modern Brampton Home" },
      { src: "/images/page-title/thumbs-main-1.jpg", alt: "Stylish Living Room Interior" },
      { src: "/images/page-title/thumbs-main-2.jpg", alt: "Brampton Community Park" }
    ],
    /**
     * @description Images for the small pagination thumbnails.
     * @type {Array<{src: string, alt: string}>}
     */
    paginationImages: [
       { src: "/images/page-title/pagi-thumbs-1.jpg", alt: "Keys Exchange" },
       { src: "/images/page-title/pagi-thumbs-2.jpg", alt: "Brampton Real Estate Icon" },
       { src: "/images/page-title/pagi-thumbs-3.jpg", alt: "Abstract Texture" }
    ],
    /** @type {string} Label for the first counter below hero text. */
    counter1Label: "Happy Clients", // Odometer component uses its own 'max' prop for the number.
    /** @type {string} Label for the second counter below hero text. */
    counter2Label: "Years in Brampton", // Odometer uses agent.experienceYears for the number.
    /** @type {string} Placeholder text for the search input in the hero (~4-6 words). */
    searchPlaceholder: "Interested in Brampton Real Estate?",
    /** @type {string} Text for the search button in the hero (~1-3 words). */
    searchButtonText: "Get Started Today"
  },

  /**
   * @description Content for the main "About" section on the home page (`About6.jsx`).
   */
  about: {
    /** @type {string} Main heading for the section (~5-8 words). */
    sectionTitle: "Experience and Dedication in Brampton Real Estate",
    /** @type {string} Detailed introduction to the agent (first person, ~3-5 sentences / 300-500 chars). */
    mainParagraph: "Hi, I'm Mike Henry. For the past 10 years, I've been passionately helping clients navigate the Brampton real estate market. My approach is built on trust, transparency, and a deep commitment to achieving your specific goals, whether you're buying your first home, selling a cherished property, or seeking investment opportunities.",
    /** @type {string} Label for the phone number link. */
    callLabel: "Call Mike",
    /** @type {string} Label for the email link. */
    helpLabel: "Need Help?",
    /** @type {string} Text for the "Learn More" button. */
    moreButtonText: "Learn More About Mike",
    /** @type {string} Heading for the list of services/expertise. */
    expertiseTitle: "My Expertise:",
    /** @type {string} Introductory sentence before the expertise list (~1 sentence / 80-120 chars). */
    expertiseIntro: "I offer specialized real estate services tailored to the Brampton market:",
    /** @type {string[]} List of key service areas (~3-5 items, ~2-4 words each). */
    expertiseItems: [
      "Residential Sales and Leasing",
      "Commercial Real Estate",
      "Property Management",
      "Investment Advisory"
    ],
    /** @type {string} Path for the larger image in this section. Relative to /public. */
    image1Src: "/images/section/section-find-home-2.jpg",
    /** @type {string} Path for the smaller image in this section. Relative to /public. */
    image2Src: "/images/section/section-find-home.jpg",
  },

  /**
   * @description Content for the "Services" section on the home page (`Services6.jsx`).
   */
  services: {
    /** @type {string} Main heading for the section (~4-6 words). */
    sectionTitle: "Client-Focused Real Estate Services",
    /** @type {string} Description elaborating on service philosophy (~2-3 sentences / 150-250 chars). */
    introParagraph: "My focus is on providing exceptional, personalized service to every client. I leverage my 10 years of Brampton market knowledge to ensure you make informed decisions and achieve the best possible outcome.",
    /** @type {string} Text for the button at the bottom of the section. */
    buttonText: "Explore My Services",
    /**
     * @description Details for each service displayed in the slider.
     * @type {Array<{id: number, icon: string, title: string, description: string, imageSrc: string, delay: string}>}
     */
    items: [
      // Guidance: Provide concise title (2-4 words) & description (1 sentence / ~100-150 chars) for ~3 key services.
      { id: 1, icon: "icon-house-2", title: "Residential Sales and Leasing", description: "Assisting clients in buying, selling, and leasing residential properties such as houses, apartments, and condominiums", imageSrc: "/images/section/service-1.jpg", delay: "0.1s" },
      { id: 2, icon: "icon-house-3", title: "Commercial Real Estate Services", description: "Facilitating transactions related to commercial properties such as office buildings, retail spaces, industrial warehouses, land for development", imageSrc: "/images/section/service-2.jpg", delay: "0.2s" },
      { id: 3, icon: "icon-house-4", title: "Property Management", description: "Managing properties on behalf of owners, including tenant screening, rent collection, maintenance, and financial reporting", imageSrc: "/images/section/service-3.jpg", delay: "0.3s" }
    ]
  },

  /**
   * @description Content for the section featuring the agent (formerly "Team" section) (`Team6.jsx`).
   */
  aboutMike: {
    /** @type {string} Main heading for the section. */
    sectionTitle: "About Mike Henry",
    /** @type {string} Short introductory text below the heading (~1 sentence / 50-100 chars). */
    description: "Your trusted guide for buying and selling in Brampton.",
    /** @type {string} Text displayed below the agent's name in the slider card (~5-8 words). */
    agentDescription: "Your Brampton Realtor - 10 Years Experience",
    /** @type {string} Text for the button at the bottom. */
    buttonText: "Learn About My Approach"
    // Note: Team6.jsx component now uses siteContent.agent directly for name/image.
  },

  /**
   * @description Content for the "Success Stories" section (formerly "Projects") (`Projects6.jsx`).
   */
  projects: {
    /** @type {string} Main heading for the section. */
    sectionTitle: "Mike Henry's Client Success Stories",
    /** @type {string} Introductory text (~1-2 sentences / 100-200 chars). */
    introParagraph: "See examples of how I've helped clients achieve their real estate goals in Brampton, delivering exceptional results with personalized service.",
    /** @type {string[]} Placeholder titles for the grid items (~12 items, ~3-6 words each). */
    storyTitles: [
      "Successful Brampton Home Purchase", "Investment Property Secured", "Achieving Top Market Value", "Expert Negotiation Skills", "Client Success Story #5",
      "Seamless Property Sale in Brampton", "Navigating a Complex Transaction", "Relocation Made Easy", "Client Success Story #9", "Client Success Story #10",
      "First-Time Buyer Guidance", "Client Success Story #12"
    ],
    /** @type {string} Text displayed in the "empty" grid item (~1 sentence / 50-100 chars). */
    emptyBoxText: "Let me help you write your own success story.",
    /** @type {string} Text for the button within the "empty" grid item. */
    buttonText: "View Success Stories",
    /** @type {string} The URL path that the success story items link to. */
    linkTarget: "/contact"
  },

  /**
   * @description Content for the "Testimonials" section (`Testimonials6.jsx`).
   */
  testimonials: {
    /** @type {string} Main heading for the section. */
    sectionTitle: "What My Clients Say",
    /** @type {string} Introductory text (~1-2 sentences / 100-200 chars). */
    introParagraph: "Building trust and achieving results for my clients in Brampton is my top priority. Hear directly from those I've had the pleasure of working with.",
    /**
     * @description Content for each testimonial slide.
     * @type {Array<{id: number, description: string, avatar: string, name: string, role: string}>}
     */
    items: [
      // Guidance: Provide 3 genuine-sounding testimonials (~2-4 sentences / 150-300 chars each). Use placeholder avatar paths.
      { id: 1, description: "Mike Henry made buying our first home in Brampton so easy! His knowledge and patience were invaluable. Highly recommended!", avatar: "/images/avatar/testimonials-3.jpg", name: "Sarah & Tom P.", role: "First-Time Homebuyers, Brampton" },
      { id: 2, description: "Selling our house with Mike was a great experience. He got us a fantastic price and handled everything professionally. Thanks, Mike!", avatar: "/images/avatar/testimonials-2.jpg", name: "David R.", role: "Home Seller, Brampton" },
      { id: 3, description: "As an investor, I rely on Mike's expertise of the Brampton market. He consistently finds great opportunities. A true professional.", avatar: "/images/avatar/testimonials-4.jpg", name: "Priya K.", role: "Real Estate Investor" }
    ]
  },

  /**
   * @description Content related to blog sections and components.
   */
  blog: {
    /** @type {string} Heading for the blog section on the home page (`Blogs6.jsx`). */
    sectionTitle: "Mike's Brampton Market Insights",
    /** @type {string} Introductory text for the home page blog section (~1 sentence / 80-120 chars). */
    introParagraph: "Stay informed with the latest news, tips, and trends relevant to the Brampton real estate market.",
    /** @type {string} Title used on the main blog grid page (`Blogs2.jsx`). */
    gridTitle: "Mike Henry's Blog",
    /** @type {string} Author name displayed on blog detail pages (`BlogDetails.jsx`). */
    detailAuthor: "Mike Henry",
    /** @type {string} Heading for the related posts section (`RelatedBlogs.jsx`). */
    relatedTitle: "More Articles by Mike",
    /** @type {string} Heading for the newsletter signup in the blog sidebar (`BlogDetails.jsx`). */
    newsletterTitle: "Join My Newsletter",
    /** @type {string} Text encouraging newsletter signups (~1 sentence / 80-150 chars). */
    newsletterDescription: "Sign up to receive Brampton market insights and tips directly from Mike Henry.",
    /**
     * @description Content for blog post previews/listings. Used by `Blogs6.jsx`, `Blogs2.jsx`, `RelatedBlogs.jsx`.
     * @type {Array<{id: number, imageSrc: string, alt: string, tag: string, date: string, title: string, description: string}>}
     */
    posts: [
      // Guidance: Provide data for ~3 sample posts. Include title (~5-10 words), tag, date, and short description (1 sentence / ~100-150 chars).
      { id: 4, imageSrc: "/images/blog/blog-grid-1.jpg", alt: "Brampton neighbourhood", tag: "Buying Tips", date: "October 15, 2024", title: "5 Tips for First-Time Homebuyers in Brampton", description: "Navigating the Brampton market for the first time? Here are key tips..." },
      { id: 5, imageSrc: "/images/blog/blog-grid-2.jpg", alt: "Condo building", tag: "Market Update", date: "October 10, 2024", title: "Understanding Brampton's Condo Market Trends", description: "A look at recent trends and what they mean for condo buyers and sellers..." },
      { id: 6, imageSrc: "/images/blog/blog-grid-3.jpg", alt: "House exterior", tag: "Selling Tips", date: "October 5, 2024", title: "How to Prepare Your Brampton Home for a Quick Sale", description: "Maximize your home's appeal with these essential preparation steps..." }
    ],
    /**
     * @description Placeholder content for the main body of a blog post on the detail page (`BlogDetails.jsx`).
     * @type {{paragraph1: string, quote: string, quoteAuthor: string, paragraph2: string, paragraph3?: string}}
     */
    detailPlaceholder: {
      // Guidance: Provide generic placeholder text to be replaced with actual blog content.
      paragraph1: "Detailed content about this blog post topic coming soon...",
      quote: "A relevant quote could go here.",
      quoteAuthor: "Source",
      paragraph2: "More details and insights related to the blog post topic.",
      paragraph3: "Further insights and concluding thoughts." // Optional third paragraph
    },
    /** @type {string} Title for the ad in the blog detail sidebar. */
    sidebarAdTitle: "Ready to Buy or Sell in Brampton?",
    /** @type {string} Description for the ad in the blog detail sidebar. */
    sidebarAdText: "Connect with Mike Henry - I know the market inside out and can help you achieve your goals.",
    /** @type {string} Button text for the ad in the blog detail sidebar. */
    sidebarAdButton: "Contact Mike"
  },

  /**
   * @description Content for the FAQ page (`Faqs.jsx`).
   */
  faq: {
    /** @type {string} Main heading for the FAQ page content area. */
    pageTitle: "Frequently Asked Questions",
    /** @type {string} Heading in the final contact box at the bottom of the FAQ list. */
    contactBoxQuestion: "Still have questions?",
    /** @type {string} Text in the final contact box. */
    contactBoxText: "Can't find the answer you're looking for? Please get in touch.",
    /** @type {string} Title for the contact form in the sidebar. */
    sidebarContactTitle: "Contact Mike Henry",
    /**
     * @description Defines the structure and content for the FAQ accordion.
     * @type {Array<{title: string, idPrefix: string, questions: Array<{id: string, question: string, answer: string}>}>}
     */
    categories: [
      // Guidance: Organize Q&A into 2-3 logical categories. Answers should be informative (~2-4 sentences / 150-300 chars).
      {
        title: "About Mike & His Services",
        idPrefix: "faq-serv", // Unique prefix for accordion targeting
        questions: [
          { id: "faq-q1", question: "What areas do you specialize in?", answer: "I specialize in residential real estate throughout Brampton and the surrounding Peel Region. With 10 years focused specifically on this area, I have deep knowledge of its diverse neighbourhoods and market dynamics." },
          { id: "faq-q2", question: "What services do you offer for buyers?", answer: "I provide comprehensive support for buyers, including personalized property searches based on your needs, market analysis, expert negotiation, guidance through inspections and financing, and ensuring a smooth closing process." },
          { id: "faq-q3", question: "How do you help home sellers?", answer: "For sellers, I offer strategic pricing analysis, professional home staging advice, targeted marketing campaigns across multiple platforms, skilled negotiation to get you the best price, and management of the entire selling process from listing to closing." },
          { id: "faq-q4", question: "What makes you different from other realtors?", answer: "My 10 years of dedicated experience in Brampton, combined with a client-first approach built on communication and trust, sets me apart. I'm committed to providing personalized service and achieving outstanding results for every client I work with." }
        ]
      },
      {
        title: "The Process & Fees",
        idPrefix: "faq-proc",
        questions: [
          { id: "faq-q5", question: "What are your commission fees?", answer: "Real estate commissions are typically paid by the seller and can vary depending on the specifics of the transaction. I believe in full transparency and will discuss all fees and services clearly during our initial consultation." },
          { id: "faq-q6", question: "What should I expect during the closing process?", answer: "The closing process involves the final transfer of ownership. Key steps include a final walkthrough of the property, signing legal documents (often with a lawyer), transferring funds, and receiving the keys. I will guide you through each step to ensure everything proceeds smoothly and on schedule." }
        ]
      },
      {
        title: "Getting Started",
        idPrefix: "faq-start",
        questions: [
          { id: "faq-q7", question: "How do I get started working with you?", answer: "The best way to start is by scheduling a free, no-obligation consultation. We can discuss your specific needs, goals, and how I can best assist you in the Brampton real estate market. Use the contact form on this page or call me directly!" }
        ]
      }
    ]
  },

  /**
   * @description Content specific to the main Contact page (`Contact.jsx`, `About.jsx` [contact version]).
   */
  contactPage: {
    /** @type {string} Heading above the main contact form. */
    formTitle: "I Would Love to Hear From You",
    /** @type {string} Text below the contact form heading. */
    formDescription: "Tell me about your goals, and I'll explain how I can help you achieve them.",
    /** @type {string} Text for the submit button on the main contact form. */
    formButtonText: "Send Mike a Message",
    /** @type {string} Heading in the secondary section on the contact page. */
    aboutTitle: "Providing the most suitable and quality real estate guidance in Brampton.",
    /** @type {string} Text below the secondary heading on the contact page. */
    aboutDescription: "Ready to take the next step? Contact me today for a personalized consultation."
  },

  /**
   * @description Content specific to the Home Loan Process page (`Facts.jsx`, `Process.jsx`, `LoanCalculator.jsx`).
   */
  loanProcess: {
    /** @type {string} Heading for the "Facts" section. */
    factsTitle: "I Am Here to Help",
    /** @type {string} First paragraph in the "Facts" section. */
    factsDescription1: "The home loan process can feel overwhelming, but I will help you stay informed throughout, from pre-approval to closing. The first step is consulting with a mortgage specialist. If you don't have one, I partner with some of the best lenders in the industry and would be happy to introduce you.",
    /** @type {string} Second paragraph in the "Facts" section. */
    factsDescription2: "I stand ready to serve you as your dedicated Brampton real estate agent.",
    /** @type {string} Button text in the "Facts" section. */
    factsButtonText: "About Mike Henry",
    /** @type {string} Label for the first counter in the "Facts" section. */
    factsCounter1Label: "Clients Served",
    /** @type {string} Label for the second counter (uses agent.experienceYears for value). */
    factsCounter2Label: "Years Experience",
    /** @type {string} Label for the third counter. */
    factsCounter3Label: "Properties Sold",
    /** @type {string} Heading for the "Process" section. */
    processTitle: "Selling Your Home With Mike Henry",
    /** @type {string} Introductory text for the "Process" section. */
    processDescription: "I'll get to know you to understand your selling goals, and explain the selling process so you know what to expect.",
    /** @type {string} Text used below each of the 3 process steps. */
    processStepDescription: "Your responses will help connect you with the right resources. Shortly after your lender is selected, they’ll contact you to discuss options for financing your future home.",
    /** @type {string} Heading for the "Loan Calculator" section. */
    calculatorTitle: "Calculate Mortgage Payments",
    /** @type {string} Text below the calculator heading. */
    calculatorDescription: "Estimate your payment with this easy-to-use loan calculator. Then, let me connect you with a trusted local lender for pre-qualification."
  },

  /**
   * @description Content for the 404 Not Found page (`not-found.jsx`).
   */
  notFound: {
    /** @type {string} The main message displayed. Can include HTML `<br />`. */
    message: "I searched everywhere but couldn’t find what you’re looking for. Let’s find <br />a better place for you to go."
  },

  /**
   * @description Content for common components used across multiple pages.
   */
  common: {
    /** @type {string} Title for the main Call To Action component (`Cta.jsx`). */
    ctaTitle: "Looking for a Brampton Real Estate Expert?",
    /** @type {string} Description for the main CTA component. */
    ctaDescription: "Whether you're buying or selling, I'll help you achieve the best possible outcome.",
    /** @type {string} Button text for the main CTA component. */
    ctaButtonText: "Contact Mike Today",
    /** @type {string} Title for the Brands/Partners section (`Brands.jsx`). */
    brandsTitle: "Let’s Work Together",
    /** @type {string} Description for the Brands/Partners section. */
    brandsDescription: "Let's discuss how my expertise can help you achieve your real estate goals."
  }
};