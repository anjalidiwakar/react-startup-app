import { ADD_POLL, UPDATE_POLL } from '../actionTypes';

function getPollFromLocalStorage() {
    let pollList = localStorage.getItem("polls");
    pollList !== null ? pollList = JSON.parse(pollList) : pollList = [];
    return pollList;
}

function addPollToLocalstorage(polls) {
    if(polls.pollInfo.isSubmitted)
    {
        let list = getPollFromLocalStorage();
        list.push(polls);
        localStorage.setItem("polls", JSON.stringify(list), false);
    }
}

function updatePollToLocalStorage(polls) {
    localStorage.setItem("polls", JSON.stringify(polls), false);
}
let pollList = getPollFromLocalStorage();

const initialState = {
    state_pollData: pollList
}

const PollReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POLL:
            addPollToLocalstorage(action.props);
            if (action.props.pollInfo.isSubmitted)
                return {
                    ...state,
                    state_pollData: [...state.state_pollData, action.props]
                }
            else
                return state;
            break;
        case UPDATE_POLL:
            {
                updatePollToLocalStorage(action.props);
                return {
                    ...state,
                    state_pollData: action.props
                }
            }
            break;
        default: return state;
    }
}

export default PollReducer