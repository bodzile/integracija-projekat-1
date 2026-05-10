
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import ProductsPage from "./Pages/Products/ProductsPage.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
