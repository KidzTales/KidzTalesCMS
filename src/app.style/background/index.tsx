import React from 'react';

const Background = () => {
  return (
    <div style={styles.backgroundMain}>
      <div style={styles.backgroundMainBefore} />
      <div style={styles.backgroundMainAfter} />
      <div style={styles.backgroundContent} />
    </div>
  );
};

export default Background;

const styles: { [key: string]: React.CSSProperties } = {
  backgroundMain: {
    width: '100vw',
    minHeight: '100vh',
    position: 'fixed',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  backgroundMainBefore: {
    background: 'radial-gradient(circle, rgba(2, 0, 36, 0) 0, #ECE3EC 90%)',
    position: 'absolute',
    content: '""',
    zIndex: 1, // Ensure this is behind the content
    width: '100%',
    height: '100%',
    top: 0,
  },
  backgroundMainAfter: {
    content: '""',
    backgroundImage: 'url(/grid.svg)',
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    opacity: 0.4,
    filter: 'invert(1)',
  },
  backgroundContent: {
    zIndex: 3,
    width: '100%',
    maxWidth: '640px',
    backgroundImage: `radial-gradient(at 27% 37%, #FFDBEB 0px, transparent 50%),
                      radial-gradient(at 50% 50%, #FFA500 0px, transparent 30%),
                      radial-gradient(at 97% 21%, #8FE6C4 0px, transparent 50%),
                      radial-gradient(at 52% 99%, #F1C40F 0px, transparent 50%),
                      radial-gradient(at 10% 29%, #7CE6F8 0px, transparent 50%),
                      radial-gradient(at 97% 96%, #F6F1F6 0px, transparent 50%)`,
    position: 'absolute',
    height: '100%',
    filter: 'blur(100px) saturate(150%)',
    top: '80px',
    opacity: 0.15,
  },
};
