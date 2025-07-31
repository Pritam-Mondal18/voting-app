import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  return (
    <motion.div
      className="admin-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="admin-box">
        <h2>Welcome, Admin</h2>

        <div className="admin-actions">
          <button className="action-btn start-election">
            Start New Election
          </button>
          <button className="action-btn view-voters">
            View Registered Voters
          </button>
          <button className="action-btn manage-results">Manage Results</button>
        </div>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
