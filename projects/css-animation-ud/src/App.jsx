import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CreativeButton from "./pages/buttons/1-creative-button";

function App() {
  return (
    <div className="min-h-100vh">
      <Navbar />
      <Routes>
        <Route path="/creative-btn" element={<CreativeButton />} />
      </Routes>
      <div className="container mx-auto">
        <Link to="/creative-btn">Creative Button</Link>
      </div>
    </div>
  );
}

export default App;
