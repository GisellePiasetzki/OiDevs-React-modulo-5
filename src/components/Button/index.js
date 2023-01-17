
function Button({redirecionar, texto}){
    return (

       <button
       onClick={redirecionar}
       >{texto}</button>
    

    )
}

export default Button;