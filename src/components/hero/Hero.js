/* eslint-disable react/button-has-type */
import React from 'react';
import './Hero.css';

import HeroImage from '../../images/hero-meditation.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__cta-wrapper">
        <h1 className="hero__title">
          Your task. Done by data and web development students. <br />
          <span className="hero__title-orange">For Free!</span>
        </h1>
        <button className="hero__cta-button hero__cta-button_desktop">Delegate a task</button>
      </div>
      <img src={HeroImage} alt="hero" className="hero__image" />
      <button className="hero__cta-button hero__cta-button_mobile">Delegate a task</button>
    </section>
  );
}

export default Hero;
