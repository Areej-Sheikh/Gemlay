import React, { useState } from "react";
import social from "../assets/social.png";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "OUR SERVICES",
      items: [
        "GOLD RATES",
        "DIGITAL GOLD",
        "VARIOUS PAYMENT METHOD",
        "FINANCING OPTIONS",
        "GARNET LANEE ASSURANCE",
        "FRANCHISE ENQUIRY",
      ],
    },
    {
      title: "OUR POLICIES",
      items: [
        "15-DAY RETURNS",
        "FREE SHIPPING",
        "LIFETIME EXCHANGE POLICY",
        "RETURN AND REFUND POLICY",
        "TERMS & CONDITIONS ON OFFERS",
      ],
    },
    {
      title: "JEWELLERY KNOWLEDGE",
      items: [
        "GOLD GUIDE",
        "DIAMOND GUIDE",
        "JEWELLERY GUIDE",
        "SOLITAIRE DIAMOND GUIDE",
        "GEMSTONE GUIDE",
        "CERTIFICATION GUIDE",
        "JEWELLERY GIFTING",
      ],
    },
    {
      title: "ABOUT US",
      items: [
        "OUR VISION",
        "WHY GARNET",
        "BLOG",
        "OUR STORY",
        "OUR PROCESS",
        "OUR TEAM",
        "REVIEWS AND RATINGS",
        "PRESS RELEASE",
      ],
    },
    {
      title: "GET IN TOUCH",
      items: [
        "Toll Free: 1800-202-0270 (Monday to Saturday, 10 AM to 7 PM)",
        "99888-98866 | info@garnetlanee.com",
        "Sco. 19, Sector 82 JLPL Mohali, Airport Road, 160055",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-white flex flex-col items-center justify-center p-10">
        <p className="mt-10 text-2xl text-center font-semibold">
          WE WOULD LOVE TO MEET YOU ON OUR HANDLES
        </p>
        <img src={social} alt="Social Media" className="w-20 lg:w-32 mt-4" />
      </div>

      <div className="bg-[#F4FFFD] w-full py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="space-y-2 border-b lg:border-b-0 lg:border-r border-gray-300 pr-0 lg:pr-4 pb-4 lg:pb-0"
            >
              <h3
                className="font-semibold text-gray-900 mb-3 flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => toggleDropdown(index)}
              >
                {section.title}
                <span className="lg:hidden">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              <ul
                className={`space-y-1 text-gray-700 text-sm lg:block ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
