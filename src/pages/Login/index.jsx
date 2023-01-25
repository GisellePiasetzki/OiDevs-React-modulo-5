import './styles.css'
import Title from '../../components/Title/index.js';
import Input from '../../components/Input/index.js';
import Button from '../../components/Button/index.js';
import Link from '../../components/Link/index.js';
import {useNavigate} from "react-router-dom";
import SubTitle from '../../components/Subtitle';
import {useState} from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("Login");
    const [showError, setShowError] = useState(false);
    const[nomeDeUsuario, setNomeDeUsuario] = useState("");
    const[senha, setSenha] = useState("");
    const [inputColor, setInputColor] = useState("white")

    const [usuarios, setUsuarios] = useState([
        {
          email: "joao@hotmail.com",
          password: "oidevs",
        },
        {
          email: "jady@oi.com",
          password: "oidevs",
        },
      ]);



    const mudarTitulo = () => {
        setTitle("Home")
    }

    const vaParaHome = () => {
        //usuário e senha corresponde a algum existente?

        const usuarioEscolhido = usuarios.find(usuario => usuario.email === nomeDeUsuario && usuario.password === senha)
        console.log(usuarioEscolhido);

        if(usuarioEscolhido){
            navigate("/home");
        } else {
           setShowError(true);
           setInputColor("red")
        }

    }

   
    return (
  
        <div className="container">
            <Title title={title}/>
                {showError ? (
                    <SubTitle texto="Credenciais inválidas"/>
                ) : (
                    <Title title="Ainda não digitou"/>
                )}
            <Input 
                label="Usuário" 
                cor={inputColor}
            />  
            <Input 
                label="Senha"
                cor={inputColor}
                onChange={(e) => setSenha(e.target.value)}
                hideContent 
            />
            <Button 
                texto="Entrar"
                aoClicar={vaParaHome} 
            />
             <Button 
            texto="Trocar título"
            aoClicar={mudarTitulo} 
            />
            <Link /> 
        </div>
    );
}

export default Login;

