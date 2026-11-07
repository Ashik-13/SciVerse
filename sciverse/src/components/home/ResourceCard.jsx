import { ArrowUpRight, Sigma, Ruler, Atom } from "lucide-react";

const icons = {
  Sigma,
  Ruler,
  Atom,
};

function ResourceCard({ resource }) {
  const Icon = icons[resource.icon];

  return (
    <article className="resource-card">
      <div className="resource-icon">
        <Icon size={24} />
      </div>

      <span className="resource-label">{resource.label}</span>

      <h3>{resource.title}</h3>

      <p>{resource.description}</p>

      <div className="resource-link">
        Explore resource <ArrowUpRight size={17} />
      </div>
    </article>
  );
}

export default ResourceCard;
