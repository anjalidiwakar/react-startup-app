import React from 'react';

function AdminPolls() {
    
    let pollData = localStorage.getItem("polls");
    pollData != null ? pollData = JSON.parse(pollData) : pollData = [];
    function closePoll(pollId) {
        pollData.filter(p => p.pollId == pollId)[0].pollStatus = 'Closed';
        // for (let i = 0; i < pollData.length; i++) {
        //     pollData[i].pollId = i;
        // }
        localStorage.setItem("polls", JSON.stringify(pollData));
    }
    if (pollData.length > 0)
        return (
            <>
                <div className="navigation">
                    <ul>
                        {
                            pollData.map(poll =>
                                <>
                                    <li >{poll.polltitle}</li> <a  className="button is-primary" onClick={() => closePoll(poll.pollId)}>Close this poll</a>
                                    {poll.options.map(option =>
                                        <li><a className="button is-info is-outlined">{option.value}</a><a>{option.count != 0 ? ((option.count / poll.totalVotes) * 100).toFixed(2) : 0.00}%</a></li>
                                    )}
                                </>
                            )
                        }
                    </ul>
                </div>
            </>
        )
    else
        return (
            <div>
                No active polls at this moment
            </div>
        )
}

export default AdminPolls