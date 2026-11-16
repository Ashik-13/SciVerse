import MathEquation from "../components/common/MathEquation";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { BlockMath } from "react-katex";

import { equations } from "../data/equations";
import { equationDetails } from "../data/equationDetails";

import EquationHeader from "../components/equation/EquationHeader";
import VariableTable from "../components/equation/VariableTable";
import Derivation from "../components/equation/Derivation";
import ReferenceList from "../components/equation/ReferenceList";
import EquationVisualization from "../components/equation/EquationVisualization";

function EquationDetails() {
  const { slug } = useParams();

  const equation = equations.find((item) => item.id === slug);
  const details = equationDetails[slug];

  if (!equation) {
    return (
      <main className="container equation-not-found">
        <h1>Equation not found</h1>
        <p>This equation does not exist in the SciVerse library.</p>
        <Link to="/explore" className="btn btn-primary">
          Explore Equations
        </Link>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="container equation-pending">
        <span className="equation-section-eyebrow">EQUATION DETAILS</span>

        <h1>{equation.name}</h1>

        <div className="equation-formula">
          <MathEquation latex={equation.formula} />
        </div>

        <p>{equation.description}</p>

        <div className="pending-notice">
          <BookOpen size={22} />

          <div>
            <h3>Academic content is being prepared</h3>
            <p>
              The detailed explanation, variable definitions, derivation,
              assumptions and academic references for this equation are not
              available yet.
            </p>
          </div>
        </div>

        <Link to="/explore" className="btn btn-secondary">
          Back to Explore
        </Link>
      </main>
    );
  }

  const relatedEquations = (details.relatedEquations || [])
    .map((id) => equations.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <main className="equation-details-page">
      <EquationHeader equation={equation} details={details} />

      <div className="container equation-details-layout">
        <div className="equation-main-content">
          {/* INTRODUCTION */}

          <section className="equation-section" id="introduction">
            <span className="equation-section-eyebrow">OVERVIEW</span>

            <h2>Introduction</h2>

            <p>{details.introduction}</p>
          </section>

          {/* INTERPRETATION */}

          <section className="equation-section" id="interpretation">
            <div className="equation-section-title">
              <Lightbulb size={21} />
              <h2>Physical and mathematical interpretation</h2>
            </div>

            <p>{details.interpretation}</p>
          </section>

          {/* VARIABLES */}

          <section className="equation-section" id="variables">
            <span className="equation-section-eyebrow">NOTATION AND UNITS</span>

            <h2>Variables and symbols</h2>

            <p className="section-description">
              The following table defines the symbols used in this equation.
            </p>

            <VariableTable variables={details.variables} />
          </section>

          {/* INTERACTIVE VISUALIZATION */}

          <EquationVisualization equationId={equation.id} />

          {/* DIMENSIONAL ANALYSIS */}

          <section className="equation-section" id="dimensions">
            <span className="equation-section-eyebrow">
              PHYSICAL CONSISTENCY
            </span>

            <h2>Dimensional analysis</h2>

            <p>
              Dimensional analysis examines the physical dimensions of the
              quantities in an equation. The dimensions listed above can be used
              to check the consistency of its terms.
            </p>

            <div className="dimension-note">
              <CheckCircle2 size={19} />

              <span>
                Use the variable table to compare the dimensions of both sides
                of the equation.
              </span>
            </div>
          </section>

          {/* DERIVATION */}

          <section className="equation-section" id="derivation">
            <span className="equation-section-eyebrow">
              MATHEMATICAL DEVELOPMENT
            </span>

            <h2>Step-by-step derivation</h2>

            <p className="section-description">
              Follow the mathematical development of the equation through the
              steps below.
            </p>

            <Derivation steps={details.derivation} />
          </section>

          {/* ASSUMPTIONS */}

          <section className="equation-section" id="assumptions">
            <span className="equation-section-eyebrow">
              CONDITIONS OF VALIDITY
            </span>

            <h2>Assumptions</h2>

            <ul className="academic-list">
              {details.assumptions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* LIMITATIONS */}

          <section className="equation-section" id="limitations">
            <span className="equation-section-eyebrow">
              SCOPE AND APPLICABILITY
            </span>

            <h2>Limitations</h2>

            <ul className="academic-list limitation-list">
              {details.limitations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* APPLICATIONS */}

          <section className="equation-section" id="applications">
            <span className="equation-section-eyebrow">
              REAL-WORLD CONNECTIONS
            </span>

            <h2>Practical applications</h2>

            <div className="application-grid">
              {details.applications.map((item, index) => (
                <div className="application-item" key={index}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RELATED EQUATIONS */}

          <section className="equation-section" id="related">
            <span className="equation-section-eyebrow">CONTINUE EXPLORING</span>

            <h2>Related equations</h2>

            {relatedEquations.length > 0 ? (
              <div className="related-equations">
                {relatedEquations.map((related) => (
                  <Link
                    to={`/equation/${related.id}`}
                    className="related-equation-card"
                    key={related.id}
                  >
                    <div>
                      <span>{related.subject}</span>
                      <h3>{related.name}</h3>
                      <p>{related.category}</p>
                    </div>

                    <ArrowRight size={19} />
                  </Link>
                ))}
              </div>
            ) : (
              <p>No related equations have been added yet.</p>
            )}
          </section>

          {/* REFERENCES */}

          <section className="equation-section" id="references">
            <span className="equation-section-eyebrow">ACADEMIC SOURCES</span>

            <h2>References</h2>

            <p className="section-description">
              Consult the following textbooks for further theoretical
              discussion.
            </p>

            <ReferenceList references={details.references} />
          </section>

          <div className="equation-page-footer">
            <Link to="/explore" className="btn btn-secondary">
              Explore more equations <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* PAGE CONTENT NAVIGATION */}

        <aside className="equation-sidebar">
          <div className="equation-sidebar-inner">
            <span>ON THIS PAGE</span>

            <a href="#introduction">Introduction</a>
            <a href="#visualization">Interactive visualization</a>
            <a href="#interpretation">Interpretation</a>
            <a href="#variables">Variables and symbols</a>
            <a href="#dimensions">Dimensional analysis</a>
            <a href="#derivation">Derivation</a>
            <a href="#assumptions">Assumptions</a>
            <a href="#limitations">Limitations</a>
            <a href="#applications">Applications</a>
            <a href="#related">Related equations</a>
            <a href="#references">References</a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default EquationDetails;
