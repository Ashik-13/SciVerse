export const learningResources = [
  {
    id: "mathematical-symbols",
    title: "Mathematical Symbols and Notation",
    subject: "Mathematics",
    icon: "sigma",
    description:
      "Understand the symbols and notation used throughout mathematics, physics and engineering.",
    level: "Beginner",
    topics: [
      "Greek letters",
      "Algebraic symbols",
      "Calculus notation",
      "Vector notation",
      "Set theory and logic",
    ],
    sections: [
      {
        title: "Greek letters",
        description:
          "Greek letters are widely used to represent physical quantities, mathematical constants and variables.",
        items: [
          {
            symbol: String.raw`\alpha`,
            name: "Alpha",
            meaning:
              "Angular acceleration, thermal diffusivity or a coefficient.",
          },
          {
            symbol: String.raw`\beta`,
            name: "Beta",
            meaning: "A coefficient, angle or thermal expansion parameter.",
          },
          {
            symbol: String.raw`\Delta`,
            name: "Delta",
            meaning: "A finite change in a quantity.",
          },
          {
            symbol: String.raw`\theta`,
            name: "Theta",
            meaning: "An angle or temperature parameter.",
          },
          {
            symbol: String.raw`\lambda`,
            name: "Lambda",
            meaning: "Wavelength or an eigenvalue.",
          },
          {
            symbol: String.raw`\mu`,
            name: "Mu",
            meaning: "Dynamic viscosity, coefficient of friction or a mean.",
          },
          {
            symbol: String.raw`\rho`,
            name: "Rho",
            meaning:
              "Mass density or electrical resistivity, depending on context.",
          },
          {
            symbol: String.raw`\sigma`,
            name: "Sigma",
            meaning:
              "Summation, stress or electrical conductivity, depending on context.",
          },
          {
            symbol: String.raw`\omega`,
            name: "Omega",
            meaning: "Angular frequency or angular velocity.",
          },
          {
            symbol: String.raw`\psi`,
            name: "Psi",
            meaning: "A wavefunction in quantum mechanics.",
          },
        ],
      },
      {
        title: "Common mathematical operators",
        description:
          "Operators indicate mathematical operations performed on quantities.",
        items: [
          {
            symbol: "+",
            name: "Addition",
            meaning: "Combines two or more quantities.",
          },
          {
            symbol: String.raw`\sum`,
            name: "Summation",
            meaning: "Adds a sequence of terms.",
          },
          {
            symbol: String.raw`\prod`,
            name: "Product",
            meaning: "Multiplies a sequence of terms.",
          },
          {
            symbol: String.raw`\sqrt{x}`,
            name: "Square root",
            meaning: "A value whose square equals x.",
          },
          {
            symbol: String.raw`\int`,
            name: "Integral",
            meaning: "Represents accumulation or integration.",
          },
          {
            symbol: String.raw`\partial`,
            name: "Partial derivative",
            meaning:
              "Derivative with respect to one variable while other independent variables are held fixed.",
          },
          {
            symbol: String.raw`\nabla`,
            name: "Del operator",
            meaning: "Used for gradient, divergence and curl.",
          },
          {
            symbol: String.raw`\infty`,
            name: "Infinity",
            meaning: "An unbounded quantity or limit.",
          },
        ],
      },
      {
        title: "Calculus notation",
        description:
          "Calculus notation describes rates of change and accumulated quantities.",
        items: [
          {
            symbol: String.raw`\frac{dy}{dx}`,
            name: "Ordinary derivative",
            meaning: "Rate of change of y with respect to x.",
          },
          {
            symbol: String.raw`\frac{d^2y}{dx^2}`,
            name: "Second derivative",
            meaning: "Rate of change of the first derivative.",
          },
          {
            symbol: String.raw`\frac{\partial T}{\partial t}`,
            name: "Partial derivative",
            meaning: "Rate of change of T with respect to time.",
          },
          {
            symbol: String.raw`\int_a^b f(x)\,dx`,
            name: "Definite integral",
            meaning: "Accumulated value over an interval.",
          },
        ],
      },
    ],
  },

  {
    id: "si-units-dimensions",
    title: "SI Units and Dimensions",
    subject: "Physics",
    icon: "ruler",
    description:
      "Learn the International System of Units, derived units and dimensional analysis.",
    level: "Beginner",
    topics: [
      "Seven SI base units",
      "SI derived units",
      "Dimensional formulas",
      "Dimensional homogeneity",
      "Unit conversion",
    ],
    sections: [
      {
        title: "The seven SI base units",
        description: "The SI system is founded on seven base units.",
        table: {
          headers: ["Physical quantity", "SI unit", "Symbol"],
          rows: [
            ["Length", "metre", "m"],
            ["Mass", "kilogram", "kg"],
            ["Time", "second", "s"],
            ["Electric current", "ampere", "A"],
            ["Thermodynamic temperature", "kelvin", "K"],
            ["Amount of substance", "mole", "mol"],
            ["Luminous intensity", "candela", "cd"],
          ],
        },
      },
      {
        title: "Important derived SI units",
        description:
          "Derived units are formed from combinations of base units.",
        table: {
          headers: ["Quantity", "Unit", "Symbol", "Base-unit expression"],
          rows: [
            ["Force", "newton", "N", "kg m s⁻²"],
            ["Energy", "joule", "J", "kg m² s⁻²"],
            ["Power", "watt", "W", "kg m² s⁻³"],
            ["Pressure", "pascal", "Pa", "kg m⁻¹ s⁻²"],
            ["Frequency", "hertz", "Hz", "s⁻¹"],
            ["Electric charge", "coulomb", "C", "A s"],
            ["Potential difference", "volt", "V", "kg m² s⁻³ A⁻¹"],
            ["Resistance", "ohm", "Ω", "kg m² s⁻³ A⁻²"],
          ],
        },
      },
      {
        title: "Common dimensional formulas",
        description:
          "Dimensional formulas express quantities using fundamental dimensions.",
        table: {
          headers: ["Quantity", "Dimensional formula"],
          rows: [
            ["Velocity", "LT⁻¹"],
            ["Acceleration", "LT⁻²"],
            ["Force", "MLT⁻²"],
            ["Momentum", "MLT⁻¹"],
            ["Work / Energy", "ML²T⁻²"],
            ["Power", "ML²T⁻³"],
            ["Pressure", "ML⁻¹T⁻²"],
            ["Density", "ML⁻³"],
          ],
        },
      },
      {
        title: "Dimensional homogeneity",
        description:
          "A physically meaningful equation must have consistent dimensions across every additive term and on both sides of an equality.",
        formula: String.raw`[F] = [ma] = MLT^{-2}`,
      },
    ],
  },

  {
    id: "physical-constants",
    title: "Physical Constants",
    subject: "Physics",
    icon: "atom",
    description:
      "Explore fundamental constants that appear throughout physics, chemistry and engineering.",
    level: "Intermediate",
    topics: [
      "Universal constants",
      "Electromagnetic constants",
      "Thermodynamic constants",
      "Atomic and quantum constants",
    ],
    sections: [
      {
        title: "Universal and fundamental constants",
        description: "Selected constants with their SI values.",
        table: {
          headers: ["Constant", "Symbol", "Value", "SI unit"],
          rows: [
            ["Speed of light in vacuum", "c", "299,792,458", "m s⁻¹"],
            ["Planck constant", "h", "6.62607015 × 10⁻³⁴", "J s"],
            ["Reduced Planck constant", "ℏ", "1.054571817... × 10⁻³⁴", "J s"],
            ["Elementary charge", "e", "1.602176634 × 10⁻¹⁹", "C"],
            ["Boltzmann constant", "kB", "1.380649 × 10⁻²³", "J K⁻¹"],
            ["Avogadro constant", "NA", "6.02214076 × 10²³", "mol⁻¹"],
            ["Gravitational constant", "G", "6.67430 × 10⁻¹¹", "m³ kg⁻¹ s⁻²"],
          ],
        },
      },
      {
        title: "Electromagnetic constants",
        description:
          "Constants used in electromagnetism and electrical engineering.",
        table: {
          headers: ["Constant", "Symbol", "Approximate value", "SI unit"],
          rows: [
            ["Vacuum permeability", "μ₀", "1.25663706127 × 10⁻⁶", "H m⁻¹"],
            ["Vacuum permittivity", "ε₀", "8.8541878188 × 10⁻¹²", "F m⁻¹"],
          ],
        },
      },
      {
        title: "Thermodynamic constants",
        description:
          "Constants frequently used in thermodynamics and chemical calculations.",
        table: {
          headers: ["Constant", "Symbol", "Value", "SI unit"],
          rows: [
            ["Molar gas constant", "R", "8.314462618...", "J mol⁻¹ K⁻¹"],
            ["Boltzmann constant", "kB", "1.380649 × 10⁻²³", "J K⁻¹"],
          ],
        },
      },
    ],
  },

  {
    id: "mathematical-foundations",
    title: "Mathematical Foundations",
    subject: "Mathematics",
    icon: "function-square",
    description:
      "Build the mathematical knowledge needed to understand advanced scientific equations.",
    level: "Beginner to Advanced",
    topics: [
      "Algebra and functions",
      "Trigonometry",
      "Differential and integral calculus",
      "Vectors and matrices",
      "Differential equations",
      "Complex numbers",
    ],
    sections: [
      {
        title: "Algebra and functions",
        description:
          "Algebra provides the foundation for manipulating equations.",
        formulas: [
          { name: "Linear equation", formula: String.raw`ax+b=0` },
          { name: "Quadratic equation", formula: String.raw`ax^2+bx+c=0` },
          { name: "Exponential function", formula: String.raw`y=Ae^{kx}` },
        ],
      },
      {
        title: "Trigonometry",
        description:
          "Trigonometric functions describe relationships between angles and sides.",
        formulas: [
          {
            name: "Pythagorean identity",
            formula: String.raw`\sin^2\theta+\cos^2\theta=1`,
          },
          {
            name: "Tangent identity",
            formula: String.raw`\tan\theta=\frac{\sin\theta}{\cos\theta}`,
          },
          {
            name: "Sine rule",
            formula: String.raw`\frac{a}{\sin A}=\frac{b}{\sin B}`,
          },
        ],
      },
      {
        title: "Differential and integral calculus",
        description: "Calculus is used to describe change and accumulation.",
        formulas: [
          { name: "Power rule", formula: String.raw`\frac{d}{dx}x^n=nx^{n-1}` },
          {
            name: "Integral power rule",
            formula: String.raw`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne -1`,
          },
          {
            name: "Fundamental theorem of calculus",
            formula: String.raw`\int_a^b f(x)\,dx=F(b)-F(a)`,
          },
        ],
      },
      {
        title: "Vectors and matrices",
        description:
          "Vector and matrix methods are central to mechanics, electromagnetism and numerical analysis.",
        formulas: [
          {
            name: "Vector magnitude",
            formula: String.raw`|\vec{a}|=\sqrt{a_x^2+a_y^2+a_z^2}`,
          },
          {
            name: "Dot product",
            formula: String.raw`\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta`,
          },
          { name: "Matrix multiplication", formula: String.raw`C=AB` },
        ],
      },
      {
        title: "Differential equations",
        description:
          "Differential equations relate unknown functions to their derivatives.",
        formulas: [
          {
            name: "First-order example",
            formula: String.raw`\frac{dy}{dx}+Py=Q`,
          },
          {
            name: "Second-order linear equation",
            formula: String.raw`ay''+by'+cy=0`,
          },
          {
            name: "Wave equation",
            formula: String.raw`\frac{\partial^2 y}{\partial t^2}=v^2\frac{\partial^2 y}{\partial x^2}`,
          },
        ],
      },
      {
        title: "Complex numbers",
        description:
          "Complex numbers extend the real number system using the imaginary unit.",
        formulas: [
          { name: "Imaginary unit", formula: String.raw`i^2=-1` },
          { name: "Complex number", formula: String.raw`z=a+ib` },
          {
            name: "Euler formula",
            formula: String.raw`e^{i\theta}=\cos\theta+i\sin\theta`,
          },
        ],
      },
    ],
  },

  {
    id: "formula-collections",
    title: "Formula Collections",
    subject: "All disciplines",
    icon: "book-open",
    description:
      "Browse essential scientific formulas grouped by subject and topic.",
    level: "All levels",
    topics: [
      "Classical mechanics",
      "Thermodynamics",
      "Electromagnetism",
      "Chemical kinetics",
      "Calculus",
      "Probability and statistics",
    ],
    sections: [
      {
        title: "Classical mechanics",
        description: "Important relationships used in introductory mechanics.",
        formulas: [
          {
            name: "Newton's second law",
            formula: String.raw`\sum \vec{F}=m\vec{a}`,
          },
          { name: "Linear momentum", formula: String.raw`\vec{p}=m\vec{v}` },
          { name: "Kinetic energy", formula: String.raw`KE=\frac{1}{2}mv^2` },
          {
            name: "Gravitational potential energy",
            formula: String.raw`U=mgh`,
          },
        ],
      },
      {
        title: "Thermodynamics",
        description: "Selected thermodynamic relationships.",
        formulas: [
          { name: "Ideal gas law", formula: String.raw`PV=nRT` },
          { name: "First law", formula: String.raw`\Delta U=Q-W` },
          {
            name: "Heat transfer by conduction",
            formula: String.raw`\dot{Q}=-kA\frac{dT}{dx}`,
          },
        ],
      },
      {
        title: "Electromagnetism",
        description: "Fundamental electrical and magnetic relationships.",
        formulas: [
          { name: "Ohm's law", formula: String.raw`V=IR` },
          { name: "Electric power", formula: String.raw`P=VI` },
          {
            name: "Coulomb force magnitude",
            formula: String.raw`F=k_e\frac{|q_1q_2|}{r^2}`,
          },
        ],
      },
      {
        title: "Chemical kinetics",
        description: "Equations used to describe chemical reaction rates.",
        formulas: [
          { name: "Arrhenius equation", formula: String.raw`k=Ae^{-E_a/(RT)}` },
          {
            name: "First-order rate law",
            formula: String.raw`[A]_t=[A]_0e^{-kt}`,
          },
        ],
      },
      {
        title: "Calculus",
        description: "Frequently used differentiation and integration rules.",
        formulas: [
          {
            name: "Derivative of sine",
            formula: String.raw`\frac{d}{dx}\sin x=\cos x`,
          },
          {
            name: "Derivative of exponential",
            formula: String.raw`\frac{d}{dx}e^x=e^x`,
          },
          {
            name: "Integration of a constant",
            formula: String.raw`\int a\,dx=ax+C`,
          },
        ],
      },
    ],
  },

  {
    id: "topic-learning-guides",
    title: "Topic-Based Learning Guides",
    subject: "All disciplines",
    icon: "graduation-cap",
    description:
      "Follow structured topic sequences to develop a deeper understanding of scientific concepts.",
    level: "Beginner to Advanced",
    topics: [
      "Classical mechanics",
      "Thermodynamics and heat transfer",
      "Fluid mechanics",
      "Electromagnetism",
      "Quantum mechanics",
      "Chemical kinetics",
    ],
    sections: [
      {
        title: "Classical mechanics",
        description: "A suggested sequence for learning motion and forces.",
        steps: [
          "Scalars, vectors and coordinate systems",
          "Displacement, velocity and acceleration",
          "Newton's laws of motion",
          "Work, energy and power",
          "Linear momentum and collisions",
          "Rotational motion and torque",
        ],
      },
      {
        title: "Thermodynamics and heat transfer",
        description: "Understand thermal systems and energy transfer.",
        steps: [
          "Temperature, heat and thermodynamic equilibrium",
          "Properties of pure substances",
          "First law of thermodynamics",
          "Second law and entropy",
          "Conduction, convection and radiation",
          "Heat exchangers and thermal applications",
        ],
      },
      {
        title: "Fluid mechanics",
        description: "Learn how fluids behave at rest and in motion.",
        steps: [
          "Fluid properties and pressure",
          "Hydrostatics",
          "Continuity equation",
          "Bernoulli equation",
          "Momentum equation",
          "Navier–Stokes equations and viscous flow",
        ],
      },
      {
        title: "Electromagnetism",
        description:
          "Study electric and magnetic fields and their interactions.",
        steps: [
          "Electric charge and Coulomb’s law",
          "Electric fields and potential",
          "Capacitance and dielectrics",
          "Current and resistance",
          "Magnetic fields and electromagnetic induction",
          "Maxwell’s equations",
        ],
      },
      {
        title: "Quantum mechanics",
        description: "Develop an introductory understanding of quantum theory.",
        steps: [
          "Wave-particle duality",
          "Wavefunctions and probability density",
          "The Schrödinger equation",
          "Particle in a one-dimensional box",
          "Quantum operators and expectation values",
          "Quantum applications",
        ],
      },
      {
        title: "Chemical kinetics",
        description:
          "Understand reaction rates and the factors that influence them.",
        steps: [
          "Reaction rates and rate expressions",
          "Rate laws and reaction order",
          "Integrated rate equations",
          "Temperature dependence of reaction rates",
          "Activation energy and the Arrhenius equation",
          "Reaction mechanisms and catalysis",
        ],
      },
    ],
  },
];
