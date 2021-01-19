import { POLL_OPTIONS } from '../actionTypes';

function getOptionsFromLocalStorage() {
    let optionList = localStorage.getItem("optionList");
    optionList !== null ? optionList = JSON.parse(optionList) : optionList = [];
    return optionList;
}
let optionList =  getOptionsFromLocalStorage();
const initialState = {
    state_optionList: optionList
}

const AddPollOptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POLL_OPTIONS: return {
            ...state,
            state_optionList: action.state
        }
            break
        default: return state;
    }
}

export default AddPollOptionReducer;