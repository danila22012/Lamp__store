

export const loadCategory = () => {

    return (dispatch) => {
        fetch('https://morgan-shop.herokuapp.com/categories')
            .then((res) => res.json())
            .then(response => dispatch(loadCategoryData(response)))
            .catch(e => console.log(e))
    }


}

const loadCategoryData = (payload) => ({
    type: "LOAD_CATEGORY",
    payload

})

export const loadProducts = () => {
    return (dispatch) => {
        fetch('https://morgan-shop.herokuapp.com/products')
            .then(res => res.json())
            .then(response => dispatch(loadProductsData(response)))
    }
}

const loadProductsData = (payload) => ({
    type: "LOAD_PRODUCTS",
    payload
})

export const sortProductsInterior = (payload) => ({
    type: "SORT_PRODUCTS",
    payload
})

export const addProductToCart = (payload) =>({
    type:"ADD_PRODUCT_TO_CART",
    payload
})

export const deleteProductFromCart = (payload)=>({
    type:"DELETE_PRODUCT_FROM_CART",
    payload
})

export const cutProductFromCart = (payload)=>({
    type:"CUT_PRODUCT_FROM_CART",
    payload
})
export const destroyCart = () =>({
    type:"DESTROY_CART"
})


// registration
let key = 1

export const addUser = (payload) => {
    return {
        type: "ADD_USER_FORM",
        payload: { ...payload, key: key++ }
    }
}
export const handleFormChange = (formData) => ({
    type: "HANDLE_FORM_CHANGE",
    payload: formData,
});