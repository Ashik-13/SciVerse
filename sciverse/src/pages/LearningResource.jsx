import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";

import { learningResources } from "../data/learningResources";
import LearningResourceContent from "../components/learning/LearningResourceContent";

function LearningResource() {
  const { slug } = useParams();

  const resource = learningResources.find((item) => item.id === slug);

  if (!resource) {
    return (
      <main className="container learning-not-found">
        <h1>Learning resource not found</h1>

        <p>This resource is not currently available in the SciVerse library.</p>

        <Link to="/learning" className="btn btn-primary">
          Back to Learning Center
        </Link>
      </main>
    );
  }

  return (
    <main className="learning-resource-page">
      {/* RESOURCE HERO */}

      <section className="learning-resource-hero">
        <div className="container">
          <Link to="/learning" className="learning-back-link">
            <ArrowLeft size={16} />
            Back to Learning Center
          </Link>

          <div className="learning-resource-meta">
            <span>{resource.subject}</span>
            <span>{resource.level}</span>
          </div>

          <h1>{resource.title}</h1>

          <p>{resource.description}</p>

          <div className="learning-resource-overview">
            <div>
              <BookOpen size={18} />
              <span>{resource.sections.length} sections</span>
            </div>

            <div>
              <GraduationCap size={18} />
              <span>{resource.topics.length} topics</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE CONTENT */}

      <section className="section learning-resource-body">
        <div className="container learning-resource-layout">
          <div className="learning-main-content">
            <div className="learning-introduction">
              <span className="learning-eyebrow">LEARNING MATERIAL</span>

              <h2>Explore the concepts</h2>

              <p>
                Study the explanations, mathematical relationships and reference
                tables in each section. Use these foundations when exploring the
                equations in SciVerse.
              </p>
            </div>

            <LearningResourceContent sections={resource.sections} />

            <div className="learning-resource-end">
              <Link to="/learning" className="btn btn-secondary">
                <ArrowLeft size={16} />
                All learning resources
              </Link>
            </div>
          </div>

          {/* CONTENT NAVIGATION */}

          <aside className="learning-sidebar">
            <div className="learning-sidebar-inner">
              <span>IN THIS RESOURCE</span>

              {resource.sections.map((section, index) => (
                <a href={`#learning-section-${index}`} key={index}>
                  {section.title}
                </a>
              ))}
            </div>

            <div className="learning-topics-box">
              <span>TOPICS COVERED</span>

              {resource.topics.map((topic, index) => (
                <div key={index}>
                  <span>✓</span>
                  {topic}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default LearningResource;
