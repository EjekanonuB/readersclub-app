import React from "react";
import vector26 from "../images/vector26.jpg";

function Contact() {
  return (
    <>
      <div className="container aboutPage d-none d-sm-block">
        <div className="row ">
          <div className="col-md-6 ">
            <h3 className="display-3 mb-1 text-primary">Contact Us</h3>
            <img
              src={vector26}
              className="Contact-logo mb-5"
              alt="call=center"
            />
          </div>

          <div className="col-md-6">
            <form action="">
              <div class="form-group  mt-4">
                <label for="fname" class="text-muted mb-1">
                  <small>First Name</small>
                </label>
                <input
                  id="fname"
                  name="fname"
                  class="form-control"
                  type="text"
                  placeholder="Enter your First Name"
                  autocomplete="off"
                />
              </div>

              <div class="form-group">
                <label for="lname" class="text-muted mb-1">
                  <small>Last Name</small>
                </label>
                <input
                  id="lname"
                  name="lname"
                  class="form-control"
                  type="text"
                  placeholder="Enter your Last Name"
                  autocomplete="off"
                />
              </div>

              <div class="form-group">
                <label for="country" class="text-muted mb-1">
                  <small>Country</small>
                </label>
                <select className="text-muted ml-3" name="country" id="country">
                  <option value="Select">Select</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Cameroun">Cameroun</option>
                  <option value="Uganda">Uganda</option>
                </select>
              </div>

              <div class="form-group">
                <label for="subject" class="text-muted mb-1 d-block">
                  <small>Subject</small>
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  class="body-content tall-textarea form-control"
                  type="text"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="py-3 mt-4 btn btn-lg btn-success btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Page for Mobile */}

      <div className="container aboutPageMobile d-block d-sm-none">
        <div className="row ">
          <div className="col-sm-12 text-center ">
            <h3 className="display-5 mb-1 text-primary">Contact Us</h3>
          </div>

          <div className="col-sm-12">
            <form action="">
              <div class="form-group  mt-4">
                <label for="fname" class="text-muted mb-1">
                  <small>First Name</small>
                </label>
                <input
                  id="fname"
                  name="fname"
                  class="form-control"
                  type="text"
                  placeholder="Enter your First Name"
                  autocomplete="off"
                />
              </div>

              <div class="form-group">
                <label for="lname" class="text-muted mb-1">
                  <small>Last Name</small>
                </label>
                <input
                  id="lname"
                  name="lname"
                  class="form-control"
                  type="text"
                  placeholder="Enter your Last Name"
                  autocomplete="off"
                />
              </div>

              <div class="form-group">
                <label for="country" class="text-muted mb-1">
                  <small>Country</small>
                </label>
                <select className="text-muted ml-3" name="country" id="country">
                  <option value="Select">Select</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Cameroun">Cameroun</option>
                  <option value="Uganda">Uganda</option>
                </select>
              </div>

              <div class="form-group">
                <label for="subject" class="text-muted mb-1 d-block">
                  <small>Subject</small>
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  class="body-content tall-textarea form-control"
                  type="text"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="py-3 mt-4 btn btn-lg btn-success btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
