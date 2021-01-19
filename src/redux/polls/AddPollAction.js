import { ADD_POLL } from '../actionTypes';
export const AddPollAction = (prop) => {
    return {
        type: ADD_POLL,
        props: prop
    }
}