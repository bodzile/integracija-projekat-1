
const ProductCard = ({id, title, description, price}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
};

export default ProductCard;