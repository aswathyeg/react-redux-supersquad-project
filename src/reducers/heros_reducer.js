import charecters_json from '../data/charecters.json';
import {ADD_CHARECTER} from '../actions';
import {createCharecter} from './helpers';

function heros(state=[],action){
    switch (action.type){
        case'ADD_CHARECTER':
        let heros=[...state,createCharecter(action.id)];
        return heros;
        default:
            return state;
    }
}
export default heros;