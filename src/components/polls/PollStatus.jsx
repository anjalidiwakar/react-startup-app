import React from 'react';
import { Collapse } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons';
import PollOptions from './PollOptions'
import UserPollInput from '../polls/PollInputUser'
const { Panel } = Collapse;

function PollStatusAdmin(props) {
    const getCloseIcon = (pollIndex, pollId) => (
        <> Close Poll&nbsp;
            <CloseCircleFilled
                onClick={event => {
                    props.closePollCallBack(pollIndex, pollId);
                }}
            />
        </>
    );

    return (
        <ul>
            {
                props.pollData.map((poll, pollIndex) =>
                    <Collapse key={pollIndex}>
                        <Panel header={poll.pollInfo.pollTitle} extra={props.isActivePoll && getCloseIcon(pollIndex, poll.pollInfo.pollId)}>
                            <p>
                                {!props.isUserActivePollRequest && <PollOptions pollQueData={poll.quesInfo} />}
                                {props.isUserActivePollRequest &&
                                    <UserPollInput pollQueData={poll.quesInfo} pollIndex={pollIndex} pollId={poll.pollInfo.pollId}
                                        submitChoiceCallBack={props.submitChoice} />}
                            </p>

                        </Panel>
                    </Collapse>

                )
            }
        </ul>
    );
}

export default PollStatusAdmin
