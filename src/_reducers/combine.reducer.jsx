import { combineReducers } from 'redux';
import {authentication} from '../_Reducers/authentication.reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export const rootReducer = combineReducers({
    authentication,
    toastr: toastrReducer
});

