import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './features/home/Home';
import { Login } from './features/login/Login';
import { Register } from './features/register/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/register-system/" element={<Register/>}/>
          <Route path="/register-system/register" element={<Register/>}/>
          <Route path="/register-system/login" element={<Login/>}/>
          <Route path="/register-system/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
