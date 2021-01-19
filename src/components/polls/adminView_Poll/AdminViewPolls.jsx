import React, { useEffect, useState } from 'react';
import '../../Common.css';
import "antd/dist/antd.css";
import PollStatus from '../PollStatus'
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePollAction } from '../../../redux/polls/UpdatePollAction';


function AdminPolls() {
    const dispatch = useDispatch();
    const pollData = useSelector((state) => state.createPoll.state_pollData);
    const [reduxPolls, setReduxPolls] = useState(pollData);
    let storePolls = reduxPolls;
    let activePols = pollData.filter(poll => poll.pollInfo.pollStatus === "Active");
    const [polls, setPollData] = useState(activePols);
    const [updatePollsToRedux, setReduxFlag] = useState(false);
    let closedPoll = pollData;
    const closePoll = (pollIndex, pollId) => {
        closedPoll[pollIndex].pollInfo.pollStatus = 'Closed';
        storePolls[pollId - 1].pollInfo.pollStatus = 'Closed';
        setReduxPolls(storePolls);
        activePols = closedPoll.filter(poll => poll.pollInfo.pollStatus === "Active");
        setPollData(activePols);
        setReduxFlag(!updatePollsToRedux);
    }
    useEffect(() => { dispatch(UpdatePollAction(reduxPolls)) }, [updatePollsToRedux]);
    if (polls.length > 0)
        return (
            <PollStatus pollData={polls} closePollCallBack={closePoll} isActivePoll={true} isUserActivePollRequest={false} />
        )
    else
        return (
            <div>
                No active polls at this moment
            </div>
        )
}

export default AdminPolls