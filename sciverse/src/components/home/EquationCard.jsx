import { BlockMath } from "react-katex";

function EquationCard({ equation }) {
  return (
    <article className="equation-card">
      <div className="equation-card-top">
        <span className="equation-subject">{equation.subject}</span>
        <span className="equation-level">{equation.level}</span>
      </div>

      <h3>{equation.name}</h3>

      <div className="equation-formula">
        <BlockMath math={equation.formula} />
      </div>

      <p>{equation.description}</p>

      <div className="equation-card-bottom">
        <span>{equation.category}</span>
      </div>
    </article>
  );
}

export default EquationCard;
