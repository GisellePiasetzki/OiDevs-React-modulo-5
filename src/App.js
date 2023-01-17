import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/index.jsx';
import Home from './pages/Home/index.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </Router>


  );
}

export default App;
