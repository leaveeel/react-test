import { creatStore } from 'redux';
import { rootReducer } from './reducers';

let store = creatStore(rootReducer);

export default store;
