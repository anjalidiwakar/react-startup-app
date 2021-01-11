import Poll from "../../models/Poll";
import { useState } from 'react';
import { connect, useSelector } from "react-redux";
import { addPollOption } from '../../../redux/pollOption/AddPollOptionAction'
import AdminPolls from '../adminView_Poll/AdminViewPolls'
import Admin from '../../admin/Admin'
import PrimaryButton from '../../buttons/PrimaryButton'
import LightButton from '../../buttons/LightButton'

function PollOption() {
    return (
        <div className="field">
            <input className="input is-primary"
                placeholder="Provide option here" required />
        </div>
    )
}

function PollForm(props) {
    const [polltitle, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [inputList, setInputList] = useState([{ value: "", count: 0, id:0 }, { value: "", count: 0, id:0 }]);
    const [showAdminPortal, setShowAdminPortal] = useState(false);
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
        setShowAdminPortal(true);
    }
    function cancelHandler() {
        setShowAdminPortal(true);
    }
    const handleAddClick = () => {
        setInputList([...inputList, { value: "", count: 0 }]);
    };
    const handleInputChange = (e, index) => {
        const list = [...inputList];
        list[index].value = e.target.value;
        list[index].id = list.length;
        setInputList(list);
    };
    function CreatePollForm() {
        return (
            <>
                <div className="conatiner is-poll">
                    <div className="box is-brand-box">
                        <h1 className="polltitle is-size-3-tablet is-size-4-mobile has-texted-centered">
                            Create a Poll
                    </h1>
                        <form>
                            <div className="field">
                                <label className="label"> Title </label>
                                <input className="input is-primary" value={polltitle} onChange={(v) => setTitle(v.target.value)} placeholder="Provide polltitle here" required />
                            </div>
                            <div class="field">
                                <label class="label">Description (optional)</label>
                                <textarea className="input is-primary" value={description} onChange={(v) => setDescription(v.target.value)}
                                    placeholder="Provide description" rows="2" class="textarea"></textarea>
                            </div>
                            <div className="field">
                                <label className="label"> Options </label>

                                {inputList.map((x, i) => {
                                    return (
                                        <>
                                            <div className="field">
                                                <input className="input is-primary" value={x.value} onChange={(v) => handleInputChange(v, i)}
                                                    placeholder="Provide option" required />
                                            </div>
                                        </>
                                    );
                                })}<a onClick={handleAddClick}> Add Option </a>
                            </div>
                            <PrimaryButton text={'Submit'} callBack={SubmitPollForm} />
                            <LightButton text={'Cancel'} callBack={cancelHandler} />
                        </form>
                    </div>
                </div>

            </>
        );
    }
    function adminPortalRenderer() {
        return (
            <>
                <Admin />
            </>
        )
    }
    const optionCount = useSelector((state) => state.addPollOption)
    let optionCountList = [];
    optionCountList.length = optionCount.extraOptionCount;
    const AddPollOptionHandler = () => {
        props.addExtraPollingOption();
    }
    if (!showAdminPortal) {
        return (
            <>
                <CreatePollForm />
            </>
        )
    }
    else
        return (
            <>
                <Admin />
            </>
        )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addExtraPollingOption: () => dispatch(addPollOption())
    }
}

export default connect(undefined, mapDispatchToProps)(PollForm)