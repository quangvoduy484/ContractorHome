import {userConstants} from '../_contants/user.contants'

let user = JSON.parse(localStorage.getItem('user'));
 const initialState = user ? { loggedIn: true, user } : {};

 export const authentication = (state = initialState ,action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:{
                return {
                    ...state,
                    loggingIn: true,
                    user: action.user
                  };
            }
        case userConstants.LOGIN_SUCCESS:{
          return {
            ...state,
            loggedIn: true,
            user: action.user
          };
        }
        case userConstants.LOGIN_FAILURE:
          return {};
        case userConstants.LOGOUT:
          return {};
        default:
          return state
      }
 }