
const ProductCard = ({id, imgUrl, category, title, description, price}) => {
    return (
        <a href={"products/product-detail/" + id} className="flex flex-col gap-1">
            <img className="bc-text rounded-md" src={imgUrl} alt="product-image"  />
            <p className="text-accent">{category}</p>
            <p className="font-bold">{title}</p>
            <p>{description}</p>
            <p>${price}</p>
        </a>
    );
};

export default ProductCard;