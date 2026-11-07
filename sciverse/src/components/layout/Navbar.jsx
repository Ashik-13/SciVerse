import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Atom, Menu, X, Search } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <Logo />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/explore" onClick={closeMenu}>
            Explore
          </NavLink>
          <NavLink to="/visualizations" onClick={closeMenu}>
            Visualizations
          </NavLink>
          <NavLink to="/learning" onClick={closeMenu}>
            Learning Center
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button className="nav-search" aria-label="Search equations">
            <Search size={19} />
          </button>

          <ThemeToggle />

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
