import { SHOW_SIGNIN_FORM } from '../actionTypes'
export const showSignInForm = (prop) => {
    return {
        type: SHOW_SIGNIN_FORM,
        state: prop
    }
}
