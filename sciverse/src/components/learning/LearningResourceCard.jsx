import {
  Sigma,
  Ruler,
  Atom,
  FunctionSquare,
  BookOpen,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const icons = {
  sigma: Sigma,
  ruler: Ruler,
  atom: Atom,
  "function-square": FunctionSquare,
  "book-open": BookOpen,
  "graduation-cap": GraduationCap,
};

function LearningResourceCard({ resource }) {
  const Icon = icons[resource.icon] || BookOpen;

  return (
    <Link to={`/learning/${resource.id}`} className="learning-resource-card">
      <div className="learning-resource-card-top">
        <div className="learning-resource-icon">
          <Icon size={23} />
        </div>

        <span className="learning-resource-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>

      <span className="learning-resource-subject">{resource.subject}</span>

      <h3>{resource.title}</h3>

      <p>{resource.description}</p>

      <div className="learning-resource-card-bottom">
        <span>{resource.topics.length} learning topics</span>
        <span>{resource.level}</span>
      </div>
    </Link>
  );
}

export default LearningResourceCard;
