export default function PrimaryButton(buttonProp) {
    return (
        <a className="button is-primary" onClick={buttonProp.callBack}>
            {buttonProp.text}
        </a>
    );
}