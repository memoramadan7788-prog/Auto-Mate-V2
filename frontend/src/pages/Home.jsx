import React from 'react'
 function Home() {
  return (
<>

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


</>

  )
}
export default Home