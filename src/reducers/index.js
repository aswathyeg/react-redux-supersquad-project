import { combineReducers } from 'redux';
import charecters  from './charecters_reducer';
import heros from './heros_reducer';

        const rootReducer= combineReducers({
        charecters,heros
    })


export default rootReducer;