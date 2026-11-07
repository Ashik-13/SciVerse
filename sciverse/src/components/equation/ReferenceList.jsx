import { BookOpen } from "lucide-react";

function ReferenceList({ references }) {
  return (
    <div className="reference-list">
      {references.map((reference, index) => (
        <article className="reference-item" key={index}>
          <div className="reference-icon">
            <BookOpen size={19} />
          </div>

          <div>
            <span className="reference-number">REFERENCE {index + 1}</span>

            <h3>{reference.title}</h3>

            <p>{reference.authors}</p>

            <span className="reference-publisher">
              {reference.edition} · {reference.publisher}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ReferenceList;
