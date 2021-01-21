import { combineReducers } from 'redux'
import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'
import { userLoggedInReducer } from './signOut/userLoggedInReducer'
import AddPollOptionReducer from './pollOption/AddPollOptionReducer'
import CreatePollReducer from './polls/AddUpdatePollsReducer'

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    checkLogin: userLoggedInReducer,
    addPollOption: AddPollOptionReducer,
    createPoll: CreatePollReducer
})