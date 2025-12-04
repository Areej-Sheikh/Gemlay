import React from "react";

const FAQ = () => {
  const faqItems = [
    "Buy Gold Jewellery Online in India",
    "Variety of options",
    "Pay as per your convenience",
    "Customize as you like",
    "Crowd-free Buying Diamond Jewellery Online in India",
  ];

  return (
    <div className="bg-[#F9F9F9] m-4 sm:m-10 p-6 sm:p-10 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <i className="ri-arrow-right-s-fill text-xl text-gray-600"></i>
              <span className="border-b border-gray-300 pb-1 text-gray-800">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-[#007A64]">
            Buy Gold Jewellery Online in India
          </h2>
          <p className="leading-relaxed">
            Buying Jewellery Online in India is becoming common these days.
            Though many people are still sceptical of doing so. Yet, the trend
            of shopping online for anything and everything is surging
            exponentially. Garnet Lanee is one among the many reputed brands
            that deliver all kinds of diamond and gold jewellery direct to your
            home – Rings, Necklaces, Bracelets, Pendants, et al.
          </p>
          <p className="leading-relaxed">
            History tells the folktales of the importance of jewellery in India.
            Running down through decades, trends and styles may have changed,
            but emotions attached emanates ditto affection and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
