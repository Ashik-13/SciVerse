import { Search } from "lucide-react";

function LearningSearch({ value, onChange }) {
  return (
    <div className="learning-search">
      <Search size={19} />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search learning resources..."
        aria-label="Search learning resources"
      />
    </div>
  );
}

export default LearningSearch;
