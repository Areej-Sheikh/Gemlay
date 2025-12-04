import logo from "../assets/logo.png";
import navItems from "../assets/navItems.png";
import profile from "../assets/profile.png";

const Nav = () => {
  return (
    <div>
      <div className="bg-[#009278] w-screen h-4.5 flex items-center justify-center max-[1024px]:flex min-[770 px]:hidden">
        <p className="text-[13px] text-white font-light">
          Refer And Earn Extra <strong>Discount. </strong>
          <a href="" className="text-[#531cc6]">
            Click Here
          </a>
        </p>
      </div>

    

      <div className="w-screen flex items-center justify-between drop-shadow-xl h-25 bg-[#FAFEFD] px-4">
        <button className="min-[770px]:hidden">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <img src={logo} alt="Logo" className="w-45.5" />

        <div className="relative min-[770px]:block max-[769px]:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-md p-3 ps-9 border border-default-medium text-heading text-sm rounded-4xl focus:border-brand shadow-xs placeholder:text-body"
            placeholder="Search"
            required
          />
        </div>

        <img
          src={navItems}
          className="h-20.5 min-[770px]:block max-[769px]:hidden"
          alt="navItems"
        />

        <div className="flex gap-3 sm:gap-4 items-center max-[768px]:flex min-[769px]:hidden">
          <i className="ri-heart-3-line text-2xl"></i>
          <i className="ri-shopping-cart-line text-2xl"></i>
          <i className="ri-search-2-line text-2xl"></i>
        </div>

        <div className="w-50 h-15 flex-row items-center justify-center max-[769px]:hidden">
          <div className="flex items-center p-2">
            <img src={profile} alt="" className="w-10.5" />
            <div className="p-2">Username</div>
          </div>

          <div className="h-0.5 w-50 bg-[#007A64] rounded-full mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
