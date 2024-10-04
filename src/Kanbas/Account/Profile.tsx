import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h3>Profile</h3>
          <input
            className="form-control mb-3"
            id="wd-username"
            value="alice"
            placeholder="username"
          />
          <input
            className="form-control mb-3"
            id="wd-password"
            value="123"
            placeholder="password"
            type="password"
          />
          <input
            className="form-control mb-3"
            id="wd-firstname"
            value="Alice"
            placeholder="First Name"
          />
          <input
            className="form-control mb-3"
            id="wd-lastname"
            value="Wonderland"
            placeholder="Last Name"
          />
          <input
            className="form-control mb-3"
            id="wd-dob"
            value="2000-01-01"
            type="date"
          />
          <input
            className="form-control mb-3"
            id="wd-email"
            value="alice@wonderland.com"
            type="email"
          />
          <select className="form-control mb-3" id="wd-role">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-danger w-100 mb-2">Signout</button>
        </div>
      </div>
    </div>
  );
}
