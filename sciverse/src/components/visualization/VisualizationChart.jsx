import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

function ChartTooltip({ active, payload, label, visualization }) {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return (
    <div className="scientific-tooltip">
      <strong>
        {visualization.xLabel}: {label} {visualization.xUnit}
      </strong>

      <p>
        {visualization.yLabel}: {Number(value).toFixed(3)} {visualization.yUnit}
      </p>
    </div>
  );
}

function VisualizationChart({ visualization }) {
  return (
    <div className="scientific-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={visualization.data}
          margin={{ top: 15, right: 20, left: 12, bottom: 25 }}
        >
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />

          <XAxis
            dataKey={visualization.xKey}
            type="number"
            domain={["dataMin", "dataMax"]}
            tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "var(--border)" }}
            label={{
              value: `${visualization.xLabel} (${visualization.xUnit})`,
              position: "insideBottom",
              offset: -15,
              fill: "var(--text-secondary)",
              fontSize: 11,
            }}
          />

          <YAxis
            type="number"
            domain={["auto", "auto"]}
            tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={65}
            label={{
              value: `${visualization.yLabel} (${visualization.yUnit})`,
              angle: -90,
              position: "insideLeft",
              fill: "var(--text-secondary)",
              fontSize: 11,
            }}
          />

          <Tooltip content={<ChartTooltip visualization={visualization} />} />

          {visualization.id === "wave-equation" && (
            <ReferenceLine
              y={0}
              stroke="var(--text-secondary)"
              strokeDasharray="4 4"
            />
          )}

          <Line
            type="monotone"
            dataKey={visualization.yKey}
            stroke="var(--chart-primary)"
            strokeWidth={2.8}
            dot={{
              r: 3,
              fill: "var(--chart-primary)",
              strokeWidth: 0,
            }}
            activeDot={{ r: 6 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VisualizationChart;
