"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";

export default function Index() {
  const { isLoading, loadingPercent } = usePreloader();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  // Animation variants for the name
  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const firstName = "UTKARSH";
  const lastName = "RAJPUT";

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          {/* Centered Name Animation */}
          <div className={styles.nameContainer}>
            <motion.div
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              className={styles.nameWrapper}
            >
              {/* First Name */}
              <div className={styles.firstName}>
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    variants={letterVariants}
                    className={styles.letter}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Last Name */}
              <div className={styles.lastName}>
                {lastName.split("").map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    variants={letterVariants}
                    className={styles.letter}
                    style={{ transitionDelay: `${(firstName.length + index) * 0.1}s` }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Loading percentage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className={styles.percentage}
            >
              {(loadingPercent - (loadingPercent % 1)).toFixed(0)}%
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className={styles.progressBarContainer}
            >
              <motion.div
                className={styles.progressBar}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: loadingPercent / 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* SVG curve animation */}
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}