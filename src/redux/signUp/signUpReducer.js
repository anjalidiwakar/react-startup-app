import { SHOW_SIGNUP_FORM } from '../actionTypes'

const initialState = {
    state_SignUpForm: false
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIGNUP_FORM: return {
            ...state,
            state_SignUpForm: action.state
        }
            break
        default: return state
    }
}

export default signUpReducer