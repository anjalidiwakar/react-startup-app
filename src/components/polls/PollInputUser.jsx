import { Radio, Input } from 'antd';
import { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import { useSelector } from 'react-redux';


function UserPollInput(props) {
    const [selectedOption, setSelectedOption] = useState({});
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const inputChangeHandler = (optionValue, queId) => {

        setSelectedOption({ ...selectedOption, [queId]: optionValue });
    }

    return (
        <>
            {
                props.pollQueData.map((q, queIndex) =>
                    <div key={queIndex}>
                        <h2>{q.que.queTitle}</h2>
                        {
                            <Radio.Group onChange={(e) => inputChangeHandler(e.target.value, queIndex)}
                                name={queIndex} value={selectedOption[queIndex]}>
                                {
                                    q.optionInfo.map((option, opIndex) => {
                                        return (
                                            <Radio key={opIndex} style={radioStyle} value={option.value}>
                                                {option.value}
                                            </Radio>
                                        )
                                    })
                                }
                            </Radio.Group>

                        }
                        <br />
                    </div>
                )
            }
            <br />
            {<PrimaryButton text={"Submit"}
                callBack={() => props.submitChoiceCallBack(selectedOption, props.pollIndex, props.pollId)} />}
        </>

    )
}

export default UserPollInput;