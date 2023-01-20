import PropTypes from 'prop-types';

const Input = ({label, type, valor, onChange}) => {
    return (
        <div className="inputs">
        <label for="input">{label}</label>
        <input name="input" type={type} onChange={onChange} value={valor}/>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
};

Input.defaultProps = {
    label:"Usuário",
}

export default Input;