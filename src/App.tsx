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
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/success" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
