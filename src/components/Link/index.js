import PropTypes from 'prop-types';

const Link = ({texto, link}) => {
    return <a href={link} target="blank" className="senha"> {texto}</a>
}

Link.propTypes = {
    texto: PropTypes.string,
}
Link.defaultProps = {
    texto: "Não lembra da senha?",
    link : "https://www.google.com/"
}

export default Link;