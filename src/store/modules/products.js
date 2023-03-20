import productsAPI from "@/api/products";

const state = {
    products: []
}

const actions = {
    getProducts(context){
        return new Promise(() => {
            productsAPI.products.then(response => {
                console.log('Список товаров получен', response)
            })
        })
    }
}
export default {
    state, actions
}