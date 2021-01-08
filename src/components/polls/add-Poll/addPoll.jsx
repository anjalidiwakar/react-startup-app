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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [showAdminPortal, setShowAdminPortal] = useState(false);
    function SubmitPollForm() {
        let pollList = localStorage.getItem("polls");
        pollList !== null ? pollList = JSON.parse(pollList) : pollList = [];
        let poll = new Poll();
        poll.setTitle(title);
        poll.setDescription(description);
        poll.setAnswer1(answer1);
        poll.setAnswer2(answer2);
        poll.setAnswer3(answer3);
        poll.setPollId(pollList.length);
        pollList.push(poll);
        localStorage.setItem("polls", JSON.stringify(pollList), false)
        setShowAdminPortal(true);
    }
    function cancelHandler() {
        setShowAdminPortal(true);
    }
    function CreatePollForm() {
        return (
            <>
                <div className="conatiner is-poll">
                    <div className="box is-brand-box">
                        <h1 className="title is-size-3-tablet is-size-4-mobile has-texted-centered">
                            Create a Poll
                    </h1>
                        <form>
                            <div className="field">
                                <label className="label"> Title </label>
                                <input className="input is-primary" value={title} onChange={(v) => setTitle(v.target.value)} placeholder="Provide title here" required />
                            </div>
                            <div class="field">
                                <label class="label">Description (optional)</label>
                                <textarea className="input is-primary" value={description} onChange={(v) => setDescription(v.target.value)}
                                    placeholder="Provide description" rows="2" class="textarea"></textarea>
                            </div>
                            <div className="field">
                                <label className="label"> Options </label>
                                <a onClick={AddPollOptionHandler}> Add Option </a>
                                <div>

                                    <div className="field">
                                        <input className="input is-primary" value={answer1} onChange={(v) => setAnswer1(v.target.value)}
                                            placeholder="Provide first option" required />
                                    </div>
                                    <div className="field">
                                        <input className="input is-primary" value={answer2} onChange={(v) => setAnswer2(v.target.value)}
                                            placeholder="Provide second option" required />
                                    </div>
                                    <div className="field">
                                        <input className="input is-primary" value={answer3} onChange={(v) => setAnswer3(v.target.value)}
                                            placeholder="Provide third option" required />
                                    </div>
                                </div>
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