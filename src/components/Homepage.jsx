import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Homepage({ onAuth }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.priventDefault();
    // auth
    onAuth();
    Navigate();
  };

  return (
    <div>
      <h1>Employer Portal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button type="submit">Login / Sign Up</button>
      </form>
    </div>
  );
}

export default Homepage;
