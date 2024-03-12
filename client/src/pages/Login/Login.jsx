/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Login({setCurrentPage}) {
  return (
    <div className="col card p-5 mt-5 text-center">
      <h3 className="m-1">Login to your account</h3>
      <div className="m-5">
        <p>
          Don’t have an account?{" "}
          <a
            href="#" onClick={() => setCurrentPage("signup")}
        className="fw-semibold text-decoration-none"
            style={{ color: "#fe8402" }}
          >
            Create a new account
          </a>
        </p>
      </div>
      <form action="" className="d-flex flex-column gap-3">
        <div>
          <input
            type="email"
            className="form-control p-3"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control p-3"
            placeholder="Password"
          />
        </div>
        <div className="mt-3">
        <p className="d-flex justify-content-end">
          <a
            href="/"
            className="fw-semibold text-decoration-none"
            style={{ color: "#fe8402" }}
          >
            Forgot your password?
          </a>
        </p>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="button btn btn-primary action-btn fw-bold form-control text-white p-2"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
