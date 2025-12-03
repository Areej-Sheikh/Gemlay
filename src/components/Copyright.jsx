import React from "react";

const Copyright = () => {
  return (
    <div className="bg-[#009278] w-full flex items-center justify-center py-2">
      <p className="text-[13px] text-white font-light text-center">
        © {new Date().getFullYear()} Areej Fatima Sheikh. All rights reserved.
        
      </p>
    </div>
  );
};

export default Copyright;
