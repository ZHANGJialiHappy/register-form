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
          <Route path="/register-form/register" element={<Register/>}/>
          <Route path="/register-form/login" element={<Login/>}/>
          <Route path="/register-form/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
