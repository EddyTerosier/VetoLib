import { useState, useEffect } from "react";

export default function Registration() {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/user/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          document.cookie = "jwt=" + data.token + ";path=/;max-age=86400";
          alert("Inscription réussie");
          window.location.href = "/"; // Adaptez le chemin selon votre configuration
        } else {
          alert("Erreur lors de l'inscription: " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Erreur lors de l'inscription: " + error.message);
      });
  };

  // useEffect(() => {
  //   const token = getCookie("jwt");
  //   if (token) {
  //     fetch("http://127.0.0.1:8000/user/profile", {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.role === "admin") {
  //           setIsAdmin(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Erreur:", error);
  //         alert("Erreur lors de la récupération du profil: " + error.message);
  //       });
  //   }
  // }, []);

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

  return (
    <main>
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="register">
            <h1>Please register to VetoLib!</h1>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form id="registerForm" onSubmit={handleSubmit}>
                  <div className="box_form">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={registerData.firstname}
                        onChange={handleChange}
                        placeholder="Prénom"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={registerData.lastname}
                        onChange={handleChange}
                        placeholder="Nom"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                        placeholder="Adresse e-mail"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={registerData.password}
                        onChange={handleChange}
                        placeholder="Mot de passe"
                      />
                    </div>
                    <div className="form-group text-center add_top_30">
                      <input className="btn_1" type="submit" value="Submit" />
                    </div>
                  </div>
                  {isAdmin && <div id="roleField">Role: Admin</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
