export function login(login) {
    return {
        type: 'LOGIN',
        login: login
    }
}

export function nav(index) {
    return {
        type: 'NAV',
        index: index
    }
}
