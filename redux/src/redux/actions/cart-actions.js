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

export function del(del) {
    return {
        type: 'DELETE',
        payload: del
    }
}

export function delChecked(index) {
    return {
        type: 'DELETECHECKED',
        payload: index
    }
}
