import ProductCard from "../../Components/ProductCard.jsx";

const ProductList = ({products}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {products.map( ({id, title, description, price}) => (
                <div key={id} className="p-5">
                    <ProductCard id={id} title={title} description={description} price={price} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;