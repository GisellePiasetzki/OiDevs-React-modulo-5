
function Input(props){
    return (
        <div className="inputs">
        <label for="input">{props.label}</label>
        <input name="input"/>
        </div>
    )
}

export default Input;