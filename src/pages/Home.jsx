import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.5,
};

export default function Home() {
  return (
    <motion.div
      className="home-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <div className="header">BharatVote</div>

      <section className="home-section">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          India’s Secure Online Voting System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Vote with trust. Vote from anywhere. A new step toward digital Bharat.
        </motion.p>

        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/login" className="button-voter">
            Voter Login
          </Link>
          <Link to="/admin" className="button-admin">
            Admin Panel
          </Link>
        </motion.div>
      </section>

      <div className="footer">Made in 🇮🇳 India • जय हिन्द</div>
    </motion.div>
  );
}
