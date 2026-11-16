import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import ExploreFilters from "../components/explore/ExploreFilters";
import EquationResultCard from "../components/explore/EquationResultCard";

import { equations, equationTypes } from "../data/equations";

function normalizeSearchText(value = "") {
  const superscripts = {
    "⁰": "^0",
    "¹": "^1",
    "²": "^2",
    "³": "^3",
    "⁴": "^4",
    "⁵": "^5",
    "⁶": "^6",
    "⁷": "^7",
    "⁸": "^8",
    "⁹": "^9",
  };

  return String(value)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (char) => superscripts[char])
    .replace(/[−–—]/g, "-")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[{}\s\\]/g, "");
}

const ITEMS_PER_PAGE = 6;

function Explore() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(() => searchParams.get("search") || "");
  const [subject, setSubject] = useState(searchParams.get("subject") || "All");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [difficulty, setDifficulty] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("name-asc");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const relevantEquations = equations.filter((equation) => {
      return subject === "All" || equation.subject === subject;
    });

    return [
      ...new Set(relevantEquations.map((equation) => equation.category)),
    ].sort();
  }, [subject]);

  const filteredEquations = useMemo(() => {
    const query = normalizeSearchText(search);

    const result = equations.filter((equation) => {
      const searchableContent = normalizeSearchText(
        [
          equation.name,
          equation.formula,
          equation.subject,
          equation.category,
          equation.description,
          equation.type,
          ...equation.applications,
        ].join(" "),
      );

      const matchesSearch = !query || searchableContent.includes(query);

      const matchesSubject = subject === "All" || equation.subject === subject;

      const matchesCategory =
        category === "All" || equation.category === category;

      const matchesDifficulty =
        difficulty === "All" || equation.level === difficulty;

      const matchesType = type === "All" || equation.type === type;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesCategory &&
        matchesDifficulty &&
        matchesType
      );
    });

    if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "difficulty") {
      const order = {
        Beginner: 1,
        Intermediate: 2,
        Advanced: 3,
      };

      result.sort((a, b) => order[a.level] - order[b.level]);
    }

    return result;
  }, [search, subject, category, difficulty, type, sort]);

  const totalPages = Math.ceil(filteredEquations.length / ITEMS_PER_PAGE);

  const currentPage = Math.min(page, Math.max(totalPages, 1));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleEquations = filteredEquations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const resetFilters = () => {
    setSearch("");
    setSubject("All");
    setCategory("All");
    setDifficulty("All");
    setType("All");
    setSort("name-asc");
    setPage(1);
  };

  const changeFilter = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  return (
    <main className="explore-page">
      <section className="explore-hero">
        <div className="container explore-hero-content">
          <span className="explore-eyebrow">SCIENTIFIC KNOWLEDGE LIBRARY</span>

          <h1>
            Explore <span>Equations.</span>
          </h1>

          <p>
            Discover the mathematical relationships that explain the physical
            world, chemical processes and abstract ideas.
          </p>

          <div className="explore-hero-stats">
            <div>
              <strong>{equations.length}</strong>
              <span>Equations</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Disciplines</span>
            </div>

            <div>
              <strong>14+</strong>
              <span>Categories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-content section">
        <div className="container">
          <ExploreFilters
            search={search}
            setSearch={changeFilter(setSearch)}
            subject={subject}
            setSubject={changeFilter(setSubject)}
            category={category}
            setCategory={changeFilter(setCategory)}
            difficulty={difficulty}
            setDifficulty={changeFilter(setDifficulty)}
            type={type}
            setType={changeFilter(setType)}
            sort={sort}
            setSort={changeFilter(setSort)}
            categories={categories}
            types={equationTypes}
            onReset={resetFilters}
          />

          <div className="results-heading">
            <div>
              <h2>Browse equations</h2>
              <p>
                {filteredEquations.length} equation
                {filteredEquations.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <span className="results-page-label">
              Page {currentPage} of {Math.max(totalPages, 1)}
            </span>
          </div>

          {visibleEquations.length > 0 ? (
            <div className="results-grid">
              {visibleEquations.map((equation) => (
                <EquationResultCard key={equation.id} equation={equation} />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <div className="empty-results-icon">
                <Search size={28} />
              </div>

              <h3>No equations found</h3>

              <p>Try changing your search terms or removing some filters.</p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={resetFilters}
              >
                Clear all filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (number) => (
                  <button
                    type="button"
                    key={number}
                    className={currentPage === number ? "active" : ""}
                    onClick={() => setPage(number)}
                    aria-label={`Go to page ${number}`}
                    aria-current={currentPage === number ? "page" : undefined}
                  >
                    {number}
                  </button>
                ),
              )}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Explore;
