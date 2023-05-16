const initialState = {
    cart: []
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "CARTED_PRODUCT":
            return {
                cart: [...state.cart, action.product]
            }
            default:
                return state
    }
}


export default cartReducer;