const initialState = {
    name: '',
    email: '',
    password: '',

}
export const handleUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HANDLE_FORM_CHANGE':
            
            return {...state, ...action.payload};
    
        default:
            return state;
    }

}