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
    const [title, setTitle] = useState("Login")

    const [subTitle, setSubTitle] = useState ("")

    const mudarTitulo = () => {
        setTitle("Home")
    }

    const vaParaHome = () => {
        navigate("/home")
    }

    const apareceNome = (event) => {
        setSubTitle(event.target.value)
    }
    return (
  
        <div className="container">
            <Title title={title}/>
            <SubTitle texto={subTitle}/>
            <Input label="Usuário" value={SubTitle} onChange={apareceNome}/>
            <Input label="Senha"/>
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

