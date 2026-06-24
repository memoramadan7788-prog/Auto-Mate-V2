import React from 'react';

const CardHome = ({ image, title, description, statusColor }) => {
  // لون التوهج اللبني الموحد لكل الكروت
  const unifiedGlowColor = '#00f0ff'; 

  const styles = {
    card: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: `1px solid rgba(0, 240, 255, 0.3)`, 
      borderRadius: '20px',
      padding: '24px',
      maxWidth: '340px',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: `0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px 1px rgba(0, 240, 255, 0.25)`,
      transition: 'all 0.3s ease-in-out', 
    },
    // إطار حاوية الصورة الداكن المتناسق مع ألوان النيون
    imageContainer: {
      width: '100%',
      height: '180px',
      background: '#0a0f1d', 
      borderRadius: '12px',
      overflow: 'hidden', // 👈 دي مهمة جداً عشان لما نعمل زوم، أطراف الصورة المزيادة متطلعش بره المربع
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      border: '1px solid rgba(0, 240, 255, 0.15)', 
    },
    // 🛠️ تم تعديل الستايل هنا لعمل زوم (تكبير) للصورة بشكل متناسق واحترافي
    imageStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'contain', 
      padding: '4px',       
      transform: 'scale(1.25)', // 👈 الزوم بمقدار 25% لتكبير اللوجوهات والصور وجعلها أقرب للعين
      transition: 'transform 0.3s ease', // حركة ناعمة ومريحة للعين عند التحميل
    },
    titleStyle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      marginBottom: '12px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    descriptionStyle: {
      fontSize: '0.9rem',
      color: '#b3b3b3',
      lineHeight: '1.6',
      marginBottom: '20px',
      flexGrow: 1,
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    statusDot: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: statusColor || '#ff2a2a', 
      boxShadow: `0 0 12px ${statusColor || '#ff2a2a'}`, 
    }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px 3px rgba(0, 240, 255, 0.45)`;
        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px 1px rgba(0, 240, 255, 0.25)`;
        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
      }}
    >
      <div style={styles.imageContainer}>
        {image ? (
          <img src={image} alt={title} style={styles.imageStyle} />
        ) : (
          <div style={{ color: '#555' }}>No Image</div>
        )}
      </div>
      <h3 style={styles.titleStyle}>{title}</h3>
      <p style={styles.descriptionStyle}>{description}</p>
      <div style={styles.footer}>
        <span style={styles.statusDot}></span>
      </div>
    </div>
  );
};

export default CardHome;