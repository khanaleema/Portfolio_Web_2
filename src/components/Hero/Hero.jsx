import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social media icons

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aleema</h1>
        <p className={styles.description}>
          I am a Web Developer & Web Designer passionate about the web and its advancements and I love experimenting with tough problems.
        </p>
        <a href="mailto:khanaleema770@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/i._.aleemakhan/" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/aleemakhan17/" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/khanaleema" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
