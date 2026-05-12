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

    const createProductId = () => {
        let max=-1;
        products.forEach((product) => {
            if(product.id > max) max=product.id;
        })
        return max+1;
    };

    const createProduct =({title, category, description, price, rating}) => {
        let id = createProductId();
        setProducts( old => (
            [...old, {id, title, category, description, price, rating}]
        ));
    };

    const updateProduct = (updatedFields) => {
        setProducts(old =>
            old.map((product) =>
                product.id === updatedFields.id ? { ...product, ...updatedFields } : product
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts(old => old.filter(x => x.id !== id));
    };

    const filterProducts = (filters) => {
        return [];
    };

    const getCategories = () => (Array.from(new Set(products.map((product) => product.category))));

    return (
        <div className="w-full px-4 mt-5 xl:pl-80 xl:pr-16">
            <h2>All products</h2>
            <div>

                {error && <p className="text-red-400">{error}</p>}
                {loading && <p className="text-grey-400">Products are loading...</p>}
                {!error && !loading && <Filters categories={getCategories()} filterProducts={filterProducts} />}
                {!error && !loading && <ProductList products={products} createProduct={createProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} />}
            </div>
        </div>
    );
};

export default ProductsContainer;
