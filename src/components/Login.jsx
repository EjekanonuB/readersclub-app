import React from "react";
import vector13 from "../images/vector13.jpg";

function Login() {
  return (
    <>
      <section id="homeimg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={vector13} className="Home-logo" alt="Home-Study" />
            </div>

            <div className="col-md-6 loginFrom mt-md-5">
              <form action="/POST" method="/signup">
                <div class="form-group">
                  <label for="email-register" class="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input
                    id="email-register"
                    name="email"
                    class="form-control"
                    type="text"
                    placeholder="you@example.com"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <label for="password-register" class="text-muted mb-1">
                    <small>Password</small>
                  </label>
                  <input
                    id="password-register"
                    name="password"
                    class="form-control"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  type="submit"
                  class="py-3 mt-4 btn btn-lg btn-success btn-block"
                >
                  Login to Reader's Club
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
