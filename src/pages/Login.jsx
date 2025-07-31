import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="login-box">
        <h2>Voter Login</h2>
        <form>
          <label htmlFor="voterId">Voter ID</label>
          <input type="text" id="voterId" placeholder="Enter Voter ID" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />

          <button type="submit">Login</button>
        </form>
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
