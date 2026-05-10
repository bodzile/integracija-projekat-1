
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
