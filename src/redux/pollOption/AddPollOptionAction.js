import { POLL_OPTIONS } from '../actionTypes'
export const AddPollOptions = (prop) => {
    return {
        type: POLL_OPTIONS,
        state: prop
    }
}
