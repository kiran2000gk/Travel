import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Pages/firebase";

const Updateprofile = () => {
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("profileimg")
      .add({
        image: image,
      })
      .then(() => {
        setLoader(false);
        alert("Your Profile has been updated");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setImage("");
  };

  return (
    <section class="col-12">
      <div className="row">
        <div className="col-3  text-center">
          <form className="form" onSubmit={handleSubmit}>
            <br />
            <br />
            <br />
            <h5>update profile using url</h5>
            <input
              className="form-control w-50 mx-auto"
              placeholder="https://myphoto.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <br />
            <button
              type="submit"
              style={{ background: loader ? "#000" : "#fff" }}
            >
              Update photo
            </button>
            {/* <Link to="/updateprofile">Update photo</Link> */}
          </form>
        </div>
        <div className="col-9">
          <div class="m-5 w-50 p-5 mx-auto">
            <h1 class="text-center mb-2 p-2">Update Details</h1>
            <form>
              <div class="form-group">
                <label for="exampleInputuser">User Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleInputuser"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputDate">Date of Birth</label>
                <input type="date" class="form-control" id="exampleInputDate" />
              </div>

              <button>
                <Link class="btn bg-light p-25 btn-light" to="/profile">
                  Update Profile
                </Link>
              </button>
              <br />
              <br />
              <Link class="btn bg-light p-25 btn-light" to="/profile">
                Back to Profile
              </Link>

              <Link class="btn bg-light p-25 btn-light" to="/">
                Back to Home
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updateprofile;
