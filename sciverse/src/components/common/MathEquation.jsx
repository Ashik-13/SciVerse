import { useMemo } from "react";
import temml from "temml";

function MathEquation({ latex, display = true, className = "" }) {
  const renderedMath = useMemo(() => {
    if (!latex) return "";

    try {
      return temml.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        maxSize: [20, 100],
        maxExpand: 1000,
      });
    } catch (error) {
      console.error("Equation rendering error:", error);
      return latex;
    }
  }, [latex, display]);

  return (
    <span
      className={`math-equation ${display ? "math-display" : "math-inline"} ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedMath }}
    />
  );
}

export default MathEquation;
