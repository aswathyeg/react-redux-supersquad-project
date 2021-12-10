import charecters_json from '../data/charecters.json';
import {ADD_CHARECTER,REMOVE_CHARECTER} from '../actions';
import {createCharecter} from './helpers';

function heroes(state=[],action){
    switch (action.type){
        case ADD_CHARECTER:
        let heroes=[...state,createCharecter(action.id)];
        return heroes;
       
            case REMOVE_CHARECTER:
                heroes= state.filter(item=>item.id!==action.id);
                return heroes;
                default:
            return state;
    }
}
export default heroes;