export default function PrimaryButton(buttonProp) {
    return (
        <div>
        <a data-testid="primary_button" className="button is-info" onClick={buttonProp.callBack}>
            {buttonProp.text}
        </a>
        </div>
    );
}