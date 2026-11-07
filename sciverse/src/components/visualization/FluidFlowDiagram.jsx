function FluidFlowDiagram() {
  const streamlines = [
    "M 20 65 C 100 65, 115 65, 145 65 C 165 65, 165 48, 205 48 C 245 48, 250 65, 285 65 L 380 65",
    "M 20 95 C 100 95, 125 95, 145 95 C 160 95, 160 78, 205 78 C 250 78, 250 95, 285 95 L 380 95",
    "M 20 155 C 100 155, 125 155, 145 155 C 160 155, 160 172, 205 172 C 250 172, 250 155, 285 155 L 380 155",
    "M 20 185 C 100 185, 115 185, 145 185 C 165 185, 165 202, 205 202 C 245 202, 250 185, 285 185 L 380 185",
  ];

  return (
    <div className="fluid-diagram">
      <svg
        viewBox="0 0 400 250"
        role="img"
        aria-label="Conceptual fluid streamlines moving around a circular obstacle"
      >
        <defs>
          <marker
            id="flow-arrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path
              d="M0,0 L6,3 L0,6"
              fill="none"
              stroke="#0891B2"
              strokeWidth="1.2"
            />
          </marker>
        </defs>

        {streamlines.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke="#0891B2"
            strokeWidth="2"
            strokeOpacity="0.8"
            markerEnd="url(#flow-arrow)"
          />
        ))}

        <circle
          cx="185"
          cy="125"
          r="28"
          fill="var(--fluid-obstacle)"
          stroke="var(--chart-primary)"
          strokeWidth="2"
        />

        <text
          x="185"
          y="129"
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-primary)"
        >
          Body
        </text>

        <text x="20" y="20" fill="var(--text-secondary)" fontSize="10">
          Incoming flow
        </text>

        <text x="290" y="20" fill="var(--text-secondary)" fontSize="10">
          Downstream
        </text>
      </svg>

      <div className="fluid-legend">
        <span>
          <i className="fluid-legend-line" />
          Streamlines
        </span>

        <span>
          <i className="fluid-legend-circle" />
          Obstacle
        </span>
      </div>
    </div>
  );
}

export default FluidFlowDiagram;
