export const ADD_CHARECTER='ADD_CHARECTER';
export const REMOVE_CHARECTER='REMOVE_CHARECTER';

export function addCharecterById(id){
    const action={
    type:ADD_CHARECTER,
    id
    }
    return action;

}
export function removeCharecterById(id){
    const action={
        type:REMOVE_CHARECTER,
        id
    }
    return action;
}
