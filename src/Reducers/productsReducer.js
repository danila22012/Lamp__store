const initialState = {
    products: [],
    sortedProducts:[],
    isLoading: false
}


export const productsReducer = (state = initialState, action) => {


    switch (action.type) {

        case "LOAD_PRODUCTS":
            return {
                ...state,
                products: action.payload.products
            }


        case "SORT_PRODUCTS":
           return{
               ...state,
               sortedProducts: state.products.filter(el=> el.categoryId === action.payload) 
           }

        default:
            return state;
    }
}
