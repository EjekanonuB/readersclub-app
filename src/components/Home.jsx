import React from "react";
import { Link } from "react-router-dom";

import home01 from "../images/home01.png";

function Home() {
  return (
    <>
      <section id="homeimg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={home01} className="Home-logo" alt="Home-Study" />
            </div>

            <div className="col-md-6 welcomePage ">
              <h1 className=" display-3 text-primary">
                WELCOME to Readers Club...
              </h1>
              <p className="text-muted mt-3">
                ...building your mental capacity is the greatest investment
                ever!
              </p>
              <div className="mt-2">
                <Link className=" badge badge-success p-2 mt-3" to="/signup">
                  SignUp Here
                </Link>
                <Link className=" badge badge-primary ml-3 p-2 mt-3" to="/login">
                  Login Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
