export default function Loading() {
    return (
      <div style={styles.overlay}>
        <div className="text-center text-danger">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    //   backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center', // Horizontally center
      alignItems: 'center', // Vertically center
      zIndex: 9999, // Make sure it's on top of other elements
    },
  };
  