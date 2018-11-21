const initialState = {
    update: '',
    delete: '',
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD': {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }
        case 'UPDATE': {
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }
        case 'UPDATECHECKED': {
            return {
                ...state,
                update: action.payload
            }
        }
        case 'DELETE': {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }
        case 'DELETECHECKED': {
            return {
                ...state,
                delete: action.payload
            }
        }
        default:
            return state;
    }
}
