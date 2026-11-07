import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { equations } from "../data/equations";

function EquationPlaceholder() {
  const { slug } = useParams();
  const equation = equations.find((item) => item.id === slug);

  if (!equation) {
    return (
      <div className="container placeholder-page">
        <h1>Equation not found</h1>
        <Link to="/explore">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="container placeholder-page">
      <Link to="/explore" className="back-link">
        <ArrowLeft size={17} /> Back to Explore
      </Link>

      <span className="explore-eyebrow">EQUATION DETAILS</span>
      <h1>{equation.name}</h1>

      <p>
        This equation's complete explanation, derivation, variables,
        applications and references will be developed in Phase 5.
      </p>
    </div>
  );
}

export default EquationPlaceholder;
