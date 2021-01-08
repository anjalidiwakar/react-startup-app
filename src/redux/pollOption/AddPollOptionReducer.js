import { ADD_POLL_OPTION } from '../actionTypes';
const initialState = {
    extraOptionCount: 0
}

const addPollOptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POLL_OPTION: return {
            ...state,
            extraOptionCount: state.extraOptionCount + 1
        }
            break
        default: return state;
    }
}

export default addPollOptionReducer;