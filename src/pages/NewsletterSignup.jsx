import React, { useState } from "react";
import female from "../assets/female.svg";
import male from "../assets/male.svg";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    console.log("Selected gender:", gender);
   
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-6 gap-6"
      style={{
        background:
          "linear-gradient(0deg, rgba(250, 250, 250, 1) 0%, rgba(255, 233, 191, 0.4) 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <p className="text-2xl text-[#007A64] font-semibold">
          SIGN UP TO BE A GARNET LANEE INSIDER
        </p>
        <span className="text-sm text-gray-700">
          Get Promotions, inspirations and the latest news about brands and
          jewellery items directly in your inbox
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="text"
          className="border px-4 py-2 flex-1 rounded-xl bg-white"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="text-white px-6 py-2 rounded-xl w-full sm:w-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(1, 36, 51, 1) 0%, rgba(0, 114, 95, 1) 100%)",
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <img src={female} alt="female" className="w-6 h-6" />
          <span>Female</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <img src={male} alt="male" className="w-6 h-6" />
          <span>Male</span>
        </label>
      </div>
    </div>
  );
};

export default NewsletterSignup;
