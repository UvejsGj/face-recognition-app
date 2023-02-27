// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/home';
import SignUp from './Pages/SignUp/signup';
    
const App = () => {
    return (
    <div className='App'>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    
      
    

  
      <Navbar/>
      <Logo/>
      <Tilt/>
      <ImageLinkForm onInputChnange={onInputChange} onButtonSubmit={onButtonSubmit} />

    </div>
    );
  
};

export default App