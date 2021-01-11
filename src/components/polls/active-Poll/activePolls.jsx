import PrimaryButton from "../../buttons/PrimaryButton";
import '../Modal.css'

function ActivePolls() {
    let activePolls = localStorage.getItem("polls");
    activePolls !== null ? activePolls = JSON.parse(activePolls) : activePolls = [];
    let applicablePolls = activePolls.filter(poll => poll.userWhoAnswered != sessionStorage.getItem("email"));
    applicablePolls = applicablePolls.filter(poll => poll.pollStatus === 'Active')
    function updateUserChoice(optionId, selectedPollId) {
        activePolls[selectedPollId].options[optionId - 1].count++;
        activePolls[selectedPollId].totalVotes++;
        activePolls[selectedPollId].userWhoAnswered = sessionStorage.getItem("email");
        localStorage.setItem("polls", JSON.stringify(activePolls))
    }
    if (applicablePolls.length > 0) {
        return (
            <>
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className="navigation">
                            <ul>
                                {
                                    applicablePolls.map(poll =>
                                        <li>
                                            <div>{poll.polltitle} </div>
                                            {
                                                poll.options.map(option =>
                                                    <>
                                                        <li><a className="button is-info is-outlined" onClick={() => { updateUserChoice(option.id, poll.pollId) }}>{option.value}</a></li>
                                                    </>
                                                )
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div></div>
            </>
        );
    }
    else {
        return (
            <>
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className="text_position"> No Active polls at this moment. </div>
                    </div></div>
            </>
        )
    }
}

export default ActivePolls