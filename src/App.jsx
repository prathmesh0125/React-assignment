import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Siderbar";
import Shortlisted from "./components/Shortlisted";
import Credits from "./components/Credits";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Topbar />
      <Routes>
        <Route path="/" element={<Shortlisted />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
