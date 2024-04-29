import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        maxWidth: "500px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          gap: "35px",
          width: "100%", // Set width to 100% to fill the parent container
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            letterSpacing: "1px",
            fontWeight: "500",
          }}
        >
          Sign In
        </h1>
        <input
          type="text"
          name=""
          value={user.username}
          onChange={(e) =>
            setUser({
              user,
              username: e.target.value,
            })
          }
          id=""
          placeholder="Enter Username"
          style={{
            width: "100%",
            border: "none",
            borderBottom: "2px solid #8c8c8c",
            outline: "none",
          }}
        />
        <input
          type="password"
          name=""
          id=""
          value={user.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setUser({
              user,
              password: e.target.value,
            })
          }
          style={{
            width: "100%",
            border: "none",
            borderBottom: "2px solid #8c8c8c",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "15px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#20b983",
            color: "#fff",
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
