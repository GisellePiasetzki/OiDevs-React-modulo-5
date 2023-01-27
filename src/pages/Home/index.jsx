import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {listaDeUsuarios} = location.state;

  function voltarLogin() {
    navigate("/");
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={voltarLogin}>Voltar Login</button>
      <ul>
        {listaDeUsuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.email}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
