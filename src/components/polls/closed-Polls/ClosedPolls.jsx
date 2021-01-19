import '../Modal.css';
import '../../Common.css';
import PollStatus from "../PollStatus";
import { useSelector } from 'react-redux';

function ClosedPolls() {

    const filterPolls = (applicablePolls) => {
        for (let i = 0; i < applicablePolls.length; i++) {
            let submittedPoll = applicablePolls[i].pollInfo.userList.find(p => p === sessionStorage.getItem("email"));
            if (submittedPoll === undefined) {
                applicablePolls = applicablePolls.filter(p => p.pollInfo.pollTitle !== applicablePolls[i].pollInfo.pollTitle);
            }
        }
        return applicablePolls;
    }
    const polls = useSelector((state) => state.createPoll.state_pollData);
    let markedClosed = polls.filter(poll => poll.pollInfo.pollStatus === 'Closed');
    let applicablePolls = markedClosed;
    if (sessionStorage.getItem("role") === 'User')
        markedClosed = filterPolls(applicablePolls);

    if (applicablePolls.length > 0) {
        return (
            <>
                <PollStatus pollData={markedClosed} isActivePoll={false} isUserActivePollRequest={false} />
            </>
        );
    }
    else {
        return (
            <>
                <div> No Closed polls at this moment. </div>

            </>
        )
    }
}

export default ClosedPolls