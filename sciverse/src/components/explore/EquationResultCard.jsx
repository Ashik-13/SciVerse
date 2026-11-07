import { BlockMath } from "react-katex";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function EquationResultCard({ equation }) {
  return (
    <article className="result-card">
      <div className="result-card-meta">
        <span className="equation-subject">{equation.subject}</span>
        <span
          className={`equation-level level-${equation.level.toLowerCase()}`}
        >
          {equation.level}
        </span>
      </div>

      <h3>{equation.name}</h3>

      <div className="result-formula">
        <BlockMath math={equation.formula} />
      </div>

      <p className="result-description">{equation.description}</p>

      <div className="result-card-category">{equation.category}</div>

      <div className="result-card-footer">
        <span>{equation.type}</span>

        <Link
          to={`/equation/${equation.id}`}
          aria-label={`View ${equation.name} details`}
        >
          View details <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default EquationResultCard;
