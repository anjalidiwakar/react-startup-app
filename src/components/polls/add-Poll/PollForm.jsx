import PrimaryButton from '../../buttons/PrimaryButton';

function CreatePollForm(props) {
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
                            <input className="input is-primary" value={props.title} onChange={(v) => props.setTitle(v.target.value)} placeholder="Provide polltitle here" required />
                        </div>
                        <div className="field">
                            <label className="label">Description (optional)</label>
                            <textarea className="input is-primary" value={props.description} onChange={(v) => props.setDescription(v.target.value)}
                                placeholder="Provide description" rows="2" className="textarea"></textarea>
                        </div>
                        <div className="field">
                            <label className="label"> Options </label>

                            {props.optionList.map((x, i) => {
                                return (
                                    <>
                                        <div className="field">
                                            <input key={i} className="input is-primary" value={x.value} onChange={(v) => props.inputHandler(v, i)}
                                                placeholder="Provide option" required />
                                        </div>
                                    </>
                                );
                            })}<a onClick={props.addOptionHandler}> Add Option </a>
                        </div>
                        <PrimaryButton text={'Submit'} callBack={props.submit} />
                    </form>
                </div>
            </div>

        </>
    );
}

export default CreatePollForm