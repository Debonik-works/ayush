import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import RegistrationForm from "./components/Registration/RegistrationForm";

const [page, setPage] = useState(0);
function App() {
  return (
    <div>
      {page == 0 && <LoginSignup />}

      {page == 1 && <RegistrationForm />}
    </div>
  );
}

export default App;
