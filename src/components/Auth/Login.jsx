import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import fire from "./components/Auth/fire";

const Login = () => {
  return (
    <section className="container mt-5">
      <h1 className="text-center">Login</h1>
      <div className="m-2 w-50 p-5 mx-auto">
        <form>
          <div className="form-group mt-2">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control mt-1" />
          </div>
          <div className="form-group mt-2">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control mt-1" />
          </div>

          <button className="mt-3">
            <Link className="btn bg-light p-25 btn-light" to="/">
              Login
            </Link>
          </button>
          <br />
          <br />
          <Link className="btn bg-light p-25 btn-light" to="/Signup">
            New user sigup now and enjoy
          </Link>

          <br />
          <br />
          <Link className="btn bg-light p-25 btn-light" to="/">
            Back to home
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
