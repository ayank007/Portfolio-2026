import { useState, useEffect } from 'react';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulates page load completion
        const handleLoad = () => setLoading(false);

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!loading) return null;

    return (
        <div style={styles.overlay}>
            <p style={styles.heading}>Loading... Please Wait!</p>
            <div style={styles.spinner}></div>
            <style>
                {`
          @keyframes customSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
};

const styles = {
    heading: { color: "#fff", fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center", width: "100%" },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#091922',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 9999,
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '4px solid rgba(255, 255, 255, 0.05)',
        borderTop: '4px solid #1DBD9C',
        borderRadius: '50%',
        animation: 'customSpin 0.8s linear infinite',
    },
} as const;

export default PageLoader;