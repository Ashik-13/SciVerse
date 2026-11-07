import { Atom } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <Atom size={23} />
            </span>
            <span>
              Sci<span>Verse</span>
            </span>
          </Link>

          <p>
            Explore the language of science through equations, explanations and
            visualizations.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SciVerse. All rights reserved.</p>
          <p>Explore. Understand. Visualize.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
