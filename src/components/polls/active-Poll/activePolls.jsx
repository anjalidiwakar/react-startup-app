import SuccessNotification from '../../feedback/SuccessNotofication';
import { connect, useDispatch, useSelector } from 'react-redux';
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import PollStatus from '../PollStatus';
import { UpdatePollAction } from '../../../redux/polls/UpdatePollAction';
import { Component } from 'react';


class ActivePolls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: this.props.polls.state_pollData,
            reduxPolls: this.props.polls.state_pollData,
            updatePollsToRedux: false,
            userPolls: []
        };
        this.storePolls = this.state.reduxPolls;
        let activePolls = this.state.polls.filter(poll => poll.pollInfo.pollStatus === 'Active');
        this.applicablePolls = activePolls;
        this.filterAnsweredPolls = this.filterAnsweredPolls.bind(this)
        this.applicablePolls = this.filterAnsweredPolls(activePolls);
    }

    componentDidMount() {
        this.setState({ userPolls: this.applicablePolls });
    }

    filterAnsweredPolls(activePolls) {
        for (let i = 0; i < activePolls.length; i++) {
            let submittedPoll = activePolls[i].pollInfo.userList.find(u => u === sessionStorage.getItem("email")) //activePolls[i].userWhoAnswered.find(p => p === sessionStorage.getItem("email"));
            if (submittedPoll !== undefined) {
                this.applicablePolls = this.applicablePolls.filter(p => p.pollInfo.pollTitle !== activePolls[i].pollInfo.pollTitle);
            }
        }
        return this.applicablePolls;
    }

    updateUserChoice = (selectedOptions, pollIndex, pollId) => {
        for (const [key, value] of Object.entries(selectedOptions)) {
            let i = 0;
            for (i; i < this.applicablePolls[pollIndex].quesInfo[key].optionInfo.length; i++) {
                if (this.applicablePolls[pollIndex].quesInfo[key].optionInfo[i].value === value) {
                    this.applicablePolls[pollIndex].quesInfo[key].optionInfo[i].count++;
                    break;
                }
            }
            this.applicablePolls[pollIndex].quesInfo[key].que.totalSubmissions++;
        }
        this.applicablePolls[pollIndex].pollInfo.userList.push(sessionStorage.getItem("email"));
        this.storePolls[pollId - 1].pollInfo.userList.push(sessionStorage.getItem("email"));
        this.setState({ reduxPolls: this.storePolls });
        this.setState({ userPolls: this.filterAnsweredPolls(this.applicablePolls) });
        this.setState({ updatePollsToRedux: !this.state.updatePollsToRedux });
        this.props.update(this.state.reduxPolls);
    }

    render() {
        if (this.applicablePolls.length > 0) {
            return (
                <>
                    <PollStatus pollData={this.state.userPolls} isUserActivePollRequest={true} isActivePoll={false} submitChoice={this.updateUserChoice} />
                </>
            );
        }
        else {
            return (
                <>
                    <div> No Active polls at this moment. </div>
                </>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        polls: state.createPoll,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        update: (props) => dispatch(UpdatePollAction(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePolls) 
