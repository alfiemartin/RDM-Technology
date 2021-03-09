import React, { useState, useEffect } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${props.col} ${
        props.up ? "fade-up-section" : "fade-left-section"
      } ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={{ transition: `all ${props.delay}s ease-in-out` }}
    >
      {props.children}
    </div>
  );
}

FadeInSection.defaultProps = {
  up: true,
  delay: 1,
  col: "",
};

export default FadeInSection;
