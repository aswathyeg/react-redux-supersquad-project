import charecters_json from '../data/charecters.json';
import {ADD_CHARECTER} from '../actions';

function charecters(state=charecters_json,action){ //reducer function
    switch(action.type){
        case'ADD_CHARECTER':
let charecters= state.filter(item=>item.id!==action.id);
return charecters;
        
        default:
            return state;
    }
}
export default charecters;