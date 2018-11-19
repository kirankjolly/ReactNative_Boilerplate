import * as ActionTypes from '../actions/general/ActionTypes';
let dataState = { data: [], loading:true };
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ActionTypes.DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};
export default dataReducer;