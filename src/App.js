import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm from "./components/Registration/RegistrationForm";
import Home from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Ayush Ministry - Startup Initiative</h1>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/LoginSignup" className="nav-link">
            Login
          </Link>
          <Link to="/registration" className="nav-link">
            registration
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/registration" element={<RegistrationForm />}></Route>
      </Routes>

      <footer className="footer">
        <p>&copy; 2024 Ayush Ministry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
