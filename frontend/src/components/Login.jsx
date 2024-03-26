export default function Login() {
  // document
  //   .getElementById("loginForm")
  //   .addEventListener("submit", function (event) {
  //     event.preventDefault();
  //
  //     // Création de l'objet pour les données
  //     let loginData = {
  //       email: document.getElementById("email").value,
  //       password: document.getElementById("password").value,
  //     };
  //
  //     // Envoi de la requête
  //     fetch("http://127.0.0.1:8000/users/login", {
  //       method: "POST",
  //       body: JSON.stringify(loginData),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.token) {
  //           // Stockage du token dans les cookies
  //           document.cookie = "jwt=" + data.token + ";path=/;max-age=86400"; // Expiration après 1 jour
  //
  //           alert("Connexion réussie!");
  //           // window.history.back();
  //         } else {
  //           alert("Erreur de connexion: " + JSON.stringify(data));
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Erreur:", error);
  //         alert("Erreur lors de la connexion: " + error.message);
  //       });
  //   });
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
              <a href="#0">
                <strong>S'inscrire maintenant!</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
