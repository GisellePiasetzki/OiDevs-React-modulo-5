import {useNavigate} from "react-router-dom";

function Home () {
    const navigate = useNavigate();

    function voltarLogin(){
        navigate("/")
    }
    return (
    <>
    <h1>Home</h1>
    <button
    onClick={voltarLogin}
    >
      Voltar Login
    </button>
    </>
    )
}

export default Home;