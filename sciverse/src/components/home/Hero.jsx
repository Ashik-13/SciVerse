import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    navigate(`/explore?search=${encodeURIComponent(query)}`);
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-label">THE SCIENCE KNOWLEDGE PLATFORM</span>

        <h1>
          Explore the
          <span> Language of Science.</span>
        </h1>

        <p className="hero-description">
          Discover scientific equations, understand the mathematics behind them,
          and explore how they describe the world around us.
        </p>

        <div className="hero-actions">
          <Link to="/explore" className="btn btn-primary">
            Explore Equations <ArrowRight size={18} />
          </Link>

          <Link to="/learning" className="btn btn-secondary">
            Start Learning
          </Link>
        </div>

        <form className="hero-search" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search equations, concepts, or topics..."
            aria-label="Search equations and topics"
          />

          <button type="submit" className="search-submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
