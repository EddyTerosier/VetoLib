export default function Registration() {
  return (
    <main>
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="register">
            <h1>Please register to VetoLib!</h1>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form>
                  <div className="box_form">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your last name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        name="password1"
                        placeholder="Your password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        placeholder="Confirm password"
                      />
                    </div>
                    <div className="form-group text-center add_top_30">
                      <input className="btn_1" type="submit" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
