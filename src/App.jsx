import Bestseller from "./pages/Bestseller";
import Category from "./pages/Category";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import TrendingProducts from "./pages/TrendingProducts";

const App = () => {
  return <div>
    <Home/>
    <Collections/>
    <TrendingProducts/>
    <Bestseller/>
    <Category/>
  </div>;
}

export default App