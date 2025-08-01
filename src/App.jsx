
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Sinopse from "./pages/Sinopse";
import Autor from "./pages/Autor";
import PublicoAlvo from "./pages/PublicoAlvo";
import Colega from "./pages/Colega";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Sinopse />} />
            <Route path="/autor" element={<Autor />} />
            <Route path="/publico-alvo" element={<PublicoAlvo />} />
            <Route path="/colega" element={<Colega />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
