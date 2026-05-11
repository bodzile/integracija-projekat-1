import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getProducts = () => {
    return axios.get(API_URL)
        .then((response) => {
            return response.data.products;
        });
};

export default getProducts;
