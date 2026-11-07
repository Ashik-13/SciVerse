import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function FourierChart() {
  const timeData = Array.from({ length: 101 }, (_, index) => {
    const time = index * 0.01;

    const signal =
      Math.sin(2 * Math.PI * 2 * time) + 0.5 * Math.sin(2 * Math.PI * 5 * time);

    return {
      time: Number(time.toFixed(2)),
      amplitude: Number(signal.toFixed(4)),
    };
  });

  const frequencyData = Array.from({ length: 61 }, (_, index) => {
    const frequency = index * 0.2;

    const peak2 = Math.exp(-Math.pow((frequency - 2) / 0.22, 2));
    const peak5 = 0.5 * Math.exp(-Math.pow((frequency - 5) / 0.22, 2));

    return {
      frequency: Number(frequency.toFixed(1)),
      magnitude: Number((peak2 + peak5).toFixed(4)),
    };
  });

  return (
    <div className="fourier-charts">
      <div className="fourier-chart-panel">
        <div className="fourier-panel-heading">
          <div>
            <span>TIME DOMAIN</span>
            <h4>Original signal</h4>
          </div>
          <span>Amplitude</span>
        </div>

        <div className="scientific-chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeData}>
              <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />

              <XAxis
                dataKey="time"
                tick={{ fill: "var(--text-secondary)", fontSize: 10 }}
                label={{
                  value: "Time (s)",
                  position: "insideBottom",
                  offset: -5,
                  fill: "var(--text-secondary)",
                  fontSize: 11,
                }}
              />

              <YAxis tick={{ fill: "var(--text-secondary)", fontSize: 10 }} />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="amplitude"
                stroke="var(--chart-primary)"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="fourier-chart-panel">
        <div className="fourier-panel-heading">
          <div>
            <span>FREQUENCY DOMAIN</span>
            <h4>Frequency spectrum</h4>
          </div>
          <span>Relative magnitude</span>
        </div>

        <div className="scientific-chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={frequencyData}>
              <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 4" />

              <XAxis
                dataKey="frequency"
                tick={{ fill: "var(--text-secondary)", fontSize: 10 }}
                label={{
                  value: "Frequency (Hz)",
                  position: "insideBottom",
                  offset: -5,
                  fill: "var(--text-secondary)",
                  fontSize: 11,
                }}
              />

              <YAxis tick={{ fill: "var(--text-secondary)", fontSize: 10 }} />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="magnitude"
                stroke="#0891B2"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="fourier-note">
        The signal contains two sinusoidal components at 2 Hz and 5 Hz. The
        displayed spectrum uses illustrative Gaussian-shaped peaks to show their
        locations; it is not a numerically computed FFT.
      </p>
    </div>
  );
}

export default FourierChart;
