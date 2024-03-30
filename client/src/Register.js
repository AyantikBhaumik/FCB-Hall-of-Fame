import React, { useState } from "react";
import { Navigate } from "react-router";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Registration successful");
      setRedirect(true);
    } else {
      alert("Resgistration failed");
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <main>
      <h1 className="title">FC BARCELONA: HALL OF FAME</h1>
      <h1>REGISTER</h1>
      <form className="register" onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="btn">Register</button>
      </form>
    </main>
  );
}

export default Register;
