import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <section className="container mt-5">
        <h1 className="text-center">Sign up</h1>
        <div className="m-5 w-50 p-5 mx-auto">
          <form>
            <div className="form-group">
              <label for="exampleInputuser">User Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputuser"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputDate">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputDate"
              />
            </div>

            <button>
              <Link className="btn bg-light p-25 btn-light" to="/login">
                Sign Up
              </Link>
            </button>
            <br />
            <br />
            <Link className="btn bg-light p-25 btn-light" to="/login">
              back to login
            </Link>

            <Link className="btn bg-light p-25 btn-light" to="/">
              back to home
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default Signup;
