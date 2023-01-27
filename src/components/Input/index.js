import PropTypes from 'prop-types';

const Input = ({label, hideContent, onChange, cor, value}) => {
    return (
        <div className="inputs">
        <label style={{color: cor}} htmlFor="input">{label}</label>
        <input 
            name="input" 
            type={hideContent ? "password" : "text"} 
            onChange={onChange}
            value={value}/>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    cor: PropTypes.string
};

Input.defaultProps = {
    label:"Usuário",
}

export default Input;