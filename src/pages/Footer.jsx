import React from "react";
import social from "../assets/social.png";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full m-10  flex flex-col items-center  justify-center bg-white p-10">
        <p className="mt-10 text-2xl">
          WE WOULD LOVE TO MEET YOU ON OUR HANDLES
        </p>
        <img src={social} alt="" className="w-[10%]" />
      </div>
      <div className="bg-[#F4FFFD] w-full py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* OUR SERVICES */}
          <div className="space-y-2 border-r border-gray-300 last:border-r-0 pr-4">
            <h3 className="font-semibold text-gray-900 mb-3">OUR SERVICES</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>GOLD RATES</li>
              <li>DIGITAL GOLD</li>
              <li>VARIOUS PAYMENT METHOD</li>
              <li>FINANCING OPTIONS</li>
              <li>GARNET LANEE ASSURANCE</li>
              <li>FRANCHISE ENQUIRY</li>
            </ul>
          </div>

          {/* OUR POLICIES */}
          <div className="space-y-2 border-r border-gray-300 last:border-r-0 pr-4">
            <h3 className="font-semibold text-gray-900 mb-3">OUR POLICIES</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>15-DAY RETURNS</li>
              <li>FREE SHIPPING</li>
              <li>LIFETIME EXCHANGE POLICY</li>
              <li>RETURN AND REFUND POLICY</li>
              <li>TERMS & CONDITIONS ON OFFERS</li>
            </ul>
          </div>

          {/* JEWELLERY KNOWLEDGE */}
          <div className="space-y-2 border-r border-gray-300 last:border-r-0 pr-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              JEWELLERY KNOWLEDGE
            </h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>GOLD GUIDE</li>
              <li>DIAMOND GUIDE</li>
              <li>JEWELLERY GUIDE</li>
              <li>SOLITAIRE DIAMOND GUIDE</li>
              <li>GEMSTONE GUIDE</li>
              <li>CERTIFICATION GUIDE</li>
              <li>JEWELLERY GIFTING</li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div className="space-y-2 border-r border-gray-300 last:border-r-0 pr-4">
            <h3 className="font-semibold text-gray-900 mb-3">ABOUT US</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>OUR VISION</li>
              <li>WHY GARNET</li>
              <li>BLOG</li>
              <li>OUR STORY</li>
              <li>OUR PROCESS</li>
              <li>OUR TEAM</li>
              <li>REVIEWS AND RATINGS</li>
              <li>PRESS RELEASE</li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-2 pr-4">
            <h3 className="font-semibold text-gray-900 mb-3">GET IN TOUCH</h3>
            <p className="text-gray-700 text-sm">
              Toll Free: 1800-202-0270 (Monday to Saturday, 10 AM to 7 PM)
            </p>
            <p className="text-gray-700 text-sm">
              99888-98866 | info@garnetlanee.com
            </p>
            <p className="text-gray-700 text-sm">
              Sco. 19, Sector 82 JLPL Mohali, Airport Road, 160055
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
