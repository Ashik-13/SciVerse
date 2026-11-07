import { ArrowUpRight } from "lucide-react";

const chartPaths = {
  linear: "M 12 128 L 260 20",
  wave: "M 12 75 C 35 5, 58 5, 82 75 S 130 145, 154 75 S 202 5, 226 75 S 250 145, 260 75",
  decay: "M 12 18 C 55 25, 90 65, 125 88 S 205 119, 260 128",
};

function VisualizationCard({ visualization }) {
  return (
    <article className="visualization-card">
      <div className="visualization-chart">
        <svg
          viewBox="0 0 272 150"
          role="img"
          aria-label={`${visualization.title} illustrative graph`}
        >
          <line x1="12" y1="12" x2="12" y2="130" className="chart-axis" />
          <line x1="12" y1="130" x2="264" y2="130" className="chart-axis" />

          <line x1="12" y1="40" x2="264" y2="40" className="chart-grid" />
          <line x1="12" y1="85" x2="264" y2="85" className="chart-grid" />

          <path d={chartPaths[visualization.type]} className="chart-line" />
        </svg>
      </div>

      <div className="visualization-card-content">
        <span className="visualization-subject">{visualization.subject}</span>

        <h3>{visualization.title}</h3>

        <p>{visualization.description}</p>

        <div className="visualization-card-bottom">
          <span>{visualization.formula}</span>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </article>
  );
}

export default VisualizationCard;
