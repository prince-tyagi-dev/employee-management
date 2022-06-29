import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuth({
      user: { username: "admin", password: "admin@123" },
      roles: ["Admin"]
    });
    navigate(from, { replace: true });
  };
  return (
    <>
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          ref={usernameRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default Login;
