import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
              I am currently a B.S. Computer Science Student from UCR graduating in June 2025. 
              As I enter my senior year this fall at UCR I am keen to secure an internship that aligns with my extensive educational background and practical experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              I am passionately interested in a career in data analytics, fueled by the Google Data Analytics Professional Certificate. My academic and professional endeavors are centered around harnessing the transformative power of data across diverse sectors, from business strategy to sports analytics. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                I have well versed in different activities that I enjoy ranging from my love of sports through participating in Intramural Sports and partaking in a job 
                as a referee and manager with the UCR program for basketball to working with the ACM club as a software developer for their website to boost my technical palette. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
