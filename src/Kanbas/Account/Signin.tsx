import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signin() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h3>Signin</h3>
          {/* Bootstrap Form */}
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Signin</button>
          </form>
          <Link to="/Kanbas/Account/Signup" className="d-block text-center mt-3">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
