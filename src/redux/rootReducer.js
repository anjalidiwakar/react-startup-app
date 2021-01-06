import { combineReducers } from 'redux'
import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'
import { signOutReducer } from './signOut/signOutReducer'

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    signOut: signOutReducer
})