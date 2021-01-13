import PrimaryButton from "../../buttons/PrimaryButton";
import '../Modal.css';
import '../../Common.css';
import PollStatusAdmin from "../PollStatusAdmin";

function ClosedPolls() {
    let closedPolls = localStorage.getItem("polls");
    closedPolls !== null ? closedPolls = JSON.parse(closedPolls) : closedPolls = [];
    let applicablePolls = closedPolls.filter(poll => poll.pollStatus === 'Closed')
    if (sessionStorage.getItem("role") === "User")
        applicablePolls = applicablePolls.filter(poll => poll.userWhoAnswered == sessionStorage.getItem("email"));

    if (applicablePolls.length > 0) {
        return (
            <>
                <PollStatusAdmin polls={applicablePolls} />
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