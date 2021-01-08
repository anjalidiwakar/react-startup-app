import PrimaryButton from "../../buttons/PrimaryButton";

function ActivePolls() {
    let activePolls = localStorage.getItem("polls");
    activePolls !== null ? activePolls = JSON.parse(activePolls) : activePolls = [];
    let applicablePolls = activePolls.filter(poll => poll.userWhoAnswered != sessionStorage.getItem("email"));
    function updateUserChoice(userChoice) {
        if (userChoice === 'answer1')
            applicablePolls[0].options[0].count++
        else if (userChoice === 'answer2')
            applicablePolls[0].options[1].count++
        else
            applicablePolls[0].options[2].count++
        applicablePolls[0].totalVotes++;
        applicablePolls[0].userWhoAnswered = sessionStorage.getItem("email");
        localStorage.setItem("polls", JSON.stringify(activePolls))
    }
    if (activePolls.length > 0) {
        return (
            <>
                <div className="navigation">
                    <ul>
                        {
                            applicablePolls.map(poll =>
                                <>
                                    <li >{poll.title}</li>
                                    <li><a className="button is-info is-outlined" onClick={() => { updateUserChoice('answer1') }}>{poll.answer1.value}</a></li>
                                    <li><a className="button is-info is-outlined" onClick={() => { updateUserChoice('answer2') }}>{poll.answer2.value}</a></li>
                                    <li><a className="button is-info is-outlined" onClick={() => { updateUserChoice('answer3') }}>{poll.answer3.value}</a></li>

                                </>
                            )
                        }
                    </ul>
                </div>
            </>
        );
    }
    else {
        return (
            <div> No Active polls at this moment. </div>
        )
    }
}

export default ActivePolls