import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';

const allReducers = {
    cart: cartReducer
}

//多个reducer时用来合并reducers
const rootReducer = combineReducers(allReducers);

export default rootReducer;
