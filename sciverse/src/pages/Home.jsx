import { ArrowRight, BookOpen, GraduationCap, Search } from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../components/home/Hero";
import SubjectCard from "../components/home/SubjectCard";
import SectionHeading from "../components/home/SectionHeading";
import EquationCard from "../components/home/EquationCard";
import VisualizationCard from "../components/home/VisualizationCard";
import ResourceCard from "../components/home/ResourceCard";

import { subjects } from "../data/subjects";
import {
  popularEquations,
  featuredVisualizations,
  learningResources,
} from "../data/homeContent";

function Home() {
  return (
    <>
      <Hero />

      {/* SUBJECTS */}
      <section className="section subjects-section" id="subjects">
        <div className="container">
          <SectionHeading
            eyebrow="EXPLORE THE SCIENCES"
            title="Knowledge across disciplines"
            description="Choose a subject and explore the equations that explain our world."
          />

          <div className="subjects-grid">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR EQUATIONS */}
      <section className="section equations-section" id="popular-equations">
        <div className="container">
          <div className="section-header-row">
            <SectionHeading
              eyebrow="THE BUILDING BLOCKS OF SCIENCE"
              title="Popular equations"
              description="Start with some of the most important equations across scientific disciplines."
            />

            <Link to="/explore" className="section-link">
              Explore all <ArrowRight size={17} />
            </Link>
          </div>

          <div className="equations-grid">
            {popularEquations.map((equation) => (
              <EquationCard key={equation.id} equation={equation} />
            ))}
          </div>
        </div>
      </section>

      {/* VISUALIZATIONS */}
      <section className="section visualizations-section" id="visualizations">
        <div className="container">
          <div className="section-header-row">
            <SectionHeading
              eyebrow="SEE THE SCIENCE"
              title="Explore through visualization"
              description="Visual representations help make complex scientific relationships easier to understand."
            />

            <Link to="/visualizations" className="section-link">
              View gallery <ArrowRight size={17} />
            </Link>
          </div>

          <div className="visualizations-grid">
            {featuredVisualizations.map((visualization) => (
              <VisualizationCard
                key={visualization.id}
                visualization={visualization}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING CENTER */}
      <section className="section learning-section" id="learning">
        <div className="container">
          <SectionHeading
            eyebrow="BUILD YOUR FOUNDATION"
            title="Learn beyond equations"
            description="Strengthen your scientific foundations with useful reference materials and learning resources."
          />

          <div className="resources-grid">
            {learningResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          <div className="learning-banner">
            <div className="learning-banner-icon">
              <GraduationCap size={30} />
            </div>

            <div className="learning-banner-content">
              <span>YOUR LEARNING JOURNEY</span>
              <h3>Understand the science behind every equation.</h3>
              <p>
                Explore concepts, mathematical foundations and scientific
                principles at your own pace.
              </p>
            </div>

            <Link to="/learning" className="btn btn-primary">
              Learning Center <BookOpen size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="final-cta">
        <div className="container final-cta-content">
          <span>DISCOVER. CONNECT. UNDERSTAND.</span>
          <h2>Science begins with a question.</h2>
          <p>
            Find the equations, ideas and explanations that help you understand
            the world.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Start Exploring <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
