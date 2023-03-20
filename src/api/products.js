import axios from "@/api/axios";

const products = () => {
    return axios.get('/products');
}

export default {
    products
}