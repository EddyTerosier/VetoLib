import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="content">
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="login">
            <h1>Se connecter à VétoLib !</h1>
            <div className="box_form">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Votre mot de passe"
                    name="password"
                    id="password"
                  />
                </div>
                <a href="#0">
                  <small>Mot de passe oublié ?</small>
                </a>
                <div className="form-group text-center add_top_20">
                  <button className="btn btn-primary" type="submit">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
            <p className="text-center link_bright">
              Vous n'avez pas de compte{" "}
              <Link to="/registration">
                <strong>S'inscrire maintenant!</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
