import React from 'react';
import { Collapse } from 'antd'
const { Panel } = Collapse;

function PollStatusAdmin(props) {
    return (
        <ul>
            {
                props.polls.map((poll, index) =>
                    <Collapse >
                        <Panel header={poll.polltitle} key={index}>
                            <p>
                                {poll.options.map(option =>
                                    <li><span >{option.value}</span>&nbsp;&nbsp;&nbsp;
                                    <a>{option.count != 0 ? ((option.count / poll.totalVotes) * 100).toFixed(2) : 0.00}%</a></li>
                                )}
                                {poll.pollStatus==='Active' && <a onClick={props.callBack(poll.pollId)}> Close </a>}
                            </p>
                        </Panel>
                    </Collapse>
                )
            }
        </ul>
    );
}

export default PollStatusAdmin