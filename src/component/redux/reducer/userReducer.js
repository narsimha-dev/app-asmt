import {userAction} from '../actions/index'
const initialState = {
    userEmail: 'hruday@gmail.com',
    userPassword: 'hruday123',
    loginSuccess: false
  }
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case `${userAction.LOGIN}`: {
        return {...state, loginSuccess: action.playload}
      }
      case `${userAction.FAILUR}`: {
        return {...state, loginSuccess: action.playload}
      }
    default:
        return state
    }
  }