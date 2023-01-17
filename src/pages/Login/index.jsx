import './styles.css'
import Title from '../../components/Title/index.js';
import Input from '../../components/Input/index.js';
import Button from '../../components/Button/index.js';
import Link from '../../components/Link/index.js';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function vaParaHome(){
        navigate("/home")
    }

    return (
  
        <div className="container">
            <Title title="Login"/>
            <Input label="Usuário"/>
            <Input label="Senha"/>
            <Button 
            texto="Entrar"
            redirecionar={vaParaHome} 
            />
            <Link link="https://www.google.com/" texto="Esqueceu a senha?" /> 
        </div>
    );
  }
  
  export default Login;

