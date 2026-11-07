import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

import { subjects } from "../data/subjects";
import { equations } from "../data/equations";

import CategoryCard from "../components/subject/CategoryCard";
import SubjectEquationCard from "../components/subject/SubjectEquationCard";

function Subject() {
  const { subjectId } = useParams();

  const subject = subjects.find((item) => item.id === subjectId);

  if (!subject) {
    return (
      <main className="container subject-not-found">
        <h1>Subject not found</h1>
        <p>The subject you're looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </main>
    );
  }

  const subjectEquations = equations.filter(
    (equation) => equation.subject === subject.title,
  );

  const featuredEquations = subjectEquations.slice(0, 4);

  const subjectName = subject.title;

  return (
    <main className={`subject-page ${subject.color}`}>
      {/* SUBJECT HERO */}

      <section className="subject-hero">
        <div className="container">
          <Link to="/" className="subject-back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <span className="subject-eyebrow">EXPLORE THE DISCIPLINES</span>

          <h1>{subjectName}</h1>

          <h2>{subject.tagline}</h2>

          <p>{subject.overview}</p>

          <div className="subject-hero-actions">
            <Link
              to={`/explore?subject=${encodeURIComponent(subjectName)}`}
              className="btn btn-primary"
            >
              Explore {subjectName} Equations
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="subject-stat">
            <div>
              <strong>{subject.categories.length}</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>{subjectEquations.length}</strong>
              <span>Available equations</span>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECT OVERVIEW */}

      <section className="section subject-overview-section">
        <div className="container subject-overview">
          <div>
            <span className="subject-eyebrow">ABOUT THE SUBJECT</span>
            <h2>Explore {subjectName}</h2>
          </div>

          <p>{subject.description}</p>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="section subject-categories-section">
        <div className="container">
          <div className="subject-section-heading">
            <div>
              <span className="subject-eyebrow">BROWSE BY TOPIC</span>

              <h2>Explore categories</h2>

              <p>
                Discover the major areas of {subjectName.toLowerCase()}
                and explore the equations within each topic.
              </p>
            </div>

            <span className="category-count">
              {subject.categories.length} categories
            </span>
          </div>

          <div className="category-grid">
            {subject.categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                subjectId={subject.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EQUATIONS */}

      <section className="section subject-equations-section">
        <div className="container">
          <div className="subject-section-heading">
            <div>
              <span className="subject-eyebrow">EQUATIONS TO EXPLORE</span>

              <h2>Featured {subjectName} equations</h2>

              <p>Start with some important equations from this discipline.</p>
            </div>

            <Link
              to={`/explore?subject=${encodeURIComponent(subjectName)}`}
              className="subject-view-all"
            >
              View all <ArrowRight size={17} />
            </Link>
          </div>

          {featuredEquations.length > 0 ? (
            <div className="subject-equations-grid">
              {featuredEquations.map((equation) => (
                <SubjectEquationCard key={equation.id} equation={equation} />
              ))}
            </div>
          ) : (
            <div className="subject-empty">
              <BookOpen size={28} />
              <h3>Equations coming soon</h3>
              <p>We're preparing the equation library for this subject.</p>
            </div>
          )}
        </div>
      </section>

      {/* LEARNING CTA */}

      <section className="subject-learning-section">
        <div className="container">
          <div className="subject-learning-banner">
            <div>
              <span className="subject-eyebrow">KEEP EXPLORING</span>

              <h2>Go deeper into {subjectName}.</h2>

              <p>
                Discover more equations, mathematical relationships and
                scientific explanations.
              </p>
            </div>

            <Link
              to={`/explore?subject=${encodeURIComponent(subjectName)}`}
              className="btn btn-primary"
            >
              Browse Equations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Subject;
