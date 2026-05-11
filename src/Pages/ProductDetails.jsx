
import {useParams} from "react-router-dom";

const ProductDetails = () => {

    const {id} = useParams();

    return (
      <>
        <h3>{id}</h3>
      </>
    );
};

export default ProductDetails;