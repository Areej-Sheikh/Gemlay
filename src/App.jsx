import Bestseller from "./pages/Bestseller";
import Category from "./pages/Category";
import Collections from "./pages/Collections";
import CustomerReviews from "./pages/CustomerReviews";
import Home from "./pages/Home";
import ShopByGender from "./pages/ShopByGender";
import TrendingProducts from "./pages/TrendingProducts";

const App = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Home />
      <Collections />
      <TrendingProducts />
      <Bestseller />
      <Category />
      <ShopByGender />
      <CustomerReviews/>
    </div>
  );
}

export default App