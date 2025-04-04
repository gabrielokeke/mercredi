import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isOpen ? "0" : "-250px",
    width: "250px",
    height: "100%",
    background: "#333",
    color: "white",
    transition: "left 0.3s ease-in-out",
    paddingTop: "60px",
  };

  const sidebarToggleStyle = {
    position: "fixed",
    top: "15px",
    left: "15px",
    background: "#333",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    color: "white",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  };

  const navStyle = {
    listStyle: "none",
    padding: 0,
  };

  const navItemStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
  };

  const linkHoverStyle = {
    background: "#555",
  };

  return (
    <div>
      <button
        style={sidebarToggleStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div style={sidebarStyle}>
        <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}>
              <Link to="/" style={linkStyle} onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link
                to="/profile"
                style={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Profil
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/about" style={linkStyle} onClick={() => setIsOpen(false)}>
                À propos
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/form" style={linkStyle} onClick={() => setIsOpen(false)}>
                Form
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
