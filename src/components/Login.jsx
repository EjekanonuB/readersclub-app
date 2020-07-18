import React, { useState } from "react";
import Title from "./Title";
import vector13 from "../images/vector13.jpg";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log("You have successively logged in.");
    } catch (e) {
      console.log("there was an error...");
    }
  }

  return (
    <Title title="Login">
      <section id="homeimg" className="d-none d-sm-block">
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="password-register"
                    name="password"
                    class="form-control"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  onSubmit={handleSubmit}
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

      {/* Login Page for Mobile */}

      <section id="homeimgMobile" className="d-block d-sm-none">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 loginFrom mt-md-5">
              <form action="/POST" method="/signup">
                <div class="form-group">
                  <label for="email-register" class="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="password-register"
                    name="password"
                    class="form-control"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  onSubmit={handleSubmit}
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
    </Title>
  );
}

export default Login;
