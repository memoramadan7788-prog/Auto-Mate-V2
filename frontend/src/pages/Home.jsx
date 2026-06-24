import React from 'react';
import CardHome from '../components/cardHome';

// 👈 استدعاء صور الكروت بالأسماء والامتدادات الصحيحة تماماً من فولدر assets
import ledDashboardImg from '../assets/Gemini_Generated_Image_d6a7ced6a7ced6a7.png'; 
import quickHelpImg from '../assets/Gemini_Generated_Image_69twz769twz769tw.png'; 

function Home() {
  const servicesData = [
    {
      id: 1,
      title: "Trunk LED",
      description: "Indicates that the trunk is open or not securely closed. Driving with the trunk open may create a safety hazard and increase the risk of losing cargo. Make sure the trunk is fully closed before continuing your journey.",
      statusColor: "#ff2a2a", 
      image: "https://via.placeholder.com/340x180/ff0000/ffffff?text=Trunk+Warning" 
    },
    {
      id: 2,
      title: "Interior LED Lights",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      statusColor: "#d4af37", 
      image: ledDashboardImg // 👈 ربط الصورة الجديدة للكارت الثاني
    },
    {
      id: 3, 
      title: "Roadside Rescue",
      description: "Fast, automated roadside assistance whenever and wherever you need it.",
      statusColor: "#00ff66", 
      image: quickHelpImg // 👈 ربط الصورة الجديدة للكارت الثالث
    }
  ];

  return (
    <>
      <div style={{
        padding: '140px 20px 40px 20px', 
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto 40px auto', 
          textAlign: 'left',
          paddingLeft: '10px' 
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
            lineHeight: '1.6'
          }}>
            Everything you need — Regular maintenance, dashboard warnings & roadside rescue, all in one place.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '30px', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          maxWidth: '1100px', 
          margin: '0 auto', 
          width: '100%'
        }}>
          {servicesData.map((service) => (
            <CardHome 
              key={service.id}
              title={service.title}
              description={service.description}
              statusColor={service.statusColor}
              image={service.image}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;