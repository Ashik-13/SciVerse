export const equationDetails = {
  "newtons-second-law": {
    introduction:
      "Newton's Second Law describes how the net external force acting on an object determines its acceleration. It is one of the central principles of classical mechanics.",

    interpretation:
      "The acceleration of an object is proportional to the net force acting on it and inversely proportional to its mass. For a constant mass, doubling the net force doubles the acceleration, while doubling the mass halves the acceleration for the same net force.",

    formula: String.raw`\sum \mathbf{F} = m\mathbf{a}`,

    variables: [
      {
        symbol: String.raw`\sum \vec{F}`,
        name: "Net external force",
        description: "Vector sum of all external forces acting on the object.",
        unit: "newton (N)",
        dimension: String.raw`MLT^{-2}`,
      },
      {
        symbol: "m",
        name: "Mass",
        description: "Inertial mass of the object.",
        unit: "kilogram (kg)",
        dimension: "M",
      },
      {
        symbol: String.raw`\vec{a}`,
        name: "Acceleration",
        description: "Rate of change of velocity with respect to time.",
        unit: "metre per second squared (m/s²)",
        dimension: String.raw`LT^{-2}`,
      },
    ],

    derivation: [
      {
        title: "Linear momentum",
        explanation:
          "The linear momentum of an object is defined as the product of its mass and velocity.",
        formula: String.raw`\mathbf{p} = m\mathbf{v}`,
      },
      {
        title: "Newton's momentum principle",
        explanation:
          "The net external force is equal to the time rate of change of linear momentum.",
        formula: String.raw`\sum \mathbf{F} = \frac{d\mathbf{p}}{dt}`,
      },
      {
        title: "Apply the constant-mass condition",
        explanation:
          "For a system with constant mass, differentiate momentum with respect to time.",
        formula: String.raw`\sum \mathbf{F} = m\frac{d\mathbf{v}}{dt}`,
      },
      {
        title: "Use the definition of acceleration",
        explanation:
          "Since acceleration is the time derivative of velocity, the familiar form follows.",
        formula: String.raw`\boxed{\sum \mathbf{F} = m\mathbf{a}}`,
      },
    ],

    assumptions: [
      "The equation is applied in an inertial reference frame.",
      "The mass of the object remains constant in this form.",
      "The classical, non-relativistic approximation is appropriate.",
      "The forces included are the net external forces acting on the system.",
    ],

    limitations: [
      "At speeds comparable to the speed of light, relativistic mechanics is required.",
      "For variable-mass systems, the momentum balance must be formulated carefully.",
      "For extended bodies, rotational motion and torque may also need to be considered.",
    ],

    applications: [
      "Calculating the acceleration of vehicles under a net driving force.",
      "Analysing forces acting on machines and mechanical components.",
      "Estimating the motion of objects under gravity.",
      "Understanding the motion of engineering systems and mechanisms.",
    ],

    relatedEquations: ["first-law-thermodynamics"],

    references: [
      {
        authors: "Halliday, D., Resnick, R., and Walker, J.",
        title: "Fundamentals of Physics",
        edition: "11th edition",
        publisher: "Wiley",
      },
      {
        authors: "Taylor, J. R.",
        title: "Classical Mechanics",
        edition: "University Science Books edition",
        publisher: "University Science Books",
      },
    ],
  },

  "ideal-gas-law": {
    introduction:
      "The Ideal Gas Law is an equation of state that relates the pressure, volume, temperature and amount of an ideal gas. It combines the relationships observed in classical gas laws.",

    interpretation:
      "For a fixed amount of gas at constant temperature, pressure decreases as volume increases. At fixed volume, pressure increases with absolute temperature. The equation provides a useful approximation for many gases under conditions where intermolecular effects are small.",

    formula: String.raw`PV = nRT`,

    variables: [
      {
        symbol: "P",
        name: "Pressure",
        description: "Thermodynamic pressure of the gas.",
        unit: "pascal (Pa)",
        dimension: String.raw`ML^{-1}T^{-2}`,
      },
      {
        symbol: "V",
        name: "Volume",
        description: "Volume occupied by the gas.",
        unit: "cubic metre (m³)",
        dimension: String.raw`L^3`,
      },
      {
        symbol: "n",
        name: "Amount of substance",
        description: "Quantity of gas expressed in moles.",
        unit: "mole (mol)",
        dimension: "N",
      },
      {
        symbol: "R",
        name: "Universal gas constant",
        description: "Molar gas constant, approximately 8.314 J mol⁻¹ K⁻¹.",
        unit: "J mol⁻¹ K⁻¹",
        dimension: String.raw`ML^2T^{-2}N^{-1}\Theta^{-1}`,
      },
      {
        symbol: "T",
        name: "Absolute temperature",
        description: "Thermodynamic temperature measured on the Kelvin scale.",
        unit: "kelvin (K)",
        dimension: String.raw`\Theta`,
      },
    ],

    derivation: [
      {
        title: "Boyle’s law",
        explanation:
          "For a fixed amount of gas at constant temperature, pressure is inversely proportional to volume.",
        formula: String.raw`P \propto \frac{1}{V}`,
      },
      {
        title: "Charles’s law",
        explanation:
          "At constant pressure, the volume of a fixed amount of gas is proportional to absolute temperature.",
        formula: String.raw`V \propto T`,
      },
      {
        title: "Avogadro’s law",
        explanation:
          "At fixed pressure and temperature, gas volume is proportional to the amount of substance.",
        formula: String.raw`V \propto n`,
      },
      {
        title: "Combine the proportionalities",
        explanation:
          "Combining these relationships gives a proportionality involving pressure, volume, amount and temperature.",
        formula: String.raw`PV \propto nT`,
      },
      {
        title: "Introduce the universal gas constant",
        explanation:
          "The proportionality constant is the universal gas constant R.",
        formula: String.raw`\boxed{PV = nRT}`,
      },
    ],

    assumptions: [
      "Gas molecules are treated as point particles with negligible molecular volume.",
      "Intermolecular forces are neglected except during idealized collisions.",
      "Molecular collisions are assumed to be perfectly elastic.",
      "The gas is in thermodynamic equilibrium.",
    ],

    limitations: [
      "Real gases deviate from ideal behaviour at high pressures.",
      "Significant deviations occur near condensation and critical conditions.",
      "The equation does not account explicitly for molecular size or intermolecular attractions.",
    ],

    applications: [
      "Estimating gas pressure, volume or temperature.",
      "Chemical reaction and stoichiometric calculations involving gases.",
      "Thermodynamic analysis of gas systems.",
      "Engineering calculations involving approximate gas behaviour.",
    ],

    relatedEquations: ["arrhenius-equation", "first-law-thermodynamics"],

    references: [
      {
        authors: "Atkins, P., de Paula, J., and Keeler, J.",
        title: "Atkins’ Physical Chemistry",
        edition: "11th edition",
        publisher: "Oxford University Press",
      },
      {
        authors: "Çengel, Y. A., and Boles, M. A.",
        title: "Thermodynamics: An Engineering Approach",
        edition: "9th edition",
        publisher: "McGraw-Hill Education",
      },
    ],
  },

  "ohms-law": {
    introduction:
      "Ohm's Law describes the relationship between voltage, electric current and resistance in an ohmic conductor under specified physical conditions.",

    interpretation:
      "For a conductor with constant resistance, current increases in direct proportion to the applied voltage. A larger resistance produces a smaller current for the same voltage.",

    formula: String.raw`V = IR`,

    variables: [
      {
        symbol: "V",
        name: "Voltage",
        description: "Potential difference across the conductor.",
        unit: "volt (V)",
        dimension: String.raw`ML^2T^{-3}I^{-1}`,
      },
      {
        symbol: "I",
        name: "Electric current",
        description: "Rate of electric charge flow.",
        unit: "ampere (A)",
        dimension: "I",
      },
      {
        symbol: "R",
        name: "Electrical resistance",
        description: "Ratio of voltage to current for an ohmic conductor.",
        unit: "ohm (Ω)",
        dimension: String.raw`ML^2T^{-3}I^{-2}`,
      },
    ],

    derivation: [
      {
        title: "Experimental relationship",
        explanation:
          "For an ohmic conductor at constant physical conditions, the current is proportional to the potential difference.",
        formula: String.raw`I \propto V`,
      },
      {
        title: "Introduce resistance",
        explanation:
          "The constant ratio of voltage to current is defined as electrical resistance.",
        formula: String.raw`R = \frac{V}{I}`,
      },
      {
        title: "Rearrange",
        explanation:
          "Rearranging the relationship gives the familiar form of Ohm’s Law.",
        formula: String.raw`\boxed{V = IR}`,
      },
    ],

    assumptions: [
      "The conductor behaves ohmically over the operating range.",
      "Physical conditions, especially temperature, remain approximately constant.",
      "The voltage and current refer to the same two-terminal component.",
    ],

    limitations: [
      "The law does not describe all semiconductor devices.",
      "Diodes and many electronic components have nonlinear current-voltage relationships.",
      "Resistance can change significantly with temperature and other physical conditions.",
    ],

    applications: [
      "Calculating current in resistive electrical circuits.",
      "Determining voltage drops across resistors.",
      "Selecting resistors for electronic circuits.",
      "Basic electrical power and circuit analysis.",
    ],

    relatedEquations: ["newtons-second-law"],

    references: [
      {
        authors: "Halliday, D., Resnick, R., and Walker, J.",
        title: "Fundamentals of Physics",
        edition: "11th edition",
        publisher: "Wiley",
      },
    ],
  },

  "quadratic-formula": {
    introduction:
      "The Quadratic Formula gives the solutions of a quadratic equation in standard form. It provides a general algebraic method for finding the roots without requiring factorisation.",

    interpretation:
      "The discriminant determines the nature of the roots. A positive discriminant gives two distinct real roots, zero gives one repeated real root, and a negative discriminant gives a pair of complex conjugate roots when the coefficients are real.",

    formula: String.raw`x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}`,

    variables: [
      {
        symbol: "a",
        name: "Quadratic coefficient",
        description: "Coefficient of the squared term; must not be zero.",
        unit: "Dimensionless in the usual algebraic form",
        dimension: "1",
      },
      {
        symbol: "b",
        name: "Linear coefficient",
        description: "Coefficient of the first-degree term.",
        unit: "Dimensionless in the usual algebraic form",
        dimension: "1",
      },
      {
        symbol: "c",
        name: "Constant term",
        description: "Constant term in the quadratic equation.",
        unit: "Dimensionless in the usual algebraic form",
        dimension: "1",
      },
      {
        symbol: "x",
        name: "Unknown variable",
        description: "Value satisfying the quadratic equation.",
        unit: "Depends on the problem",
        dimension: "Depends on the problem",
      },
    ],

    derivation: [
      {
        title: "Start with the standard form",
        explanation: "A quadratic equation has a nonzero leading coefficient.",
        formula: String.raw`ax^2 + bx + c = 0,\quad a \ne 0`,
      },
      {
        title: "Divide by the leading coefficient",
        explanation:
          "Divide every term by a to make the coefficient of x squared equal to one.",
        formula: String.raw`x^2 + \frac{b}{a}x + \frac{c}{a} = 0`,
      },
      {
        title: "Move the constant term",
        explanation: "Move c/a to the right-hand side.",
        formula: String.raw`x^2 + \frac{b}{a}x = -\frac{c}{a}`,
      },
      {
        title: "Complete the square",
        explanation:
          "Add the square of half the coefficient of x to both sides.",
        formula: String.raw`x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = \frac{b^2-4ac}{4a^2}`,
      },
      {
        title: "Take the square root",
        explanation:
          "Express the perfect square and take both positive and negative roots.",
        formula: String.raw`\left(x+\frac{b}{2a}\right)^2 = \frac{b^2-4ac}{4a^2}`,
      },
      {
        title: "Solve for x",
        explanation: "Rearranging produces the quadratic formula.",
        formula: String.raw`\boxed{x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}}`,
      },
    ],

    assumptions: [
      "The equation is a polynomial of degree two.",
      "The leading coefficient a is nonzero.",
      "The usual real or complex number system is being used.",
    ],

    limitations: [
      "The formula does not directly solve equations of degree higher than two.",
      "Numerical cancellation can affect accuracy for some coefficient values.",
      "The roots depend on the coefficient values and may be real or complex.",
    ],

    applications: [
      "Solving projectile-motion equations under idealized conditions.",
      "Finding the intersection points of a quadratic function with the x-axis.",
      "Solving engineering and mathematical modelling problems.",
      "Analysing optimization problems involving quadratic expressions.",
    ],

    relatedEquations: ["derivative-power-rule"],

    references: [
      {
        authors: "Stewart, J., Redlin, L., and Watson, S.",
        title: "Precalculus: Mathematics for Calculus",
        edition: "7th edition",
        publisher: "Cengage Learning",
      },
    ],
  },
};
