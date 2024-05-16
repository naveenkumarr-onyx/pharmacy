import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user.username === "qaifi" && user.password === "qaifi") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful");
      navigate("/orders");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-subcontainer">
        <h1>Sign In</h1>
        <input
          type="text"
          name=""
          value={user.username}
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
          id=""
          placeholder="Enter Username"
        />
        <input
          type="password"
          name=""
          id=""
          value={user.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
};

export default Login;
