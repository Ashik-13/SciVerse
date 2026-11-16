import { useMemo, useState } from "react";
import { BlockMath } from "react-katex";
import "./EquationVisualization.css";

const CONFIGS = {
  "newtons-second-law": {
    title: "Newton's Second Law",
    subtitle: "Explore how mass and acceleration determine the net force.",
    formula: String.raw`F = ma`,
    graphTitle: "Force vs. acceleration",
    xLabel: "Acceleration (m/s²)",
    yLabel: "Force (N)",
    controls: [
      { key: "mass", label: "Mass", unit: "kg", min: 0.5, max: 10, step: 0.5, initial: 2 },
      { key: "acceleration", label: "Acceleration", unit: "m/s²", min: 0, max: 10, step: 0.5, initial: 5 },
    ],
    calculate: (p) => p.mass * p.acceleration,
    result: (value) => `${value.toFixed(2)} N`,
    resultLabel: "Net force",
    xMax: 10,
    yMin: 0,
    yMax: 110,
    showActivePoint: true,
    curve: (x, p) => p.mass * x,
    explanation: "For a fixed mass, force increases linearly with acceleration. A larger mass produces a steeper line.",
  },
  "ohms-law": {
    title: "Ohm's Law",
    subtitle: "Investigate the relationship between voltage, current and resistance.",
    formula: String.raw`V = IR`,
    graphTitle: "Voltage vs. current",
    xLabel: "Current (A)",
    yLabel: "Voltage (V)",
    controls: [
      { key: "resistance", label: "Resistance", unit: "Ω", min: 1, max: 20, step: 1, initial: 5 },
      { key: "current", label: "Current", unit: "A", min: 0, max: 5, step: 0.1, initial: 2 },
    ],
    calculate: (p) => p.resistance * p.current,
    result: (value) => `${value.toFixed(2)} V`,
    resultLabel: "Potential difference",
    xMax: 5,
    yMin: 0,
    yMax: 110,
    showActivePoint: true,
    curve: (x, p) => p.resistance * x,
    explanation: "For an ohmic conductor at constant physical conditions, voltage is proportional to current. Resistance determines the slope.",
  },
  "ideal-gas-law": {
    title: "Ideal Gas Law",
    subtitle: "See how absolute temperature changes the pressure of an ideal gas.",
    formula: String.raw`PV = nRT`,
    graphTitle: "Pressure vs. temperature",
    xLabel: "Temperature (K)",
    yLabel: "Pressure (kPa)",
    controls: [
      { key: "amount", label: "Amount of gas", unit: "mol", min: 0.1, max: 2, step: 0.1, initial: 1 },
      { key: "volume", label: "Volume", unit: "L", min: 2, max: 20, step: 1, initial: 10 },
      { key: "temperature", label: "Temperature", unit: "K", min: 100, max: 1000, step: 10, initial: 300 },
    ],
    calculate: (p) => (p.amount * 8.314462618 * p.temperature) / p.volume,
    result: (value) => `${value.toFixed(2)} kPa`,
    resultLabel: "Pressure",
    xMax: 1000,
    yMin: 0,
    yMax: 9000,
    showActivePoint: true,
    curve: (x, p) => (p.amount * 8.314462618 * x) / p.volume,
    explanation: "At constant amount of gas and volume, pressure is directly proportional to absolute temperature.",
  },
  "quadratic-formula": {
    title: "Quadratic Function",
    subtitle: "Change the coefficients and observe how the parabola and roots respond.",
    formula: String.raw`y = ax^2 + bx + c`,
    graphTitle: "Quadratic function",
    xLabel: "x",
    yLabel: "y",
    controls: [
      { key: "a", label: "Coefficient a", unit: "", min: -3, max: 3, step: 0.1, initial: 1 },
      { key: "b", label: "Coefficient b", unit: "", min: -6, max: 6, step: 0.5, initial: -2 },
      { key: "c", label: "Coefficient c", unit: "", min: -8, max: 8, step: 0.5, initial: -3 },
    ],
    calculate: (p) => p.b * p.b - 4 * p.a * p.c,
    result: (value) => value > 0 ? `${value.toFixed(2)} (two real roots)` : value === 0 ? "0 (one repeated real root)" : `${value.toFixed(2)} (no real roots)`,
    resultLabel: "Discriminant (Δ)",
    xMin: -6,
    xMax: 6,
    yMin: -160,
    yMax: 160,
    showActivePoint: false,
    curve: (x, p) => p.a * x * x + p.b * x + p.c,
    explanation: "The coefficients control the parabola's opening, width and vertical position. The discriminant indicates the number of real roots.",
  },
};

function makePath(config, params, width, height) {
  const xMin = config.xMin ?? 0;
  const xMax = config.xMax ?? 10;
  const samples = 100;
  const values = Array.from({ length: samples + 1 }, (_, i) => {
    const x = xMin + ((xMax - xMin) * i) / samples;
    return { x, y: config.curve(x, params) };
  });
  // Keep the vertical scale fixed so parameter changes are visible.
  // Auto-scaling each curve would make different slopes look almost identical.
  const yMin = config.yMin ?? Math.min(0, ...values.map((point) => point.y));
  const yMax = config.yMax ?? Math.max(1, ...values.map((point) => point.y));
  const px = (x) => 48 + ((x - xMin) / (xMax - xMin)) * (width - 66);
  const py = (y) => height - 34 - ((y - yMin) / (yMax - yMin)) * (height - 54);
  return {
    d: values.map((point, i) => `${i === 0 ? "M" : "L"} ${px(point.x).toFixed(2)} ${py(point.y).toFixed(2)}`).join(" "),
    xZero: px(Math.max(xMin, Math.min(xMax, 0))),
    yZero: py(Math.max(yMin, Math.min(yMax, 0))),
    px,
    py,
    yMin,
    yMax,
    xMin,
    xMax,
  };
}

function VisualizationGraph({ config, params }) {
  const width = 720;
  const height = 300;
  const graph = useMemo(() => makePath(config, params, width, height), [config, params]);
  const activeX = params.acceleration ?? params.current ?? params.temperature ?? 0;
  const clampedX = Math.max(graph.xMin, Math.min(graph.xMax, activeX));
  const activeY = config.curve(clampedX, params);

  return (
    <div className="eqviz-chart-wrap">
      <div className="eqviz-chart-heading">
        <h4>{config.graphTitle}</h4>
        <span>Illustrative mathematical model</span>
      </div>
      <svg className="eqviz-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${config.graphTitle} graph`}>
        {[0, 1, 2, 3, 4].map((tick) => {
          const y = 18 + tick * 54;
          return <line key={tick} x1="48" y1={y} x2="702" y2={y} className="eqviz-grid-line" />;
        })}
        <line x1="48" y1={graph.yZero} x2="702" y2={graph.yZero} className="eqviz-axis" />
        <line x1={graph.xZero} y1="18" x2={graph.xZero} y2="266" className="eqviz-axis" />
        <path d={graph.d} className="eqviz-curve" />
        {config.showActivePoint && (
          <circle cx={graph.px(clampedX)} cy={graph.py(activeY)} r="6" className="eqviz-active-point" />
        )}
        <text x="375" y="292" textAnchor="middle" className="eqviz-axis-label">{config.xLabel}</text>
        <text x="13" y="15" className="eqviz-axis-label">{config.yLabel}</text>
      </svg>
      <div className="eqviz-chart-footnote">
        <span>0</span>
        <span>Graph updates as you change the parameters</span>
      </div>
    </div>
  );
}

function EquationVisualization({ equationId }) {
  const config = CONFIGS[equationId];
  if (!config) return null;
  return <EquationVisualizationContent key={equationId} config={config} equationId={equationId} />;
}

function EquationVisualizationContent({ config, equationId }) {
  const initialParams = Object.fromEntries(config.controls.map((control) => [control.key, control.initial]));
  const [params, setParams] = useState(initialParams);
  const value = config.calculate(params);

  const updateParam = (key, nextValue) => {
    setParams((current) => ({ ...current, [key]: Number(nextValue) }));
  };

  return (
    <section className="equation-section eqviz-section" id="visualization">
      <span className="equation-section-eyebrow">INTERACTIVE EXPLORATION</span>
      <div className="eqviz-title-row">
        <div>
          <h2>Interactive visualization</h2>
          <p className="section-description">{config.subtitle}</p>
        </div>
        <span className="eqviz-live-label"><span /> Live model</span>
      </div>

      <div className="eqviz-panel">
        <div className="eqviz-panel-top">
          <div>
            <span className="eqviz-overline">MATHEMATICAL MODEL</span>
            <h3>{config.title}</h3>
          </div>
          <div className="eqviz-formula"><BlockMath math={config.formula} /></div>
        </div>

        <div className="eqviz-workspace">
          <div className="eqviz-controls">
            <div className="eqviz-controls-heading">
              <h4>Adjust parameters</h4>
              <button type="button" onClick={() => setParams(initialParams)}>Reset</button>
            </div>
            {config.controls.map((control) => (
              <div className="eqviz-control" key={control.key}>
                <div className="eqviz-control-label">
                  <label htmlFor={`eqviz-${equationId}-${control.key}`}>{control.label}</label>
                  <output>{params[control.key]} {control.unit}</output>
                </div>
                <input
                  id={`eqviz-${equationId}-${control.key}`}
                  type="range"
                  min={control.min}
                  max={control.max}
                  step={control.step}
                  value={params[control.key]}
                  onChange={(event) => updateParam(control.key, event.target.value)}
                />
                <div className="eqviz-range-labels"><span>{control.min}</span><span>{control.max} {control.unit}</span></div>
              </div>
            ))}
            <div className="eqviz-result">
              <span>{config.resultLabel}</span>
              <strong>{config.result(value)}</strong>
              <small>Calculated from the current parameter values</small>
            </div>
          </div>

          <div className="eqviz-graph-column">
            <VisualizationGraph config={config} params={params} />
            <p className="eqviz-explanation">{config.explanation}</p>
          </div>
        </div>
        <div className="eqviz-disclaimer">
          <span>ⓘ</span>
          <p>This is an idealized educational model. Real systems may require additional assumptions, boundary conditions or material-specific data.</p>
        </div>
      </div>
    </section>
  );
}

export default EquationVisualization;
