export function add(product, quantity, unitCost) {
    return {
        type: 'ADD',
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function update(product, quantity, unitCost) {
    return {
        type: 'UPDATE',
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function updateChecked(index) {
    return {
        type: 'UPDATECHECKED',
        payload: index
    }
}

export function del(product) {
    return {
        type: 'DELETE',
        payload: {
            product
        }
    }
}

export function delChecked(index) {
    return {
        type: 'DELETECHECKED',
        payload: index
    }
}
