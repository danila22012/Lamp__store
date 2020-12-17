import { combineReducers } from 'redux'

import { categoryReducer } from "./Reducers/categoryReducer";
import { productsReducer } from "./Reducers/productsReducer";
import { productToCartReducer } from "./Reducers/productToCartReducer";
import { addUserReducer } from "./Reducers/addUserReducer";
import { handleUserReducer } from "./Reducers/handleUserReducer";



export const rootReducer = combineReducers({
    categoryReducer,
    productsReducer,
    productToCartReducer,
    addUserReducer,
    handleUserReducer
})