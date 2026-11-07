import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import EquationDetails from "./pages/EquationDetails";
import Subject from "./pages/Subject";
import Visualizations from "./pages/Visualizations";
import LearningCenter from "./pages/LearningCenter";
import LearningResource from "./pages/LearningResource";
import MathTest from "./pages/MathTest";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/subject/:subjectId" element={<Subject />} />
              <Route path="/equation/:slug" element={<EquationDetails />} />
              <Route path="/visualizations" element={<Visualizations />} />
              <Route path="/learning" element={<LearningCenter />} />
              <Route path="/learning/:slug" element={<LearningResource />} />
              <Route path="/math-test" element={<MathTest />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
