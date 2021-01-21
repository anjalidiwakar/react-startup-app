import { Radio, Input } from 'antd';
import { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import { useSelector } from 'react-redux';
import { Component } from 'react';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

class UserPollInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: {},
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(optionValue, queId) {
        this.setState({ selectedOption: { ...this.state.selectedOption, [queId]: optionValue } })
    }

    render() {
        return (
            <>
                {
                    this.props.pollQueData.map((q, queIndex) =>
                        <div key={queIndex}>
                            <h2>{q.que.queTitle}</h2>
                            {
                                <Radio.Group onChange={(e) => this.inputChangeHandler(e.target.value, queIndex)}
                                    name={queIndex} value={this.state.selectedOption[queIndex]}>
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
                    callBack={() => this.props.submitChoiceCallBack(this.state.selectedOption, this.props.pollIndex, this.props.pollId)} />}
            </>

        )
    }
}

export default UserPollInput;