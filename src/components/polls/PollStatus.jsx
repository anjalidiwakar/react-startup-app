import React from 'react';
import { Collapse } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons';
import PollOptions from './PollOptions'
import UserPollInput from '../polls/PollInputUser'
const { Panel } = Collapse;

function PollStatusAdmin(props) {
    const getCloseIcon = (pollId) => (
        <> Close poll &nbsp;
            <CloseCircleFilled
                onClick={event => {
                    props.closePollCallBack(pollId);
                }}
            />
        </>
    );

    return (
        <ul>
            {
                props.polls.map((poll, index) =>
                    <Collapse >
                        <Panel header={poll.polltitle} key={index} extra={props.isActivePoll && getCloseIcon(poll.pollId)}>
                            <p>
                                {!props.isUserActivePollRequest && <PollOptions pollData={poll} />}
                                {props.isUserActivePollRequest && <UserPollInput pollData={poll} submitChoiceCallBack={props.submitChoice} />}
                            </p>

                        </Panel>
                    </Collapse>

                )
            }
        </ul>
    );
}

export default PollStatusAdmin
