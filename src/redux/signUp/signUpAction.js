import { SHOW_SIGNUP_FORM } from '../actionTypes'
export const showSignUpForm = (prop) => {
    return {
        type: SHOW_SIGNUP_FORM,
        state: prop
    }
}
