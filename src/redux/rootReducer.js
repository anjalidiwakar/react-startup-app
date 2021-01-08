import { combineReducers } from 'redux'
import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'
import { signOutReducer } from './signOut/signOutReducer'
import addPollOptionReducer from './pollOption/AddPollOptionReducer'

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    signOut: signOutReducer,
    addPollOption: addPollOptionReducer
})