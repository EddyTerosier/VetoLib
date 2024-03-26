export default function Login() {
  return (
    <div className="bg_color_2">
      <div className="container margin_60_35">
        <div id="login">
          <h1>Please login to Findoctor!</h1>
          <div className="box_form">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your password"
                  name="password"
                  id="password"
                />
              </div>
              <a href="#0">
                <small>Forgot password?</small>
              </a>
              <div className="form-group text-center add_top_20">
                <input className="btn_1 medium" type="submit" value="Login" />
              </div>
            </form>
          </div>
          <p className="text-center link_bright">
            Do not have an account yet?{" "}
            <a href="#0">
              <strong>Register now!</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
