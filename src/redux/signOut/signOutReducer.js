import { SIGN_OUT_USER } from '../actionTypes'
const initialState = {
    state_SignOut: null
}
export const signOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_OUT_USER :
            return {
                ...state,
                state_SignOut: action.state
            }
            break
        default: return state
    }
}