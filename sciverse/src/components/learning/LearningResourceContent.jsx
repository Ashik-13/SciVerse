import { InlineMath, BlockMath } from "react-katex";

function LearningResourceContent({ sections }) {
  return (
    <div className="learning-content-sections">
      {sections.map((section, index) => (
        <section
          className="learning-content-section"
          key={`${section.title}-${index}`}
          id={`learning-section-${index}`}
        >
          <span className="learning-section-number">
            SECTION {String(index + 1).padStart(2, "0")}
          </span>

          <h2>{section.title}</h2>

          <p className="learning-section-description">{section.description}</p>

          {/* SYMBOL AND NOTATION ITEMS */}

          {section.items && (
            <div className="learning-symbol-grid">
              {section.items.map((item, itemIndex) => (
                <article className="learning-symbol-card" key={itemIndex}>
                  <div className="learning-symbol">
                    <InlineMath math={item.symbol} />
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.meaning}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* DATA TABLE */}

          {section.table && (
            <div className="learning-table-wrapper">
              <table className="learning-table">
                <thead>
                  <tr>
                    {section.table.headers.map((header, i) => (
                      <th key={i}>{header}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* MATHEMATICAL FORMULAS */}

          {section.formula && (
            <div className="learning-formula-single">
              <BlockMath math={section.formula} />
            </div>
          )}

          {section.formulas && (
            <div className="learning-formula-grid">
              {section.formulas.map((item, formulaIndex) => (
                <article className="learning-formula-card" key={formulaIndex}>
                  <h3>{item.name}</h3>

                  <div>
                    <BlockMath math={item.formula} />
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* LEARNING STEPS */}

          {section.steps && (
            <div className="learning-steps">
              {section.steps.map((step, stepIndex) => (
                <div className="learning-step" key={stepIndex}>
                  <span>{String(stepIndex + 1).padStart(2, "0")}</span>

                  <p>{step}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default LearningResourceContent;
