import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // On ajoutera un fichier CSS pour le style

function Sidebar() {
const [isOpen, setIsOpen] = useState(false);

return (
<div>
{/* Bouton pour ouvrir/fermer la sidebar */}
<button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
☰
</button>

{/* Contenu de la sidebar */}
<div className={`sidebar ${isOpen ? "open" : ""}`}>
<button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
<nav>
<ul>
<li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
<li><Link to="/profile" onClick={() => setIsOpen(false)}>Profil</Link></li>
<li><Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
</ul>
</nav>
</div>
</div>
);
}

export default Sidebar;