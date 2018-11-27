const state={
    login:false,
    nav:0
}

export default function(state = state, action) {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state,
                login: action.login
            }
        }
        case 'NAV': {
            return {
                ...state,
                nav: action.index
            }
        }
        default:
            return state;
    }
}
