const initialState = {
    cartProducts: [],

}

export const productToCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            if (action.payload.length === 0) return state

            let counter = 1;
            let tempArr1 = [...state.cartProducts]
            if (!action.payload.counter) action.payload.counter = counter // проверка на наличие каунтера



            tempArr1.map(el => {

                if (el.id === action.payload.id) {//проверка чтобы увеличить каунтер                 
                    el.counter += 1
                }
                else if (!tempArr1.includes(action.payload)) { //проверка, если в массиве елмент как в пайлоаде
                    tempArr1 = [...tempArr1, action.payload]
                }


            })

            if (tempArr1.length === 0) {//если массив пуст
                tempArr1 = [action.payload]
            }
            return {
                ...state,
                cartProducts: tempArr1
            }



        case "CUT_PRODUCT_FROM_CART":

            let tempArr = [...state.cartProducts]
            let arrToRet = []
            tempArr.map(el => {
                if (el.id == action.payload.id) {
                    el.counter--

                }

            })
            arrToRet = tempArr.filter(el => el.counter !== 0)
            return {
                ...state,
                cartProducts: [...arrToRet]
            }


        case "DELETE_PRODUCT_FROM_CART":
            let excecutedArr = state.cartProducts.filter(el => el.id !== action.payload.id)         
            return {
                ...state,
                cartProducts: [...excecutedArr]
            }
        case "DESTROY_CART":

            return {
                ...state,
                cartProducts:[]
            }
        default:
            return state
    }
}