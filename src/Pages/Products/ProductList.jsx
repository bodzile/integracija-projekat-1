import ProductCard from "../../Components/ProductCard.jsx";

const ProductList = ({products}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {products.map( ({id, title, description, price, images, category}) => (
                <div key={id} className="p-5">
                    <ProductCard id={id} category={category} title={title} description={description} price={price} imgUrl={images[0]} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;