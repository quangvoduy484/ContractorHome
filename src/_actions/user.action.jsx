import {userConstants} from '../_Contants/user.contants'
import * as userservice from '../_Services/user.service'

export const Login = (username , password ) =>{
    // login requset , success, falied
  return dispatch => {  dispatch(request({username}));

    userservice.login({username,password})
    .then(result =>
        dispatch(success(result))
    )
    .catch( error => {
        dispatch(failure(error));
    })

    const request = user =>  {return { type: userConstants.LOGIN_REQUEST, user }}
    const success = user => { return{ type: userConstants.LOGIN_SUCCESS, user } }
    const failure = error => { return { type: userConstants.LOGIN_FAILURE, error } }
  }
}