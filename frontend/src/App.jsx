import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout.jsx";
import Home from "./components/Home.jsx";
import Registration from "./components/Registration.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Appointment from "./components/Appointment.jsx";
import AddAnimal from "./components/AddAnimal.jsx";
import "./App.css";
import Header from "./components/partials/Header.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/logout"
          element={<ProtectedRoute element={<Logout />} />}
        ></Route>
        <Route
          path="/appointment"
          element={<ProtectedRoute element={<Appointment />} />}
        ></Route>
        <Route
          path="/add-animal"
          element={<ProtectedRoute element={<AddAnimal />} />}
        ></Route>
        <Route
          path="/profile/:id"
          element={<ProtectedRoute element={<Profile />} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
