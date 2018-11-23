//store储存的数据
const initialState = {
    update: '',
    delete: [],
    cart: require('../../json/cart.json').cart
}

//通过action.type判断调用方法
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
                //对下标进行比较、更新
                cart: state.cart.map((item, index)=> index === state.update ? action.payload : item)
            }
        }
        case 'UPDATECHECKED': {
            return {
                ...state,
                update: action.payload
            }
        }
        //delete方法
        case 'DELETE': {
            //定义cart，值为state.cart经过filter筛选出的数组
            let cart = state.cart.filter(function(item, index){
                //定义空数组，用于存放遍历布尔值
                let contrast = [];
                //遍历action.payload数组，并与state.cart的index进行比较，传入储存数组contrast
                action.payload.forEach(idx => contrast.push(index !== idx))
                //将储存数组内元素进行比较，全为真返回true
                return contrast.every(el => el === true)
            })
            return {
                ...state,
                cart: cart
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
