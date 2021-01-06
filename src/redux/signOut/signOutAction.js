import { SIGN_OUT_USER } from '../actionTypes'

export const signOutUser = (prop) => {
    return {
        type : SIGN_OUT_USER,
        state : prop
    }
}