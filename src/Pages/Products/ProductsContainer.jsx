import {useEffect, useState} from "react";
import ProductList from "./ProductList.jsx";
import getProducts from "./../../Services/api.js";

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
        <div className="w-full lg:px-16 px-4 mt-5">
            <h2>All products</h2>
            <div className="flex gap-4">
                <div>
                    Filters
                </div>
                {error && <p className="text-red-400">{error}</p>}
                {!error && <ProductList products={products}/>}
            </div>
        </div>
    );
};

export default ProductsContainer;
