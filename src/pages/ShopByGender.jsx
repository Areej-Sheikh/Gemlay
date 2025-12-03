import React from 'react'
import women from "../assets/women.png"
import men from "../assets/men.png"
import kids from "../assets/kids.png"
import unisex from "../assets/unisex.png"

const ShopByGender = () => {
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(0deg, rgba(250, 250, 250, 1) 0%, rgba(255, 233, 191, 0.4) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold mt-5">SHOP BY GENDER</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64] font-semibold">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>
      <div className="flex flex-row gap-3 ml-10">
        <img
          src={women}
          alt=""
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
        <img
          src={men}
          alt=""
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
        <img
          src={kids}
          alt=""
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
        <img
          src={unisex}
          alt=""
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
      </div>

      <div className="mt-14 text-[#007A64] flex justify-center text-lg">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
}

export default ShopByGender