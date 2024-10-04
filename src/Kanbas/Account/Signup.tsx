import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h3>Sign up</h3>
          {/* Bootstrap Form */}
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="verify-password" className="form-label">Verify Password</label>
              <input
                type="password"
                className="form-control"
                id="verify-password"
                placeholder="Verify password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign up</button>
          </form>
          <Link to="/Kanbas/Account/Signin" className="d-block text-center mt-3">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
