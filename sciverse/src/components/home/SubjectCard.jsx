import { Atom, FlaskConical, Sigma, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const icons = {
  Atom,
  FlaskConical,
  Sigma,
};

function SubjectCard({ subject }) {
  const Icon = icons[subject.icon];

  return (
    <Link
      to={`/subject/${subject.id}`}
      className={`subject-card ${subject.color}`}
    >
      <div className="subject-card-top">
        <span className="subject-icon">
          <Icon size={25} />
        </span>

        <ArrowUpRight size={20} className="subject-arrow" />
      </div>

      <h3>{subject.title}</h3>

      <p>{subject.description}</p>

      <span className="subject-card-note">{subject.equationCount}</span>
    </Link>
  );
}

export default SubjectCard;
