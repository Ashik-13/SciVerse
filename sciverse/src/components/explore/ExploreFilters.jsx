import { Search, SlidersHorizontal, X } from "lucide-react";

function ExploreFilters({
  search,
  setSearch,
  subject,
  setSubject,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  type,
  setType,
  sort,
  setSort,
  categories,
  types,
  onReset,
}) {
  return (
    <section className="explore-filters">
      <div className="explore-search">
        <Search size={20} />

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search equations, formulas, topics..."
          aria-label="Search equations"
        />

        {search && (
          <button
            type="button"
            className="clear-search"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            <X size={17} />
          </button>
        )}
      </div>

      <div className="filter-heading">
        <div>
          <SlidersHorizontal size={18} />
          <span>Filter equations</span>
        </div>

        <button type="button" className="reset-filters" onClick={onReset}>
          Reset filters <X size={15} />
        </button>
      </div>

      <div className="filter-grid">
        <label className="filter-control">
          <span>Subject</span>
          <select
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
              setCategory("All");
            }}
          >
            <option value="All">All Subjects</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </label>

        <label className="filter-control">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-control">
          <span>Difficulty</span>
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label className="filter-control">
          <span>Equation Type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="All">All Types</option>
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-control">
          <span>Sort by</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default ExploreFilters;
