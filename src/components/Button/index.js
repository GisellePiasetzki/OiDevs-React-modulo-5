import PropTypes from 'prop-types';

const Button = ({aoClicar, texto}) => {
    return (

       <button
       onClick={aoClicar}
       >{texto}</button>
    

    )
}
Button.propTypes = {
    texto: PropTypes.string.isRequired,
    aoClicar: PropTypes.func
}

Button.defaultProps = {
    texto:"Entrar",
}

export default Button;