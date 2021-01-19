import { combineReducers } from 'redux'
import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'
import { signOutReducer } from './signOut/signOutReducer'
import AddPollOptionReducer from './pollOption/AddPollOptionReducer'
import CreatePollReducer from './polls/AddUpdatePollsReducer'

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    signOut: signOutReducer,
    addPollOption: AddPollOptionReducer,
    createPoll: CreatePollReducer
})