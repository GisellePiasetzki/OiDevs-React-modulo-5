
function Button({link, texto}){
    return (

        <a href={link} target="blank">
            <button>{texto}</button>
        </a>
    

    )
}

export default Button;