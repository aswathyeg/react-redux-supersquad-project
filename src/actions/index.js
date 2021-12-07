export const ADD_CHARECTER='ADD_CHARECTER';
export function addCharecterById(id){
    const action={
    type:ADD_CHARECTER,
    id
    }
    return action;

}