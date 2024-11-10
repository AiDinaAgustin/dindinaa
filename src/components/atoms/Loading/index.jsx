import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const colorSequence = [
  ["bg-white", "bg-white", "bg-white"],
  ["bg-primary", "bg-white", "bg-white"],
  ["bg-primary", "bg-primary", "bg-white"],
  ["bg-primary", "bg-primary", "bg-primary"],
  ["bg-white", "bg-primary", "bg-primary"],
  ["bg-white", "bg-white", "bg-primary"],
  ["bg-white", "bg-primary", "bg-white"],
  ["bg-primary", "bg-white", "bg-primary"],
];

export default function Loading() {
  const [currentColors, setCurrentColors] = useState(colorSequence[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colorSequence.length);
      setCurrentColors(colorSequence[(index + 1) % colorSequence.length]);
    }, 500); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {currentColors.map((color, idx) => (
        <motion.div
          key={idx}
          className={`block w-8 h-8 m-2 rounded-full ${color}`}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      ))}
    </motion.div>
  );
}
