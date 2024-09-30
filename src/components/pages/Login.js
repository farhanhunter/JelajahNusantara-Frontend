import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Login() {
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form>
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
