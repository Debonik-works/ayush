import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm from "./components/Registration/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* /*<Route path="/" element={<Home />} />* */}
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
