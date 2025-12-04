import React from "react";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";

const Category = () => {
  const mobileCarousel = [category3, category4, category5, category6];

  return (
    <div className="m-10 bg-[#F8F8F8]">
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold">CATEGORY</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64] font-semibold">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <img
            src={category1}
            alt=""
            className="w-full sm:w-[50%] transition-transform duration-300 ease-out hover:scale-105"
          />
          <img
            src={category2}
            alt=""
            className="w-full sm:w-[50%] transition-transform duration-300 ease-out hover:scale-105"
          />
        </div>

        <div className="mt-10 w-full">
          <div className="hidden sm:flex gap-5 justify-center">
            <img
              src={category3}
              alt=""
              className="w-[30%] transition-transform duration-300 ease-out hover:scale-105"
            />
            <img
              src={category4}
              alt=""
              className="w-[30%] transition-transform duration-300 ease-out hover:scale-105"
            />
            <img
              src={category5}
              alt=""
              className="w-[30%] transition-transform duration-300 ease-out hover:scale-105"
            />
            <img
              src={category6}
              alt=""
              className="w-[30%] transition-transform duration-300 ease-out hover:scale-105"
            />
          </div>

          <div className="flex sm:hidden gap-4 overflow-x-auto scrollbar-hide mt-4 px-2">
            {mobileCarousel.map((cat, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 rounded-lg overflow-hidden bg-gray-100 transition-transform duration-300 ease-out hover:scale-105"
              >
                <img
                  src={cat}
                  alt={`category ${idx + 3}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 text-[#007A64] flex justify-center text-lg cursor-pointer">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
};

export default Category;
