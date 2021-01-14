import React from 'react'

function PollOptions(props) {

    return (
        <>
            {
                props.pollData.options.map(option =>
                    <li><span >{option.value}</span>&nbsp;&nbsp;&nbsp;
                    <a>{option.count != 0 ? ((option.count / props.pollData.totalVotes) * 100).toFixed(2) : 0.00}%</a></li>
                )
            }
        </>
    )
}

export default PollOptions;