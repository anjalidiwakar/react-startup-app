import PrimaryButton from "../../buttons/PrimaryButton";
import '../Modal.css'

function ClosedPolls() {
    let closedPolls = localStorage.getItem("polls");
    closedPolls !== null ? closedPolls = JSON.parse(closedPolls) : closedPolls = [];
    let applicablePolls = closedPolls.filter(poll => poll.pollStatus === 'Closed')
    if (sessionStorage.getItem("role") === "User")
        applicablePolls = applicablePolls.filter(poll => poll.userWhoAnswered == sessionStorage.getItem("email"));


    if (applicablePolls.length > 0) {
        return (
            <>
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className="navigation">
                            <ul>
                                {
                                    applicablePolls.map(poll =>
                                        <>
                                            <li >{poll.polltitle}</li>
                                            {poll.options.map(option =>
                                                <li><a className="button is-info">{option.value}</a><a>{option.count != 0 ? ((option.count / poll.totalVotes) * 100).toFixed(2) : 0.00}%</a></li>
                                            )}
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div> No Closed polls at this moment. </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClosedPolls