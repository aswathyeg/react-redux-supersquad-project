import charecters_json from '../data/charecters.json';

export function createCharecter(id){
    let charecter=charecters_json.find(c=>c.id===id);
    return charecter;
}