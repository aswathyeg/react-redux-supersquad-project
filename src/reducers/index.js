import charecters_json from '../data/charecters.json';
function charecters(state=charecters_json,action){ //reducer function
    switch(action.type){
        default:
            return state;
    }

}
export default charecters;