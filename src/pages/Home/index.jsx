import {useNavigate} from "react-router-dom";

const Home = () => {
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