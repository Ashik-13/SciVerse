import { BlockMath } from "react-katex";

function Derivation({ steps }) {
  return (
    <div className="derivation-list">
      {steps.map((step, index) => (
        <article className="derivation-step" key={index}>
          <div className="derivation-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="derivation-content">
            <h3>{step.title}</h3>

            <p>{step.explanation}</p>

            <div className="derivation-formula">
              <BlockMath math={step.formula} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Derivation;
