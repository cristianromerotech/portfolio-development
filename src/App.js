import "./App.css";
import ResponsiveAppBar from "./AppBar/AppBar";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import ExcelDynamic from "./pages/blogs/ExcelDynamic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>

      <Routes>
        <Route path="/portfolio-development" element={<Homepage />} />

        <Route path="/portfolio-development/blogs" element={<ExcelDynamic />} />
      </Routes>
    </div>
  );
}

export default App;
