export default function PrimaryButton(buttonProp) {
    return (
        <a className="button is-info" onClick={buttonProp.callBack}>
            {buttonProp.text}
        </a>
    );
}