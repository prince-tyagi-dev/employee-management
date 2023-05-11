import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // If the given username and password are match with the demo
    // username and password then create the login session.
    if (username === "admin" && password === "admin@123") {
      setAuth({
        user: { username, password, roles: ["Admin"] }
      });
      const from = location?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container login-page">
      <center>
        <h2>Login</h2>
        <h6>Enter the username and password to login to the system!</h6>
      </center>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
            className="form-control"
            onChange={handleChange}
            ref={usernameRef}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary form-control">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
