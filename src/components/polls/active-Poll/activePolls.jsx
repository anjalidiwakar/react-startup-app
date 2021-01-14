import PrimaryButton from "../../buttons/PrimaryButton";
import SuccessNotification from '../../feedback/SuccessNotofication'
import { Radio, Input } from 'antd';
import "antd/dist/antd.css";
import { useState } from "react";
import PollStatus from '../PollStatus'
//import '../Modal.css'
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};


function ActivePolls() {
    const [pollOption, setPollOption] = useState();
    let polls = localStorage.getItem("polls");
    polls !== null ? polls = JSON.parse(polls) : polls = [];
    let applicablePolls = polls.filter(poll => poll.userWhoAnswered != sessionStorage.getItem("email"));
    applicablePolls = applicablePolls.filter(poll => poll.pollStatus === 'Active')

    function updateUserChoice(optionId, selectedPollId) {
        polls[selectedPollId].options[optionId].count++;
        polls[selectedPollId].totalVotes++;
        polls[selectedPollId].userWhoAnswered.push(sessionStorage.getItem("email"));
        localStorage.setItem("polls", JSON.stringify(polls));
        applicablePolls = applicablePolls.filter(poll => poll.userWhoAnswered != sessionStorage.getItem("email"));
        SuccessNotification('Response submitted successfully', '');
    }

    const onClickOption = (e) => {
        alert(e.target.value + "" + pollOption)
        setPollOption(e.target.value);
        alert(pollOption)
    }
    if (applicablePolls.length > 0) {
        return (
            <>
                <PollStatus polls={applicablePolls} isUserActivePollRequest={true} isActivePoll={false} submitChoice={updateUserChoice} />
            </>
        );
    }
    else {
        return (
            <>
                <div> No Active polls at this moment. </div>
            </>
        )
    }
}

export default ActivePolls