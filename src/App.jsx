import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./Components/ProfileCard.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <nav className="nav">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link> */}
        <p><strong>The Face Behind Gracogen IT Services</strong></p>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
