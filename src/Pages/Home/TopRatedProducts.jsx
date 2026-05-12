import {useProducts} from "../../Hooks/useProducts.js";
import {useEffect, useState} from "react";
import ProductCard from "../../Components/ProductCard.jsx";

const TopRatedProducts = () => {

    const {getData} = useProducts();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            if (data) setAllProducts(data);
        });
    },[]);

    const findTopProducts = () => {

        const compare = (product1, product2) => {
            return product2.rating - product1.rating;
        };

        return [...allProducts].sort(compare);
    };

    const topRatedProducts = findTopProducts().slice(0, 3);

    return (
        <>
            <h4>These are the top 3 rated products!</h4>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 md:pl-5 md:pr-5 xl:pl-20 xl:pr-20 ">
                {topRatedProducts.map(({id, images, category, title, description, price, rating}) => (
                    <ProductCard
                        key={id}
                        id={id}
                        imgUrl={images[0]}
                        category={category}
                        rating={rating}
                        title={title}
                        description={description}
                        price={price}
                    />
                ))}
            </div>
        </>
    );
};

export default TopRatedProducts;
