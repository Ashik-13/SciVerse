export const popularEquations = [
  {
    id: "newtons-second-law",
    name: "Newton's Second Law",
    formula: "F = ma",
    subject: "Physics",
    category: "Classical Mechanics",
    description:
      "Describes how the net force acting on an object relates to its mass and acceleration.",
    level: "Beginner",
  },
  {
    id: "einstein-mass-energy",
    name: "Mass–Energy Equivalence",
    formula: "E = mc^2",
    subject: "Physics",
    category: "Relativity",
    description: "Expresses the equivalence between mass and energy.",
    level: "Beginner",
  },
  {
    id: "ideal-gas-law",
    name: "Ideal Gas Law",
    formula: "PV = nRT",
    subject: "Chemistry",
    category: "Chemical Thermodynamics",
    description:
      "Relates the pressure, volume, temperature and amount of an ideal gas.",
    level: "Intermediate",
  },
  {
    id: "quadratic-formula",
    name: "Quadratic Formula",
    formula: String.raw`x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}`,
    subject: "Mathematics",
    category: "Algebra",
    description:
      "Provides the solutions of a quadratic equation in standard form.",
    level: "Beginner",
  },
  {
    id: "ohms-law",
    name: "Ohm's Law",
    formula: "V = IR",
    subject: "Physics",
    category: "Electromagnetism",
    description:
      "Relates voltage, electric current and resistance in an electrical circuit.",
    level: "Beginner",
  },
  {
    id: "wave-equation",
    name: "Wave Equation",
    formula: String.raw`\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}`,
    subject: "Mathematics",
    category: "Partial Differential Equations",
    description: "Models the propagation of waves through space and time.",
    level: "Advanced",
  },
];

export const featuredVisualizations = [
  {
    id: "force-acceleration",
    title: "Force vs Acceleration",
    subject: "Classical Mechanics",
    description:
      "See how net force changes with acceleration for a constant mass of 5 kg.",
    type: "linear",
    formula: "F = ma",
    xLabel: "Acceleration (m/s²)",
    yLabel: "Force (N)",
  },
  {
    id: "wave-propagation",
    title: "Wave Propagation",
    subject: "Wave Physics",
    description:
      "Explore the shape of a travelling wave at a fixed instant in time.",
    type: "wave",
    formula: "y(x,t) = A sin(kx − ωt)",
    xLabel: "Position",
    yLabel: "Displacement",
  },
  {
    id: "exponential-decay",
    title: "Exponential Decay",
    subject: "Mathematics",
    description:
      "Understand how a quantity decreases over time at a constant proportional rate.",
    type: "decay",
    formula: "N(t) = N₀e⁻ᵏᵗ",
    xLabel: "Time",
    yLabel: "Quantity",
  },
];

export const learningResources = [
  {
    id: "symbols",
    title: "Mathematical Symbols",
    description:
      "Understand the notation and symbols used in scientific equations.",
    icon: "Sigma",
    label: "Reference Guide",
  },
  {
    id: "si-units",
    title: "SI Units",
    description:
      "Learn the International System of Units and their applications.",
    icon: "Ruler",
    label: "Study Resource",
  },
  {
    id: "constants",
    title: "Physical Constants",
    description:
      "Explore important constants used throughout physics and chemistry.",
    icon: "Atom",
    label: "Reference Guide",
  },
];
