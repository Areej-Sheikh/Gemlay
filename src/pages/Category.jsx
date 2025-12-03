import React from "react";
import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import category5 from "../assets/category5.png"
import category6 from "../assets/category6.png"

const Category = () => {
  return (
    <div className="m-10">
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
        <div className="flex gap-6">
            <img src={category1} alt=""  className="w-[50%] transition-transform duration-300 ease-out hover:scale-105"/>
            <img src={category2} alt=""  className="w-[50%] transition-transform duration-300 ease-out hover:scale-105"/>
        </div>
        <div className="flex  mt-10 ml-4 items-center justify-center gap-5">
            <img src={category3} alt="" className="w-[30%] transition-transform duration-300 ease-out hover:scale-105"  />
            <img src={category4} alt="" className="w-[30%] transition-transform duration-300 ease-out hover:scale-105" />
            <img src={category5} alt="" className="w-[30%] transition-transform duration-300 ease-out hover:scale-105" />
            <img src={category6} alt="" className="w-[30%] transition-transform duration-300 ease-out hover:scale-105" />
        </div>
      </div>
      <div className="mt-15 text-[#007A64] flex justify-center text-lg">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
};

export default Category;
