import React from 'react'

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Varis</h1>
        <p className={styles.description}>
          I'm software developer with 1 year experience using ReactJS and NestJS. Reach out if you'd like to know more!
        </p>
        <a className={styles.contactBtn} href="mailto:vrvarisrana123@gmail.com">Contact Me</a>
      </div>
      <img src="Image/Profile/prsnl_photo1.png" alt="Image" className={styles.HeroImg} />
      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
}

export default Hero
