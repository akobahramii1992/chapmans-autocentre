import React from "react";

// Your dealership link (still goes to AutoTrader but button text is generic)
const AUTOTRADER_URL = "https://www.autotrader.co.uk/dealers/warwickshire/coventry/chapmans-autocentre-10035203?channel=vans";

// Logo
const LOGO_URL = "https://i.postimg.cc/xT5HwZWp/Logo.jpg";

// Sample modern car images
const CAR_IMAGES = [
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
];

// Background hero image (professional car-themed)
const HERO_BACKGROUND = "https://images.unsplash.com/photo-1616573320542-ffb73db9d73d";

function App() {
  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <img src={LOGO_URL} alt="Chapmans AutoCentre Logo" style={styles.logo} />
        <div>
          <h1 style={styles.title}>Chapmans AutoCentre</h1>
          <p style={styles.subtitle}>Quality Used Cars in Coventry</p>
        </div>
      </header>

      {/* Hero Section with background */}
      <section style={{ ...styles.hero, backgroundImage: `url(${HERO_BACKGROUND})` }}>
        <div style={styles.overlay}>
          <div style={styles.gallery}>
            {CAR_IMAGES.map((url, index) => (
              <div key={index} style={styles.card}>
                <img src={url} alt={`Car ${index + 1}`} style={styles.carImage} />
              </div>
            ))}
          </div>

          {/* Button */}
          <div style={styles.buttonContainer}>
            <a href={AUTOTRADER_URL} target="_blank" rel="noopener noreferrer" style={styles.button}>
              See Our Full Range
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Chapmans AutoCentre &copy; {new Date().getFullYear()} | 68 Bayton Road, Exhall, Coventry, CV7 9EJ | Call: 07724 540230</p>
      </footer>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    color: "#333",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 50px",
    backgroundColor: "#1d3557",
    color: "#fff",
    gap: "20px",
    flexWrap: "wrap",
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    borderRadius: "10px",
    background: "#fff",
    padding: "5px",
  },
  title: {
    margin: 0,
    fontSize: "36px",
  },
  subtitle: {
    margin: 0,
    fontSize: "16px",
    color: "#f1faee",
  },
  hero: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 20px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "50px 20px",
    borderRadius: "12px",
    textAlign: "center",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.3s",
  },
  carImage: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#e63946",
    color: "#fff",
    padding: "20px 50px",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius: "10px",
    textDecoration: "none",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#1d3557",
    color: "#fff",
    marginTop: "50px",
  },
};

export default App;
