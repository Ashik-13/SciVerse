export const equations = [
  {
    id: "newtons-second-law",
    name: "Newton's Second Law",
    formula: String.raw`F = ma`,
    subject: "Physics",
    category: "Classical Mechanics",
    description:
      "Describes the relationship between the net force acting on an object, its mass, and its acceleration.",
    level: "Beginner",
    type: "Fundamental Law",
    applications: [
      "Vehicle acceleration",
      "Rocket propulsion",
      "Mechanical systems",
    ],
  },
  {
    id: "einstein-mass-energy",
    name: "Mass–Energy Equivalence",
    formula: String.raw`E = mc^2`,
    subject: "Physics",
    category: "Relativity",
    description:
      "Expresses the equivalence between mass and energy, where c is the speed of light in vacuum.",
    level: "Beginner",
    type: "Fundamental Relation",
    applications: ["Nuclear energy", "Particle physics", "Astrophysics"],
  },
  {
    id: "ohms-law",
    name: "Ohm's Law",
    formula: String.raw`V = IR`,
    subject: "Physics",
    category: "Electromagnetism",
    description:
      "Relates voltage, current, and resistance for an ohmic conductor under constant physical conditions.",
    level: "Beginner",
    type: "Constitutive Relation",
    applications: ["Circuit analysis", "Electrical engineering", "Electronics"],
  },
  {
    id: "wave-equation",
    name: "Wave Equation",
    formula: String.raw`\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}`,
    subject: "Physics",
    category: "Optics",
    description:
      "A partial differential equation describing the propagation of waves in a medium.",
    level: "Advanced",
    type: "Differential Equation",
    applications: ["Acoustics", "Vibrations", "Wave propagation"],
  },
  {
    id: "first-law-thermodynamics",
    name: "First Law of Thermodynamics",
    formula: String.raw`\Delta U = Q - W`,
    subject: "Physics",
    category: "Thermodynamics",
    description:
      "Expresses conservation of energy for a thermodynamic system using the convention that W is work done by the system.",
    level: "Intermediate",
    type: "Conservation Law",
    applications: ["Heat engines", "Refrigeration", "Energy systems"],
  },
  {
    id: "fourier-law",
    name: "Fourier's Law of Heat Conduction",
    formula: String.raw`\dot{Q} = -kA\frac{dT}{dx}`,
    subject: "Physics",
    category: "Heat Transfer",
    description:
      "Relates conductive heat-transfer rate to the temperature gradient for one-dimensional conduction.",
    level: "Intermediate",
    type: "Constitutive Law",
    applications: ["Thermal insulation", "Heat exchangers", "Thermal design"],
  },

  // NEW PHYSICS EQUATIONS

  {
    id: "first-equation-of-motion",
    name: "First Equation of Motion",
    formula: String.raw`v = u + at`,
    subject: "Physics",
    category: "Kinematics",
    description:
      "Relates final velocity to initial velocity, constant acceleration, and elapsed time.",
    level: "Beginner",
    type: "Kinematic Equation",
    applications: [
      "Uniformly accelerated motion",
      "Vehicle motion analysis",
      "Motion experiments",
    ],
  },
  {
    id: "second-equation-of-motion",
    name: "Second Equation of Motion",
    formula: String.raw`s = ut + \frac{1}{2}at^2`,
    subject: "Physics",
    category: "Kinematics",
    description:
      "Determines displacement from initial velocity, constant acceleration, and elapsed time.",
    level: "Beginner",
    type: "Kinematic Equation",
    applications: [
      "Free-fall calculations",
      "Vehicle displacement",
      "Motion analysis",
    ],
  },
  {
    id: "third-equation-of-motion",
    name: "Third Equation of Motion",
    formula: String.raw`v^2 = u^2 + 2as`,
    subject: "Physics",
    category: "Kinematics",
    description:
      "Relates initial velocity, final velocity, constant acceleration, and displacement without requiring time.",
    level: "Beginner",
    type: "Kinematic Equation",
    applications: [
      "Braking distance calculations",
      "Free-fall motion",
      "Accelerated motion",
    ],
  },
  {
    id: "linear-momentum",
    name: "Linear Momentum",
    formula: String.raw`p = mv`,
    subject: "Physics",
    category: "Classical Mechanics",
    description:
      "Defines the linear momentum of an object as the product of its mass and velocity.",
    level: "Beginner",
    type: "Fundamental Relation",
    applications: [
      "Collision analysis",
      "Momentum conservation",
      "Rocket motion",
    ],
  },
  {
    id: "kinetic-energy",
    name: "Kinetic Energy",
    formula: String.raw`K = \frac{1}{2}mv^2`,
    subject: "Physics",
    category: "Work and Energy",
    description:
      "Expresses the kinetic energy of an object in terms of its mass and speed.",
    level: "Beginner",
    type: "Energy Equation",
    applications: [
      "Vehicle energy analysis",
      "Mechanical systems",
      "Collision calculations",
    ],
  },
  {
    id: "gravitational-potential-energy",
    name: "Gravitational Potential Energy",
    formula: String.raw`U = mgh`,
    subject: "Physics",
    category: "Work and Energy",
    description:
      "Gives the change in gravitational potential energy near Earth's surface for a change in height.",
    level: "Beginner",
    type: "Energy Equation",
    applications: [
      "Lifting objects",
      "Hydropower systems",
      "Mechanical energy conservation",
    ],
  },
  {
    id: "work-done-by-force",
    name: "Work Done by a Constant Force",
    formula: String.raw`W = Fd\cos\theta`,
    subject: "Physics",
    category: "Work and Energy",
    description:
      "Calculates the work done by a constant force through a displacement, where theta is the angle between force and displacement.",
    level: "Beginner",
    type: "Work Relation",
    applications: [
      "Mechanical work calculations",
      "Lifting and pushing objects",
      "Energy transfer analysis",
    ],
  },
  {
    id: "mechanical-power",
    name: "Mechanical Power",
    formula: String.raw`P = \frac{W}{t}`,
    subject: "Physics",
    category: "Work and Energy",
    description:
      "Defines average mechanical power as the work transferred per unit time.",
    level: "Beginner",
    type: "Rate Equation",
    applications: [
      "Motor performance",
      "Engine power estimation",
      "Mechanical system design",
    ],
  },
  {
    id: "hookes-law",
    name: "Hooke's Law",
    formula: String.raw`F = -kx`,
    subject: "Physics",
    category: "Oscillations",
    description:
      "Describes the restoring force of an ideal linear spring within its elastic limit.",
    level: "Intermediate",
    type: "Constitutive Law",
    applications: [
      "Spring-mass systems",
      "Mechanical vibration",
      "Elastic material behaviour",
    ],
  },
  {
    id: "universal-gravitation",
    name: "Newton's Law of Universal Gravitation",
    formula: String.raw`F = G\frac{m_1m_2}{r^2}`,
    subject: "Physics",
    category: "Gravitation",
    description:
      "Describes the magnitude of the gravitational attraction between two point masses separated by a distance r.",
    level: "Intermediate",
    type: "Fundamental Law",
    applications: [
      "Planetary motion",
      "Satellite orbits",
      "Gravitational force calculations",
    ],
  },

  // CHEMISTRY EQUATIONS

  {
    id: "ideal-gas-law",
    name: "Ideal Gas Law",
    formula: String.raw`PV = nRT`,
    subject: "Chemistry",
    category: "Chemical Thermodynamics",
    description:
      "Relates pressure, volume, amount of substance, and absolute temperature for an ideal gas.",
    level: "Intermediate",
    type: "Equation of State",
    applications: [
      "Gas calculations",
      "Chemical processes",
      "Thermodynamic systems",
    ],
  },
  {
    id: "arrhenius-equation",
    name: "Arrhenius Equation",
    formula: String.raw`k = A e^{-E_a/(RT)}`,
    subject: "Chemistry",
    category: "Chemical Kinetics",
    description:
      "Describes the temperature dependence of a chemical reaction rate constant.",
    level: "Intermediate",
    type: "Kinetic Equation",
    applications: [
      "Reaction kinetics",
      "Activation energy",
      "Reaction engineering",
    ],
  },
  {
    id: "chemical-equilibrium",
    name: "Equilibrium Constant",
    formula: String.raw`K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}`,
    subject: "Chemistry",
    category: "Chemical Equilibrium",
    description:
      "Expresses the equilibrium concentration ratio for a reaction aA + bB ⇌ cC + dD.",
    level: "Intermediate",
    type: "Equilibrium Relation",
    applications: [
      "Reaction prediction",
      "Chemical equilibrium",
      "Industrial chemistry",
    ],
  },
  {
    id: "nernst-equation",
    name: "Nernst Equation",
    formula: String.raw`E = E^\circ - \frac{RT}{nF}\ln Q`,
    subject: "Chemistry",
    category: "Electrochemistry",
    description:
      "Relates an electrochemical cell potential to its standard potential and reaction quotient.",
    level: "Advanced",
    type: "Electrochemical Relation",
    applications: [
      "Electrochemical cells",
      "Battery analysis",
      "Corrosion studies",
    ],
  },

  // MATHEMATICS EQUATIONS

  {
    id: "quadratic-formula",
    name: "Quadratic Formula",
    formula: String.raw`x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}`,
    subject: "Mathematics",
    category: "Algebra",
    description:
      "Provides the roots of a quadratic equation in standard form ax² + bx + c = 0, where a is nonzero.",
    level: "Beginner",
    type: "Algebraic Formula",
    applications: [
      "Polynomial equations",
      "Engineering calculations",
      "Mathematical modelling",
    ],
  },
  {
    id: "pythagorean-theorem",
    name: "Pythagorean Theorem",
    formula: String.raw`a^2 + b^2 = c^2`,
    subject: "Mathematics",
    category: "Geometry",
    description:
      "Relates the side lengths of a right-angled triangle, with c representing the hypotenuse.",
    level: "Beginner",
    type: "Geometric Theorem",
    applications: ["Geometry", "Distance calculations", "Engineering design"],
  },
  {
    id: "derivative-power-rule",
    name: "Power Rule of Differentiation",
    formula: String.raw`\frac{d}{dx}x^n = nx^{n-1}`,
    subject: "Mathematics",
    category: "Calculus",
    description:
      "Defines the derivative of a power function with respect to its variable.",
    level: "Intermediate",
    type: "Calculus Rule",
    applications: ["Rate of change", "Optimization", "Mathematical modelling"],
  },
  {
    id: "quadratic-mean",
    name: "Arithmetic Mean",
    formula: String.raw`\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i`,
    subject: "Mathematics",
    category: "Probability and Statistics",
    description:
      "Calculates the arithmetic average of a collection of n numerical observations.",
    level: "Beginner",
    type: "Statistical Formula",
    applications: ["Data analysis", "Statistics", "Experimental measurements"],
  },
];

export const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

export const equationTypes = [
  "Fundamental Law",
  "Fundamental Relation",
  "Constitutive Relation",
  "Differential Equation",
  "Conservation Law",
  "Constitutive Law",
  "Equation of State",
  "Kinetic Equation",
  "Equilibrium Relation",
  "Electrochemical Relation",
  "Algebraic Formula",
  "Geometric Theorem",
  "Calculus Rule",
  "Statistical Formula",
  "Kinematic Equation",
  "Energy Equation",
  "Work Relation",
  "Rate Equation",
];
