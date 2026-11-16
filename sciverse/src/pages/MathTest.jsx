import MathEquation from '../components/common/MathEquation';

function MathTest() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Cambria Math Test</h2>

      <MathEquation latex="F = ma" />

      <MathEquation
        latex={String.raw`F = G\frac{m_1m_2}{r^2}`}
      />

      <MathEquation
        latex={String.raw`PV = nRT`}
      />

      <MathEquation
        latex={String.raw`\int_a^b f(x)\,dx = F(b)-F(a)`}
      />

      <MathEquation
        latex={String.raw`E = mc^2`}
      />
    </div> //ashik j
  );
}

export default MathTest;