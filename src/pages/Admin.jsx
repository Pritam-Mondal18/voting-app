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
          <Link to="/create-election" className="admin-card start-election">
            <h3>🗳️ Start New Election</h3>
            <p>Create and configure a new election process for voters.</p>
          </Link>

          <Link to="/voters" className="admin-card view-voters">
            <h3>📋 View Registered Voters</h3>
            <p>See the list of eligible voters registered in the system.</p>
          </Link>

          <Link to="/results" className="admin-card manage-results">
            <h3>📊 Manage Results</h3>
            <p>View or finalize the results of completed elections.</p>
          </Link>
        </div>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
