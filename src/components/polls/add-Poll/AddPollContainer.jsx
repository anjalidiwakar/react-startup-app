import Poll from "../../models/Poll";
import { useState } from 'react';
import CreatePollForm from './PollForm'
import SuccessNotification from '../../feedback/SuccessNotofication'

function PollForm(props) {
    const [polltitle, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [inputList, setInputList] = useState([{ value: "", count: 0, id: 0, isOptionSelected: false }, { value: "", count: 0, id: 1, isOptionSelected: false }]);

    function SubmitPollForm() {
        let pollList = localStorage.getItem("polls");
        pollList !== null ? pollList = JSON.parse(pollList) : pollList = [];
        let poll = new Poll();
        poll.setTitle(polltitle);
        poll.setDescription(description);
        poll.setAnswer(inputList);
        poll.setPollId(pollList.length);
        poll.setPollStatus('Active');
        pollList.push(poll);
        localStorage.setItem("polls", JSON.stringify(pollList), false)
        props.close(false);
        SuccessNotification('Poll created!', '');
    }

    const handleAddClick = () => {
        setInputList([...inputList, { value: "", count: 0, isOptionSelected: false }]);
    };
    const handleInputChange = (e, index) => {
        const list = [...inputList];
        list[index].value = e.target.value;
        list[index].id = index;
        setInputList(list);
    };

    
    return (
        <>
            <CreatePollForm title={polltitle} description={description} optionList={inputList}
            addOptionHandler={handleAddClick} inputHandler={handleInputChange} setTitle={setTitle} setDescription={setDescription}
            setInputList={setInputList} submit={SubmitPollForm} />
        </>
    )
}

    export default PollForm