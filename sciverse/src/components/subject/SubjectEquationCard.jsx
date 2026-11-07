import { BlockMath } from "react-katex";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function SubjectEquationCard({ equation }) {
  return (
    <article className="subject-equation-card">
      <div className="subject-equation-meta">
        <span>{equation.category}</span>
        <span
          className={`equation-level level-${equation.level.toLowerCase()}`}
        >
          {equation.level}
        </span>
      </div>

      <h3>{equation.name}</h3>

      <div className="subject-equation-formula">
        <BlockMath math={equation.formula} />
      </div>

      <p>{equation.description}</p>

      <Link to={`/equation/${equation.id}`} className="subject-equation-link">
        View equation <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}

export default SubjectEquationCard;
