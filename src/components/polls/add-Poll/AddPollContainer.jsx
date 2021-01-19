import Poll from "../../models/Poll";
import { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import CreatePollForm from './PollForm'
import SuccessNotification from '../../feedback/SuccessNotofication'
import { PollDetails } from '../../models/PollQuestionsList'
import { AddPollOptions } from "../../../redux/pollOption/AddPollOptionAction";
import { AddPollAction } from "../../../redux/polls/AddPollAction";


function PollForm(props) {
    let pollOption1Obj = {
        value: "",
        count: 0,
        id: 0,
        isOptionSelected: false
    };
    let pollOption2Obj = {
        value: "",
        count: 0,
        id: 1,
        isOptionSelected: false
    };
    let pollQueObj = {
        queTitle: "",
        questionId: 1,
        totalSubmissions: 0
    };
    let pollObj = {
        pollTitle: "",
        pollStatus: "Active",
        userList: [],
        pollId: 1,
        isSubmitted: false
    }
    let quesInfo = {
        que: pollQueObj,
        optionInfo: [pollOption1Obj, pollOption2Obj]
    };
    for (let i = 0; i < quesInfo.optionInfo.length; i++) {
        quesInfo.optionInfo[i].id = i + 1;
    }
    let poll = {
        pollInfo: pollObj,
        questionInfo: [quesInfo]
    }
    const [pollState, setPollState] = useState(poll);
    const [addPollDataToRedux, setReduxFlag] = useState(false);
    let pollList = localStorage.getItem("polls");
    let pollToLocalStorage = pollState;
    const storePolls = useSelector((state) => state.createPoll.state_pollData);
    const dispatch = useDispatch();


    function SubmitPollForm() {
        pollList !== null ? pollList = JSON.parse(pollList) : pollList = [];
        pollToLocalStorage.pollInfo = pollState.pollInfo;
        pollToLocalStorage.pollInfo.pollId = storePolls.length + 1;
        pollToLocalStorage.quesInfo = pollState.questionInfo;
        pollToLocalStorage.pollInfo.isSubmitted = true;
        pollList.push(pollToLocalStorage);
        props.close(false);
        SuccessNotification('Poll created!', '');
        setReduxFlag(!addPollDataToRedux);
    }
    useEffect(() => { dispatch(AddPollAction(pollToLocalStorage)) }, [addPollDataToRedux]);
    const addOptionHanlder = (queIndex) => {
        let pollData = Object.create(pollState);
        pollData.questionInfo[queIndex].optionInfo.push(pollOption1Obj);
        setPollState(pollData);
    };


    const handleAddQuestion = () => {
        let pollData = Object.create(pollState);
        pollData.questionInfo.push(quesInfo);
        setPollState(pollData);
    }

    const setPollTitle = (pollTitle) => {
        let pollData = Object.create(pollState);
        pollData.pollInfo.pollTitle = pollTitle;
        setPollState(pollData);
    }

    const setPollQuestionTitle = (queIndex, queTitle) => {
        let pollData = Object.create(pollState);
        pollData.questionInfo[queIndex].que.queTitle = queTitle;
        setPollState(pollData);
    }

    const setPollOptionValue = (optionIndex, queIndex, optionValue) => {
        let pollData = Object.create(pollState);
        pollData.questionInfo[queIndex].optionInfo[optionIndex].value = optionValue;
        setPollState(pollData);
    }





    return (
        <>
            <CreatePollForm pollObj={pollState} setPollTitle={setPollTitle} setPollOptionValue={setPollOptionValue}
                setPollQuestionTitle={setPollQuestionTitle}
                addOptionHandler={addOptionHanlder} addQuestionHandler={handleAddQuestion}
                submit={SubmitPollForm} />
        </>
    )
}


export default PollForm