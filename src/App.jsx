import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/Searchbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar/>
        <SearchBar/>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
