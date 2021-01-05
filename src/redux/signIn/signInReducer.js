import { SHOW_SIGNIN_FORM } from '../actionTypes';
const initialState = {
    state_SignInForm: false
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIGNIN_FORM: return {
            ...state,
            state_SignInForm: action.state
        }
            break
        default: return state;
    }
}

export default signInReducer;