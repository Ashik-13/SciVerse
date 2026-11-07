import { BlockMath } from "react-katex";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import VisualizationChart from "./VisualizationChart";
import FourierChart from "./FourierChart";
import FluidFlowDiagram from "./FluidFlowDiagram";

function VisualizationCard({ visualization, index }) {
  const renderVisualization = () => {
    if (visualization.type === "fluid") {
      return <FluidFlowDiagram />;
    }

    if (visualization.type === "fourier") {
      return <FourierChart />;
    }

    return <VisualizationChart visualization={visualization} />;
  };

  return (
    <article className="visualization-card">
      <div className="visualization-card-header">
        <div>
          <span className="visualization-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="visualization-subject">{visualization.subject}</span>
        </div>

        <span className="visualization-category">{visualization.category}</span>
      </div>

      <h3>{visualization.title}</h3>

      <p className="visualization-description">{visualization.description}</p>

      <div className="visualization-formula">
        <BlockMath math={visualization.formula} />
      </div>

      <div className="visualization-chart-container">
        {renderVisualization()}
      </div>

      <div className="visualization-parameters">
        <span>MODEL PARAMETERS</span>
        <p>{visualization.parameters}</p>
      </div>

      <div className="visualization-explanation">
        <span>SCIENTIFIC INTERPRETATION</span>
        <p>{visualization.explanation}</p>
      </div>

      <div className="visualization-card-footer">
        {visualization.equationId ? (
          <Link to={`/equation/${visualization.equationId}`}>
            Explore equation <ArrowUpRight size={17} />
          </Link>
        ) : (
          <Link to="/explore">
            Explore equations <ArrowUpRight size={17} />
          </Link>
        )}
      </div>
    </article>
  );
}

export default VisualizationCard;
