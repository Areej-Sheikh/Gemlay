import React from "react";
import women from "../assets/women.png";
import men from "../assets/men.png";
import kids from "../assets/kids.png";
import unisex from "../assets/unisex.png";

const ShopByGender = () => {
  const categories = [women, men, kids, unisex];

  return (
    <div
      className="w-full px-4 sm:px-10 py-10"
      style={{
        background:
          "linear-gradient(0deg, rgba(250, 250, 250, 1) 0%, rgba(255, 233, 191, 0.4) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-xl mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold mt-5">SHOP BY GENDER</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64] font-semibold text-center">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6">
        {categories.map((category, index) => (
          <img
            key={index}
            src={category}
            alt={`category ${index + 1}`}
            className="w-64 sm:w-56 lg:w-full h-auto flex-shrink-0 rounded-lg transition-transform duration-300 ease-out hover:scale-105"
          />
        ))}
      </div>

      <div className="mt-14 text-[#007A64] flex justify-center text-lg cursor-pointer">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
};

export default ShopByGender;
