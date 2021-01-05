import { combineReducers } from 'redux'
import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})