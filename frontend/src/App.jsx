import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
