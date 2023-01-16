import './App.css';
import Title from './components/Title/index.js';
import Input from './components/Input/index.js';
import Button from './components/Button/index.js';
import Link from './components/Link/index.js';



function App() {
  return (
    <div className="container">
      <Title title="Login"/>
      <Input label="Usuário"/>
      <Input label="Senha"/>
      <Button link="https://discord.gg/Vpbg8XzE" texto="Login"/>
      <Link link="https://www.google.com/" texto="Esqueceu a senha?" />
    </div>
  );
}

export default App;
