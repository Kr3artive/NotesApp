import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import AddNotes from "./components/AddNotes";
import { NameProvider } from "./contexts/NameContext";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<HomePage />} />
            <Route path="/addnote" element={<AddNotes />} />
          </Routes>
        </Router>
      </NameProvider>
    </div>
  );
};

export default App;
