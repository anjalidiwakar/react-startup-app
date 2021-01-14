import { Radio, Input } from 'antd';
import { useState } from 'react';


function UserPollInput(props) {
    const [userInput, setUserInput] = useState();
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const inputChangeHandler = (e) => {
        setUserInput(e.target.value);
        props.submitChoiceCallBack(e.target.value, props.pollData.pollId);
    }

    return (
        props.pollData.options.map((option, index) =>
            <Radio.Group onChange={inputChangeHandler} value={userInput}>
                <Radio style={radioStyle} value={index}>
                    {option.value}
                </Radio>
            </Radio.Group>
        )

    )
}

export default UserPollInput;