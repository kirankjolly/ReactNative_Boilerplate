import * as ActionTypes from '../actions/general/ActionTypes';
let countState = { count:0 };
const counterReducer = (state = countState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNT:
            state = Object.assign({}, state, { data: action.data, count:state.count+1 });
            return state;
        case ActionTypes.DECREMENT_COUNT:
            state = Object.assign({}, state, { data: action.data, count:state.count-1 });
            return state;
        default:
            return state;
    }
};
export default counterReducer;