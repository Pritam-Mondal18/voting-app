import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="header">BharatVote</div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </div>

      <section className="home-section">
        <h1>India’s Secure Online Voting System</h1>
        <p>
          Vote with trust. Vote from anywhere. A new step toward digital Bharat.
          This system is secure, reliable, and easy to use.
        </p>

        <div className="home-buttons">
          <Link to="/login" className="button-voter">
            Voter Login
          </Link>
          <Link to="/admin" className="button-admin">
            Admin Panel
          </Link>
        </div>
      </section>

      <div className="footer">Made in 🇮🇳 India • जय हिन्द</div>
    </div>
  );
}
