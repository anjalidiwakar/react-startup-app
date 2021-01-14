import React, { useState } from 'react';
import '../../Common.css';
import "antd/dist/antd.css";
import PollStatus from '../PollStatus'
function AdminPolls() {
    let pollData = localStorage.getItem("polls"), activePols;
    pollData != null ? pollData = JSON.parse(pollData) : pollData = [];
    activePols = pollData.filter(poll => poll.pollStatus === "Active");
    const [polls, setPollData] = useState(activePols);

    function closePoll(pollId) {
        let closedPoll = pollData.find(poll => poll.pollId === pollId);
        closedPoll.pollStatus = 'Closed';
        pollData[pollId] = closedPoll;
        localStorage.setItem("polls", JSON.stringify(pollData));
        activePols = pollData.filter(poll => poll.pollStatus === "Active");
        setPollData(activePols);
    }
    if (polls.length > 0)
        return (
            <PollStatus polls={polls} closePollCallBack={closePoll} isActivePoll={true} isUserActivePollRequest={false} />
        )
    else
        return (
            <div>
                No active polls at this moment
            </div>
        )
}

export default AdminPolls