import { Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";

export default function App(){
  return(
    <>
    <div className="Nav-App">
      <Navbar />
    </div>
    <div className="Products-App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
    </>
  )
}