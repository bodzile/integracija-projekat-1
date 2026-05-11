import {useEffect, useState} from "react";
import {useProducts} from "../../Hooks/useProducts.js";
import ProductList from "./ProductList.jsx";
import Filters from "./Filters.jsx";

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const {getData, error, loading} = useProducts();

    useEffect(() => {
        getData().then((products) => {
            if (products) setProducts(products);
        });
    }, []);

    return (
        <div className="w-full px-4 mt-5 lg:pl-80 lg:pr-16">
            <h2>All products</h2>
            <div>

                {error && <p className="text-red-400">{error}</p>}
                {loading && <p className="text-red-400">Products are loading...</p>}
                {!error && !loading && <Filters/>}
                {!error && !loading && <ProductList products={products}/>}
            </div>
        </div>
    );
};

export default ProductsContainer;
