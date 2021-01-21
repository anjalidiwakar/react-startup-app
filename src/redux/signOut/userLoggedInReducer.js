import { USER_LOGGED_IN } from '../actionTypes';

let userSignedIn = false;
if (sessionStorage.getItem("email") !== null) {
  userSignedIn = true;
}
const initialState = {
    state_User_Logged_In : userSignedIn
}
export const userLoggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN :
            return {
                ...state,
                state_User_Logged_In: action.props
            }
            break
        default: return state
    }
}