const navState = {
    login: false
}

export default function(state = navState, action) {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state,
                login: action.login
            }
        }
        default:
            return state;
    }
}
