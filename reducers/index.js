import { combineReducers, createStore } from 'redux';
import songList from './songListReducer';


const defaultReducer = (state = 0, action) => {
    return state;
};



const rootReducer =  combineReducers({
    defaultReducer,
    songList,
});

const store = createStore(rootReducer);

export default store;