import React from 'react';
import Navbar from './components/Navbar';
import Led from "./pages/led";

import carBackground from "./assets/Screenshot 2026-06-02 084443.png"; 
import Home from "./pages/Home.jsx";

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
    <div style={appStyle}>
  
      <Navbar /> 

     
      
      <div style={{
        textAlign: 'left',
        padding: '140px 20px 60px 8%', 
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '800', 
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          Drive Smart. <span style={{ color: '#2563eb' }}>Stay Safe.</span>
        </h1>
        
       
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#9ca3af', 
          maxWidth: '650px', 
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Everything you need — Regular maintenance , dashboard warnings & roadside rescue, all in one place.
        </p>
      </div>

     
      <Home />
    </div>
  );
};

export default App;