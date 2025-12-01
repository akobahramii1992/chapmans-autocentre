import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Chapmans Autocentre</h1>
      <p style={styles.subtitle}>Quality Used Cars in Coventry</p>

      <div style={styles.gallery}>
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="Car 1"
          style={styles.image}
        />
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car 2"
          style={styles.image}
        />
        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
          alt="Car 3"
          style={styles.image}
        />
      </div>

      <a
        href="https://www.autotrader.co.uk/dealers/warwickshire/coventry/chapmans-autocentre-10035203?channel=vans"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View All Cars on AutoTrader
      </a>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#444",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  image: {
    width: "300px",
    borderRadius: "10px",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "18px",
  },
};

export default App;
