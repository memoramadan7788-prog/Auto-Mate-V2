import React from 'react';
import Navbar from './components/Navbar';
import Led from "./pages/led";
import carBackground from "./assets/Screenshot 2026-06-02 084443.png"; 
import Home from "./pages/Home.jsx";
import { Route, Routes } from 'react-router-dom';
import Maintenance from './pages/Maintenance.jsx';
import QuickHelp from './pages/QuickHelp.jsx';
import Login from './pages/Login.jsx'; // 1. زودنا استدعاء صفحة اللوجن هنا

const App = () => {
  const appStyle = {
    backgroundImage: `url(${carBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', 
    backgroundColor: 'rgba(10, 15, 30, 0.82)', 
    backgroundBlendMode: 'overlay',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  };

  return (
    <>
      <div style={appStyle}>
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services/led" element={<Led/>}/>
          <Route path="/services/maintenance" element={<Maintenance/>}/>
          <Route path="/services/quick-help" element={<QuickHelp/>}/>
          
          {/* 2. زودنا مسار اللوجن هنا عشان الزرار لما يتداس عليه يفتحها */}
          <Route path="/Login" element={<Login/>}/> 
        </Routes>
      </div>
    </>
  );
};

export default App;