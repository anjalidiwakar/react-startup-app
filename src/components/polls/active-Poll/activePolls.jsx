import SuccessNotification from '../../feedback/SuccessNotofication';
import { useDispatch, useSelector } from 'react-redux';
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import PollStatus from '../PollStatus';
import { UpdatePollAction } from '../../../redux/polls/UpdatePollAction';


function ActivePolls() {
    const [pollOption, setPollOption] = useState();
    const dispatch = useDispatch();
    // let polls = localStorage.getItem("polls");
    // polls !== null ? polls = JSON.parse(polls) : polls = [];
    const polls = useSelector((state) => state.createPoll.state_pollData);
    const [reduxPolls, setReduxPolls]  = useState(polls);
    let storePolls = reduxPolls;
    const[updatePollsToRedux, setReduxFlag]= useState(false);
    let activePolls = polls.filter(poll => poll.pollInfo.pollStatus=== 'Active');
    let applicablePolls = activePolls;
    
    applicablePolls =  filterAnsweredPolls(activePolls);
    
    //let reduxPolls = [...applicablePolls];
    const [userPolls, setUserPolls] = useState(applicablePolls);
    function filterAnsweredPolls(activePolls) {
        for (let i = 0; i < activePolls.length; i++) {
            let submittedPoll = activePolls[i].pollInfo.userList.find(u => u === sessionStorage.getItem("email")) //activePolls[i].userWhoAnswered.find(p => p === sessionStorage.getItem("email"));
            if (submittedPoll !== undefined) {
                applicablePolls = applicablePolls.filter(p => p.pollInfo.pollTitle !== activePolls[i].pollInfo.pollTitle);
            }
        }
        return applicablePolls;
    }
    const  updateUserChoice = (selectedOptions,pollIndex, pollId) =>{
        for (const [key, value] of Object.entries(selectedOptions)) {
            let i=0;
            for(i;i<applicablePolls[pollIndex].quesInfo[key].optionInfo.length;i++)
            {
                if(applicablePolls[pollIndex].quesInfo[key].optionInfo[i].value===value)
                {
                    applicablePolls[pollIndex].quesInfo[key].optionInfo[i].count++;
                    break;
                }
            }
            applicablePolls[pollIndex].quesInfo[key].que.totalSubmissions++;
          }
          applicablePolls[pollIndex].pollInfo.userList.push(sessionStorage.getItem("email"));
          storePolls[pollId-1].pollInfo.userList.push(sessionStorage.getItem("email"));
          setReduxPolls(storePolls);
          setUserPolls(filterAnsweredPolls(applicablePolls));
          setReduxFlag(!updatePollsToRedux);
        // console.log(selectedOptions[0]);
        // let submittedPoll = applicablePolls.find(p=> p.pollId===pollId);
        // for(let i=0;i<submittedPoll.questionList.lenght;i++)
        // {
        //     applicablePolls[pollId].questionList[i].totalVotes++;
        // }

        // polls[selectedPollId].options[optionId].count++;
        // polls[selectedPollId].totalVotes++;
        // polls[selectedPollId].userWhoAnswered.push(sessionStorage.getItem("email"));
        // localStorage.setItem("polls", JSON.stringify(polls));

        // applicablePolls = polls.filter(poll => poll.pollStatus === 'Active');
        // applicablePolls =  filterAnsweredPolls(applicablePolls);
        // setUserPolls(applicablePolls);
        // SuccessNotification('Response submitted successfully', '');
    }
    useEffect(()=> {dispatch(UpdatePollAction(reduxPolls))}, [updatePollsToRedux])

    if (applicablePolls.length > 0) {
        return (
            <>
                <PollStatus pollData={userPolls} isUserActivePollRequest={true} isActivePoll={false} submitChoice={updateUserChoice} />
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

export default ActivePolls