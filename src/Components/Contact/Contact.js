import React from 'react'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.title}>Contact</h3>
        <p>Feel free to react out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="Image/SocialMedia/Mail.png" alt="Email Image" />
          <a href="mailto:vrvarisrana123@gmail.com">vrvarisrana123@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="Image/SocialMedia/LinkedIn.png" alt="LinkedIn Image" />
          <a href="https://www.linkedin.com/in/varis-rana-3976271bb/">
            Linkedin.com/varis-rana
          </a>
        </li>
        <li className={styles.link}>
          <img src="Image/SocialMedia/Github.png" alt="Github Image" />
          <a href="https://github.com/varis1807">github.com/varis1807</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact
