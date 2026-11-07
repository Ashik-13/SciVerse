import { useMemo, useState } from "react";
import { BookOpen, GraduationCap } from "lucide-react";

import { learningResources } from "../data/learningResources";
import LearningResourceCard from "../components/learning/LearningResourceCard";
import LearningSearch from "../components/learning/LearningSearch";

function LearningCenter() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return learningResources.filter((resource) => {
      const searchableContent = [
        resource.title,
        resource.description,
        resource.subject,
        ...resource.topics,
        ...resource.sections.map((section) => section.title),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableContent.includes(query);

      const matchesSubject =
        subject === "All" ||
        resource.subject === subject ||
        resource.subject === "All disciplines";

      return matchesSearch && matchesSubject;
    });
  }, [search, subject]);

  return (
    <main className="learning-center-page">
      {/* HERO */}

      <section className="learning-hero">
        <div className="container">
          <span className="learning-eyebrow">
            THE SCIENTIFIC KNOWLEDGE LIBRARY
          </span>

          <h1>
            Build your scientific <span>foundations.</span>
          </h1>

          <p>
            Explore the mathematical language, physical principles and essential
            concepts behind scientific equations. Learn systematically, from
            fundamental notation to advanced mathematical methods.
          </p>

          <div className="learning-hero-stats">
            <div>
              <BookOpen size={19} />
              <strong>06</strong>
              <span>Resource collections</span>
            </div>

            <div>
              <GraduationCap size={19} />
              <strong>All levels</strong>
              <span>Learning pathways</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY */}

      <section className="section learning-library-section">
        <div className="container">
          <div className="learning-library-heading">
            <div>
              <span className="learning-eyebrow">EXPLORE AND LEARN</span>

              <h2>Learning Resources</h2>

              <p>
                Choose a collection and strengthen your understanding of
                scientific concepts.
              </p>
            </div>

            <span className="learning-results-count">
              {filteredResources.length} collections
            </span>
          </div>

          {/* SEARCH */}

          <div className="learning-controls">
            <LearningSearch value={search} onChange={setSearch} />

            <select
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              aria-label="Filter learning resources by subject"
            >
              <option value="All">All disciplines</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          {/* RESOURCE CARDS */}

          {filteredResources.length > 0 ? (
            <div className="learning-resource-grid">
              {filteredResources.map((resource) => (
                <LearningResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="learning-empty">
              <BookOpen size={30} />

              <h3>No resources found</h3>

              <p>Try another keyword or choose a different discipline.</p>

              <button
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

      {/* LEARNING GUIDANCE */}

      <section className="learning-guidance-section">
        <div className="container">
          <div className="learning-guidance-banner">
            <div>
              <span className="learning-eyebrow">
                A SUGGESTED LEARNING APPROACH
              </span>

              <h2>Build knowledge step by step.</h2>

              <p>
                Start with mathematical notation and SI units. Strengthen your
                mathematical foundations, explore formula collections and then
                follow topic-based guides.
              </p>
            </div>

            <GraduationCap size={48} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LearningCenter;
