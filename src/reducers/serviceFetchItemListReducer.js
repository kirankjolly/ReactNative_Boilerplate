import * as ActionTypes from '../actions/general/ActionTypes';
const serviceFetchItemListReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case ActionTypes.MY_REDDIT_DATA_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case ActionTypes.MY_REDDIT_DATA_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case ActionTypes.MY_REDDIT_DATA_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            });
        default:
            return state;
    }
}

export default serviceFetchItemListReducer;