export default function LightButton(buttonProp) {
    return (
        <a className="button is-light" onClick={buttonProp.callBack}>
            {buttonProp.text}
        </a>
    );
}