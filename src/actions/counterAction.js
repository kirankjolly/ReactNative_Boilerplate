import * as ActionTypes from '../actions/general/ActionTypes';

export function incrementCount() {
    return (dispatch) => {
            dispatch({type: ActionTypes.INCREMENT_COUNT}); 
    };
}
export function decrementCount(){
    return (dispatch) => {
            dispatch({type: ActionTypes.DECREMENT_COUNT}); 
    };
}