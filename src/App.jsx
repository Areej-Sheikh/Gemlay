import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Copyright from "./components/copyright";
import Bestseller from "./pages/Bestseller";
import Category from "./pages/Category";
import Collections from "./pages/Collections";
import CustomerReviews from "./pages/CustomerReviews";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewsletterSignup from "./pages/NewsletterSignup";
import ShopByGender from "./pages/ShopByGender";
import TrendingProducts from "./pages/TrendingProducts";
import Updates from "./pages/Updates";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <Home />
      <Collections />
      <TrendingProducts />
      <Bestseller />
      <Category />
      <ShopByGender />
      <CustomerReviews />
      <Updates />
      <NewsletterSignup />
      <FAQ />
      <Footer />
      <Copyright />
    </div>
  );
}
