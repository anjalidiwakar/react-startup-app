import React from 'react';
import { Collapse } from 'antd'
const { Panel } = Collapse;

function PollStatusUser(props) {
    return (
        <ul>
            {
                props.polls.map((poll, index) =>
                    <Collapse >
                        <Panel header={poll.polltitle} key={index}>
                            <p>
                                {poll.options.map(option =>
                                    <li><a >{option.value}</a></li>
                                )}
                            </p>
                        </Panel>
                    </Collapse>
                )
            }
        </ul>
    );
}

export default PollStatusUser