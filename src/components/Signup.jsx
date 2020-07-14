import React from "react";
// import home01 from "../images/home01.png";

function Signup() {
  return (
    <>
      <section>
        <div className="container d-none d-sm-block">
          <div className="row">
            {/* <div className="col-md-6">
              <img src={home01} className="Home-logo" alt="Home-Study" />
            </div> */}

            <div className="col-md-12 signupFrom mt-md-5">
              <form action="/POST" method="/signup">
                <div class="form-group">
                  <label for="username-register" class="text-muted mb-1">
                    <small>Username</small>
                  </label>
                  <input
                    id="username-register"
                    name="username"
                    class="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autocomplete="off"
                  />
                </div>

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

                <div class="form-group">
                  <label for="country" class="text-muted mb-1">
                    <small>Country</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    id="country"
                  >
                    <option value="Select">Select</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Cameroun">Cameroun</option>
                    <option value="Uganda">Uganda</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="profession" class="text-muted mb-1">
                    <small>Profession</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    id="country"
                  >
                    <option value="Select">Select</option>
                    <option value="Physiotherapist">Physiotherapist</option>
                    <option value="software developer ">
                      Software Developer
                    </option>
                    <option value="teacher">Teacher</option>
                    <option value="farmer">Farmer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="py-3 mt-4 btn btn-lg btn-success btn-block"
                >
                  Signup For Reader's Club
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Page for mobile */}

      <section className="d-block d-sm-none">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-6">
              <img src={home01} className="Home-logo" alt="Home-Study" />
            </div> */}

            <div className="col-md-12 signupFrom mt-md-5">
              <form action="/POST" method="/signup">
                <div class="form-group">
                  <label for="username-register" class="text-muted mb-1">
                    <small>Username</small>
                  </label>
                  <input
                    id="username-register"
                    name="username"
                    class="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autocomplete="off"
                  />
                </div>

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

                <div class="form-group">
                  <label for="country" class="text-muted mb-1">
                    <small>Country</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    id="country"
                  >
                    <option value="Select">Select</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Cameroun">Cameroun</option>
                    <option value="Uganda">Uganda</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="profession" class="text-muted mb-1">
                    <small>Profession</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    id="country"
                  >
                    <option value="Select">Select</option>
                    <option value="Physiotherapist">Physiotherapist</option>
                    <option value="software developer ">
                      Software Developer
                    </option>
                    <option value="teacher">Teacher</option>
                    <option value="farmer">Farmer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="py-3 mt-4 btn btn-lg btn-success btn-block"
                >
                  Signup For Reader's Club
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
