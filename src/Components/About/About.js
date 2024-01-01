import React from 'react'
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.HeroImg}
          src="Image/About/prsnl_photo2.png"
          alt="Image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="Image/About/Frontend.png" alt="Image" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in developing fast and
                optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="Image/About/Backend.png" alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast and optimized APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="Image/About/UI.png" alt="UI/UX" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About
