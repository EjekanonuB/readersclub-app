import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Axios from "axios";

// import home01 from "../images/home01.png";

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState();
  const [profession, setProfession] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/readers/register", {
        username,
        email,
        password,
        country,
        profession,
      });
      console.log("User was successively created.");
    } catch (e) {
      console.log("There was an error...");
    }
  }

  return (
    <Title title="Signup">
      <section>
        <div className="container d-none d-sm-block">
          <div className="row">
            {/* <div className="col-md-6">
              <img src={home01} className="Home-logo" alt="Home-Study" />
            </div> */}

            <div className="col-md-12 signupFrom mt-md-5">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="username-register" class="text-muted mb-1">
                    <small>Username</small>
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username-register"
                    name="username"
                    value={username}
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
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-register"
                    name="email"
                    value={email}
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
                    value={password}
                    class="form-control"
                    type="password"
                    placeholder="Create a password"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <label for="country" class="text-muted mb-1">
                    <small>Country</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    value={country}
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
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
                    name="profession"
                    value={profession}
                    id="profession"
                    onChange={(e) => setProfession(e.target.value)}
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
                <p className="text-center text-muted">
                  Do you have a valid <small>Email?</small>{" "}
                  <Link to="/login">Login Here</Link>
                </p>
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
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="username-register" class="text-muted mb-1">
                    <small>Username</small>
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username-register"
                    name="username"
                    value={username}
                    class="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autocomplete="offnpm "
                  />
                </div>

                <div class="form-group">
                  <label for="email-register" class="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    v
                    id="email-register"
                    name="email"
                    value={email}
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
                    value={password}
                    class="form-control"
                    type="password"
                    placeholder="Create a password"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <label for="country" class="text-muted mb-1">
                    <small>Country</small>
                  </label>
                  <select
                    className="text-muted ml-3"
                    name="country"
                    value={country}
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
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
                    name="profession"
                    value={profession}
                    id="country"
                    onChange={(e) => setProfession(e.target.value)}
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
                  class="py-3 mt-5 btn btn-sm btn-success btn-block"
                >
                  Signup
                </button>
                <p className="text-center text-muted">
                  Do you have a valid <small>Email?</small>{" "}
                  <Link to="/login">Login Here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Title>
  );
}

export default Signup;
