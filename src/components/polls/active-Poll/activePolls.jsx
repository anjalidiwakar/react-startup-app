import PrimaryButton from "../../buttons/PrimaryButton";
import SuccessNotification from '../../feedback/SuccessNotofication'
import { Radio, Input } from 'antd';
import "antd/dist/antd.css";
import { useState } from "react";
import PollStatusUser from '../PollStatusUser'
//import '../Modal.css'
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};


function ActivePolls() {
    const [pollOption, setPollOption] = useState();
    let activePolls = localStorage.getItem("polls");
    activePolls !== null ? activePolls = JSON.parse(activePolls) : activePolls = [];
    let applicablePolls = activePolls.filter(poll => poll.userWhoAnswered != sessionStorage.getItem("email"));
    alert(applicablePolls.length);
    applicablePolls = applicablePolls.filter(poll => poll.pollStatus === 'Active')
    alert(applicablePolls.length);
    
    function updateUserChoice(optionId, selectedPollId) {
        activePolls[selectedPollId].options[optionId].count++;
        activePolls[selectedPollId].totalVotes++;
        activePolls[selectedPollId].userWhoAnswered.push(sessionStorage.getItem("email"));
        localStorage.setItem("polls", JSON.stringify(activePolls));
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
            <PollStatusUser polls={applicablePolls}/>
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