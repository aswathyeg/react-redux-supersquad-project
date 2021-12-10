import charecters_json from '../data/charecters.json';
import {ADD_CHARECTER,REMOVE_CHARECTER} from '../actions';
import {createCharecter} from './helpers';
function charecters(state=charecters_json,action){ //reducer function
    switch(action.type){
        case'ADD_CHARECTER':
let charecters= state.filter(item=>item.id!==action.id);
return charecters;
       case 'REMOVE_CHARECTER' :
           charecters=[...state,createCharecter(action.id)]
           return charecters;
        default:
            return state;
    }
}
export default charecters;