import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Registration from "./components/Registration.jsx";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">Accueil</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link">
                <Link to="/booking">Prendre un RDV</Link>
              </a>
              <a className="nav-link">
                <Link to="/profile">Mon profil</Link>
              </a>
              <a className="nav-link">
                <Link to="/login">Login</Link>
              </a>
              <a className="nav-link">
                <Link to="/registration">Registration</Link>
              </a>
              <a className="nav-link">
                <Link to="/logout">Logout</Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
