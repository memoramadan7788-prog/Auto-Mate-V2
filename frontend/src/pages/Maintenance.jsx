import React, { useState } from 'react';
// استيراد الصورة من فولدر assets بالاسم الحالي لها
import bgImage from '../assets/Screenshot 2026-06-02 084443.png'; 

const MaintenancePage = () => { 
  const [currentOdometer, setCurrentOdometer] = useState(''); 
  const [lastOilChange, setLastOilChange] = useState('');     
  const [oilInterval, setOilInterval] = useState(10000);       
  const [oilHealth, setOilHealth] = useState(100);

  const calculateHealth = (e) => {
    e.preventDefault();

    const current = parseFloat(currentOdometer);
    const last = parseFloat(lastOilChange);

    if (current && last && current >= last) {
      const distanceTraveled = current - last; 
      const remainingPercentage = Math.max(0, Math.round(((oilInterval - distanceTraveled) / oilInterval) * 100));
      setOilHealth(remainingPercentage);
    } else {
      alert("عذراً، يجب أن تكون قراءة العداد الحالي أكبر من أو تساوي قراءة العداد عند آخر تغيير للزيت!");
    }
  };

  return (
    <div style={{ 
      // backgroundImage: `url(${bgImage})`, // وضع الصورة كخلفية
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white', 
      minHeight: '100vh', 
      padding: '40px 20px', 
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* الـ Container مع تأثير زجاجي شفاف ليظهر جمال الخلفية */}
      <div style={{ 
        width: '100%',
        maxWidth: '450px', 
        backgroundColor: 'rgba(30, 41, 59, 0.85)', // لون داكن شفاف
        backdropFilter: 'blur(8px)', // تأثير الضبابية خلف الفورم
        padding: '25px', 
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#38bdf8' }}> Smart engine oil life calculator</h3>

        <div style={{ marginBottom: '30px', backgroundColor: 'rgba(17, 24, 39, 0.7)', padding: '15px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>🛢️ Engine oil condition:</span>
            <span style={{ fontWeight: 'bold', color: oilHealth > 50 ? '#4ade80' : oilHealth > 20 ? '#eab308' : '#f87171' }}>
              {oilHealth}%
            </span>
          </div>
          <div style={{ width: '100%', backgroundColor: '#374151', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${oilHealth}%`, 
              backgroundColor: oilHealth > 50 ? '#22c55e' : oilHealth > 20 ? '#eab308' : '#ef4444', 
              height: '100%',
              transition: 'width 0.5s ease-in-out'
            }}></div>
          </div>
          
          {oilHealth <= 20 && (
            <div style={{ marginTop: '15px', backgroundColor: '#7f1d1d', padding: '10px', borderRadius: '6px', textAlign: 'center' }}>
              <p style={{ color: '#fca5a5', fontSize: '14px', margin: '0 0 8px 0' }}>⚠️ خطر: صلاحية الزيت انتهت تقريباً!</p>
              <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                🚨 Request for a quick help winch
              </button>
            </div>
          )}
        </div>

        <form onSubmit={calculateHealth}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}> Reading the current car odometer(KM):</label>
            <input 
              type="number" placeholder=" 42500" value={currentOdometer}
              onChange={(e) => setCurrentOdometer(e.target.value)} required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}> Car odometer reading at last oil change(KM):</label>
            <input 
              type="number" placeholder=" 35000" value={lastOilChange}
              onChange={(e) => setLastOilChange(e.target.value)} required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Type of oil used:</label>
            <select 
              value={oilInterval} onChange={(e) => setOilInterval(parseInt(e.target.value))}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white' }}
            >
              <option value={10000}>Oil expires after 10,000 km</option>
              <option value={5000}>Oil expires after 5,000 km</option>
              <option value={3000}>Oil expires after 3,000 km</option>
            </select>
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            🔄 Calculate oil condition update
          </button>
        </form>

      </div>
    </div>
  );
}

export default MaintenancePage;