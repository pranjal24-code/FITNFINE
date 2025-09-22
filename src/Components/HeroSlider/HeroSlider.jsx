import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";

const HeroSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider-container">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="slide"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].alt}
            className="slide-image"
          />
          <div className="overlay"></div>
          <motion.div
            className="slide-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2>{slides[current].title}</h2>
            <p>{slides[current].text}</p>

            {/* ✅ Dynamic routing button */}
             <button
    className="cta-btn"
    onClick={() => navigate('./join')} // ✅ Routes to Join Now page
  >
    🔥 Start Training
  </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button className="nav-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-btn right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
