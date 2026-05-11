import {useEffect, useState} from "react";
import ProductList from "./ProductList.jsx";
import getProducts from "./../../Services/api.js";
import Filters from "./Filters.jsx";

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return (
        <div className="w-full px-4 mt-5 lg:pl-80 lg:pr-16">
            <h2>All products</h2>
            <div>
                {!error && <Filters/>}
                {error && <p className="text-red-400">{error}</p>}
                {!error && <ProductList products={products}/>}
            </div>
        </div>
    );
};

export default ProductsContainer;
