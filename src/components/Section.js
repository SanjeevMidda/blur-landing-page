import React from "react";
import { motion } from "framer-motion";

const Section = ({ color, text }) => {
  let sectionStyles = {
    backgroundColor: color,
    width: "400px",
    height: "600px",
  };

  return (
    <motion.div
      className="block"
      initial={{ opacity: 0, transform: `translateY(0px)` }}
      whileInView={{ opacity: 1, transform: `translateY(20px)` }}
      transition={{ type: "inertia", velocity: 200 }}
    >
      <div className="colorBlock" style={sectionStyles}></div>
      <div className="textContainer">
        <h1>{text}</h1>
      </div>
    </motion.div>
  );
};

export default Section;
