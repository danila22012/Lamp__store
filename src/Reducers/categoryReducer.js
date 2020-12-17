const initialState = {
    categoriesCont:[],
    isLoading: false,
}



export const categoryReducer = (state = initialState, action) => {

    
    
    switch (action.type) {
        case 'LOAD_CATEGORY':
            return { ...state,
                categoriesCont:action.payload.categories }

        default:
            return state;
    }
}
