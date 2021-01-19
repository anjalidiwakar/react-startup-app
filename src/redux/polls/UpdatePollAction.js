import { UPDATE_POLL } from '../actionTypes';
export const UpdatePollAction = (prop) => {
    return {
        type: UPDATE_POLL,
        props: prop
    }
}