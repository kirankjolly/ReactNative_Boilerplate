import { combineReducers } from 'redux';
import jsonDataReducer from './jsonDataReducer'; 
import counterReducer from './counterReducer'; 
import serviceFetchItemListReducer from './serviceFetchItemListReducer';
 
// Combine all the reducers
const rootReducer = combineReducers({
    jsonDataReducer,counterReducer,serviceFetchItemListReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;