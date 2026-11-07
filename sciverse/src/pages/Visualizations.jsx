import { useMemo, useState } from "react";
import { Activity, Search } from "lucide-react";

import { visualizations } from "../data/visualizations";
import VisualizationCard from "../components/visualization/VisualizationCard";

function Visualizations() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");

  const filteredVisualizations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return visualizations.filter((item) => {
      const matchesSearch = [
        item.title,
        item.description,
        item.category,
        item.explanation,
        item.formula,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

      const matchesSubject = subject === "All" || item.subject === subject;

      return matchesSearch && matchesSubject;
    });
  }, [search, subject]);

  return (
    <main className="visualizations-page">
      <section className="visualizations-hero">
        <div className="container">
          <span className="visualizations-eyebrow">
            SCIENCE THROUGH VISUALIZATION
          </span>

          <h1>
            See the science <span>behind the equations.</span>
          </h1>

          <p>
            Explore scientific relationships through carefully curated graphs
            and diagrams. Understand how mathematical equations describe the
            world around us.
          </p>

          <div className="visualizations-hero-stats">
            <div>
              <strong>{visualizations.length}</strong>
              <span>Visualizations</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Disciplines</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Scientific library</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section visualization-gallery-section">
        <div className="container">
          <div className="visualization-gallery-heading">
            <div>
              <span className="visualizations-eyebrow">
                CURATED SCIENTIFIC MODELS
              </span>

              <h2>Visualization Gallery</h2>

              <p>
                Explore the behaviour of scientific systems through mathematical
                relationships.
              </p>
            </div>

            <span className="visualization-total">
              {filteredVisualizations.length} results
            </span>
          </div>

          <div className="visualization-toolbar">
            <div className="visualization-controls">
              <div className="visualization-search">
                <Search size={19} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search equations or visualizations..."
                  aria-label="Search visualizations"
                />

                {search && (
                  <button
                    type="button"
                    className="search-clear"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="visualization-filter-row">
              <div className="visualization-filter-label">DISCIPLINE</div>

              <div className="visualization-filter-buttons">
                {['All', 'Physics', 'Chemistry', 'Mathematics'].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`visualization-filter-button ${
                      subject === item ? "active" : ""
                    }`}
                    onClick={() => setSubject(item)}
                    aria-pressed={subject === item}
                  >
                    {item === "All" ? "All disciplines" : item}
                  </button>
                ))}
              </div>
            </div>

            <div className="visualization-results-info">
              Showing <strong>{filteredVisualizations.length}</strong> of{' '}
              <strong>{visualizations.length}</strong> visualizations

              {(search || subject !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSubject("All");
                  }}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            aria-label="Filter by subject"
          >
            <option value="All">All disciplines</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Mathematics">Mathematics</option>
          </select>

          {filteredVisualizations.length > 0 ? (
            <div className="visualizations-grid">
              {filteredVisualizations.map((item, index) => (
                <VisualizationCard
                  key={item.id}
                  visualization={item}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="visualization-empty">
              <Activity size={30} />

              <h3>No visualizations found</h3>

              <p>Try another search term or select a different discipline.</p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSearch("");
                  setSubject("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Visualizations;
