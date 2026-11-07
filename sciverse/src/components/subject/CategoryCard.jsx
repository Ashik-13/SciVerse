import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category, subjectId }) {
  return (
    <Link
      to={`/explore?subject=${encodeURIComponent(
        subjectId === "physics"
          ? "Physics"
          : subjectId === "chemistry"
            ? "Chemistry"
            : "Mathematics",
      )}&category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <div className="category-card-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>

      <span className="category-arrow">
        <ArrowUpRight size={19} />
      </span>
    </Link>
  );
}

export default CategoryCard;
