import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header style={styles.navbar}>
      <h1 style={styles.logo}>MD</h1>
      <nav style={styles.navLinks}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/Profile" style={styles.link}>Profile</Link>
        <Link to="/About" style={styles.link}>À Propos</Link>
        <Link to="/Form" style={styles.link}>Form</Link>
      </nav>
    </header>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "#222",
    color: "white",
  },
  logo: { fontSize: "2rem", fontWeight: "bold" },
  navLinks: { display: "flex", gap: "20px" },
  link: { color: "white", textDecoration: "none", fontSize: "1.2rem" },
};

export default Navbar;
