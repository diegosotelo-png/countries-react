import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Entities from "./pages/Entities";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;