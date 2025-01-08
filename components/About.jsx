"use client";

import React, { useEffect, useState, useRef } from "react";
import "./About.css";

const About = () => {
  const [scrollPos, setScrollPos] = useState(0); 
  const [activeIndex, setActiveIndex] = useState(0); 
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineTop = timeline.offsetTop; 
      const timelineHeight = timeline.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollY = window.scrollY + viewportHeight * 0.65; 
      const timelineStart = timelineTop;
      const timelineEnd = timelineTop + timelineHeight;

      if (scrollY >= timelineStart && scrollY <= timelineEnd) {
        const relativeScroll =
          ((scrollY - timelineStart) / (timelineEnd - timelineStart)) * 100;

        const snappedScroll = Math.floor(relativeScroll / 20) * 20;

        setScrollPos(snappedScroll); 
      } else if (scrollY < timelineStart) {
        setScrollPos(0); 
      } else if (scrollY > timelineEnd) {
        setScrollPos(100); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update the active index based on snapped scroll position
    setActiveIndex(scrollPos / 20); // Divide timeline into 5 sections (20% each)
  }, [scrollPos]);

  return (
    <div className="about">
      <h1 className="abt_h">About me</h1>
      <div className="about_div">
        <div className="abt_divl">
          <p>
            Dr. Jagan Mohan Varakala is an accomplished Consultant Neonatal
            Pediatrician with extensive experience in neonatal care,
            specializing in managing extremely preterm infants and critical
            care transports. As the Head of a 22-bedded NNF-accredited NICU at
            Paramitha Women and Children's Hospital, Hyderabad, he blends
            clinical excellence with academic leadership. A certified Advanced
            NRP Trainer and member of the PEDISTARS simulation community, Dr.
            Varakala is dedicated to improving neonatal outcomes through
            education, research, and mentorship. His contributions include
            award-winning research, national presentations, and training
            programs that elevate standards in neonatal care.
          </p>
        </div>
        <div className="abt_divr">
          <img className="abt_pic" src="/jagan_hero.png" alt="" />
        </div>
      </div>
      <div className="abt_time">
        <div className="abt_time_div" ref={timelineRef}>
          <h2 className="abut_time_head">Experience</h2>
          <div className="timeline">
            <div className="vertical">
              <div
                style={{
                  top:
                    scrollPos < 20
                      ? `${scrollPos}%`
                      : `calc(${scrollPos}% - 30px)`,
                }}
                className="v-dot"
              ></div>
            </div>
            <div className="timeline-item">
              <div
                className={`timeline-content ${
                  activeIndex === 0 ? "active_time" : ""
                }`}
              >
                <span>2009 - 2014</span>
                <p>
                  <strong>MBBS</strong>, Osmania Medical College, Hyderabad
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                className={`timeline-content ${
                  activeIndex === 1 ? "active_time" : ""
                }`}
              >
                <span>2015 - 2018</span>
                <p>
                  <strong>MD Pediatrics</strong>, Prathima Institute of Medical
                  Sciences, Dr. NTRUHS
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                className={`timeline-content ${
                  activeIndex === 2 ? "active_time" : ""
                }`}
              >
                <span>2018 - 2021</span>
                <p>
                  <strong>DNB Neonatology</strong>, Rainbow Children’s Hospital,
                  Banjara Hills, Hyderabad
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                className={`timeline-content ${
                  activeIndex === 3 ? "active_time" : ""
                }`}
              >
                <span>2020 - 2021</span>
                <p>
                  <strong>
                    Head of the Department, Consultant Neonatologist
                  </strong>
                  , Ravi Children’s Hospital, Mahbubnagar
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                className={`timeline-content ${
                  activeIndex === 4 ? "active_time" : ""
                }`}
              >
                <span>2021 - Present</span>
                <p>
                  <strong>Consultant Neonatologist</strong>, Paramitha Women and
                  Children's Hospital, Madinaguda, Hyderabad
                </p>
                <ul>
                  <li>Head of a 22-bedded NICU (NNF accredited).</li>
                  <li>Oversaw academics for the NNF fellowship programme.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
