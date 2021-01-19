import PrimaryButton from '../../buttons/PrimaryButton';
import { Divider } from 'antd';
function CreatePollForm(props) {
    return (
        <>
            <div className="conatiner is-poll">
                <div className="box is-brand-box">
                    <form>
                        {
                            <>
                                <div className="field">
                                    <label className="polltitle is-size-3-tablet is-size-4-mobile has-texted-centered"> Poll Title </label>
                                    <input className="input is-primary" value={props.pollObj.pollInfo.polltitle} 
                                        onChange={(v) => props.setPollTitle(v.target.value)} placeholder="Provide poll title here" required />
                                </div>
                                <Divider />
                                {
                                    props.pollObj.questionInfo.map((value, questionIndex) => {
                                        return (
                                            <div key={questionIndex}>
                                                <div className="field">
                                                    <label className="label">{questionIndex + 1}.&nbsp; Question </label>
                                                    <input className="input is-primary" value={value.que.queTitle} 
                                                        onChange={(v) => props.setPollQuestionTitle(questionIndex, v.target.value)} placeholder="Provide question here" required />
                                                </div>
                                                <div className="field">
                                                    <label className="label"> Options&nbsp;&nbsp; </label>

                                                    {value.optionInfo.map((option, optionIndex) => {
                                                        return (
                                                            <div key={optionIndex}>
                                                                {

                                                                    <div className="field">
                                                                        <input className="input is-primary" value={option.value}
                                                                            onChange={(v) => props.setPollOptionValue(optionIndex,
                                                                            questionIndex, v.target.value)}
                                                                            placeholder="Provide option" required />
                                                                        <hr />
                                                                    </div>

                                                                }
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <a onClick={() => props.addOptionHandler(questionIndex)}> Add Option </a>
                                                <Divider />
                                            </div>
                                        )

                                    })
                                }
                            </>
                        }

                        <a onClick={props.addQuestionHandler}> Add another question </a>
                        <div><PrimaryButton text={'Submit'} callBack={props.submit} /> </div>

                    </form>
                </div>
            </div>

        </>
    );
}

export default CreatePollForm