import React from 'react'

const TrendingProducts = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold">TRENDING PRODUCTS</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>

        <div className="text-[#007A64] font-semibold">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts