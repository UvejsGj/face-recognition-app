// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/home';
import SignUp from './Pages/SignUp/signup';
import LogIn from './Pages/LogIn/login';
    
const App = () => {
    return (
    <div className='App'>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </div>
    );
  
};

export default App