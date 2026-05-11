
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import ProductsPage from "./Pages/Products/ProductsPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
