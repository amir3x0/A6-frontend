import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { authenticateUser } from "../services/BackendService";

const SignInPage = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const userData = await authenticateUser(username, password);
      // Process login success, store token/userData as needed
      localStorage.setItem("userToken", username);
      setErrorMessage("");
    } catch (error) {
      // Handle login error (e.g., user not found, wrong password)
      setErrorMessage(
        "Failed to sign in. Please check your username and password."
      );
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default SignInPage;
