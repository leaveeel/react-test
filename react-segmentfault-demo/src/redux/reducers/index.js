import { combineReducers } from 'redux';
import headReducer from './head-reducer'

const allReducers = {
    head: headReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
