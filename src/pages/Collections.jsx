import coll1 from "../assets/collection1.png";
import coll2 from "../assets/collection2.png";
import coll3 from "../assets/collection3.png";
import coll4 from "../assets/collection4.png";
import coll5 from "../assets/collection5.png";
import coll6 from "../assets/collection6.png";

const Collections = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 bg-[#F8F8F8] px-4 sm:px-10 py-10">
      <div className="flex flex-col items-center justify-center text-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-0.5 w-16 sm:w-20 bg-[#007A64]" />
          <div className="font-semibold text-base sm:text-lg md:text-xl">
            COLLECTIONS
          </div>
          <div className="h-0.5 w-16 sm:w-20 bg-[#007A64]" />
        </div>

        <div className="text-[#007A64] font-semibold text-sm sm:text-base md:text-lg text-center">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>

      <div className="mt-6 w-full">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:hidden px-2">
          {[coll1, coll2, coll3, coll4, coll5, coll6].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`collection ${idx + 1}`}
              className="flex-shrink-0 w-64 h-auto rounded-lg"
            />
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-4 w-full max-w-[1200px]">
          <img
            src={coll1}
            alt="collection 1"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={coll2}
            alt="collection 2"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={coll3}
            alt="collection 3"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={coll4}
            alt="collection 4"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={coll5}
            alt="collection 5"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={coll6}
            alt="collection 6"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-14 text-[#007A64] flex items-center gap-2 text-base sm:text-lg cursor-pointer hover:underline">
        DISCOVER ALL <i className="ri-arrow-right-s-fill text-xl"></i>
      </div>
    </div>
  );
};

export default Collections;
