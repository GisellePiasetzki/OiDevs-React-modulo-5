import PropTypes from 'prop-types';

const Input = ({label, hideContent, onChange, cor}) => {
    return (
        <div className="inputs">
        <label style={{color: cor}} for="input">{label}</label>
        <input 
            name="input" 
            type={hideContent ? "password" : "text"} 
            onChange={onChange}/>
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