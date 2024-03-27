import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ element }) {
  // Fonction pour récupérer un cookie par son nom
  function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  const token = getCookie("jwt");
  return token ? element : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
