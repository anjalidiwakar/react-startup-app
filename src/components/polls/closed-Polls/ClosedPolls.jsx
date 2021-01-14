import '../Modal.css';
import '../../Common.css';
import PollStatusAdmin from "../PollStatus";

function ClosedPolls() {

    let polls = localStorage.getItem("polls");
    polls !== null ? polls = JSON.parse(polls) : polls = [];
    let closedPolls = polls.filter(poll => poll.pollStatus === 'Closed');
    let applicablePolls = closedPolls;
    for (let i = 0; i < closedPolls.length; i++) {
        let submittedPoll = closedPolls[i].userWhoAnswered.find(p => p === sessionStorage.getItem("email"));
        if (submittedPoll === undefined) {
            applicablePolls = applicablePolls.filter(p => p.pollId !== closedPolls[i].pollId);
        }
    }

    if (applicablePolls.length > 0) {
        return (
            <>
                <PollStatusAdmin polls={applicablePolls} isActivePoll={false} isUserActivePollRequest={false} />
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