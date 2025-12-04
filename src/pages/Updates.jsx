import React from "react";
import update1 from "../assets/updates1.png";
import update2 from "../assets/updates2.png";
import update3 from "../assets/updates3.png";

const Updates = () => {
  const updates = [update1, update2, update3, update1];

  return (
    <div className="m-10">
      <div className="flex flex-col items-center justify-center text-xl mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold mt-5">STAY UPDATED WITH US</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64] font-semibold text-center">
          KNOW ABOUT WHAT OTHERS THINK
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 px-4">
          {updates.map((update, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 snap-center">
              <img
                src={update}
                alt={`update ${idx + 1}`}
                className="w-full h-auto rounded-4xl transition-transform duration-300 ease-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-[#007A64] flex justify-center text-lg cursor-pointer">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
};

export default Updates;
