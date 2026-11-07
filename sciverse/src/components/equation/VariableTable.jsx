import { InlineMath } from "react-katex";

function VariableTable({ variables }) {
  return (
    <div className="variable-table-wrapper">
      <table className="variable-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Definition</th>
            <th>SI Unit</th>
            <th>Dimension</th>
          </tr>
        </thead>

        <tbody>
          {variables.map((variable, index) => (
            <tr key={`${variable.name}-${index}`}>
              <td className="variable-symbol">
                <InlineMath math={variable.symbol} />
              </td>

              <td>{variable.name}</td>

              <td>{variable.description}</td>

              <td>{variable.unit}</td>

              <td className="variable-dimension">
                <InlineMath math={variable.dimension} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VariableTable;
