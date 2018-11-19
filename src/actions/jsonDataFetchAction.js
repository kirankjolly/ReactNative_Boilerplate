import * as ActionTypes from '../actions/general/ActionTypes';
import Data from '../assets/instructions.json';
 
export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            const data = Data.instructions;
            dispatch({ type: ActionTypes.DATA_AVAILABLE, data: data });
        }, 2000);
    };
}