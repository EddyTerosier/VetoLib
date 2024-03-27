import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Registration from "./components/Registration.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Appointment from "./components/Appointment.jsx";
import Profile from "./components/Profile.jsx";
import AddAnimal from "./components/AddAnimal.jsx";
import "./App.css";
import Header from "./components/partials/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/add-animal" element={<AddAnimal />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
