import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {username}</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            placeholder="Username:"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password:"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Log In
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default SignInForm;
