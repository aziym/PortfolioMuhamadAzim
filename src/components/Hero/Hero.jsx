import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Muhamad Azim</h1>
        <p className={styles.description}>
        Highly motivated Bachelor of Computer Science (Software Engineering) student with Honors from
        Universiti Malaysia Pahang Al-Sultan Abdullah. Possesses a strong foundation in software
        development, system analysis and project management supported with hands on experience in
        programming and team projects.
        </p>
        <a href="mailto:azim.bakri2002@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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