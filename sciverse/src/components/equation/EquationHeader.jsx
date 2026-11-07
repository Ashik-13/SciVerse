import { BlockMath } from "react-katex";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function EquationHeader({ equation, details }) {
  return (
    <section className="equation-detail-hero">
      <div className="container">
        <Link to="/explore" className="equation-back-link">
          <ArrowLeft size={17} />
          Back to Explore
        </Link>

        <div className="equation-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/explore">Explore</Link>
          <span>/</span>
          <span>{equation.subject}</span>
        </div>

        <div className="equation-detail-meta">
          <span>{equation.subject}</span>
          <span>{equation.category}</span>
          <span
            className={`equation-level level-${equation.level.toLowerCase()}`}
          >
            {equation.level}
          </span>
        </div>

        <h1>{equation.name}</h1>

        <p className="equation-detail-intro">{details.introduction}</p>

        <div className="equation-main-formula">
          <BlockMath math={details.formula} />
        </div>
      </div>
    </section>
  );
}

export default EquationHeader;
