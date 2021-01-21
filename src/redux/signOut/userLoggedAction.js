import { USER_LOGGED_IN } from '../actionTypes'

export const userSignedIn = (prop) => {
    return {
        type : USER_LOGGED_IN,
        props : prop
    }
}