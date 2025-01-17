import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:azim.bakri2002@gmail.com">azim.bakri2002@gmail.com</a>
        </li>
        <li className={styles.link}>                                            
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/muhamad-azim-bin-m-bakri-219406276?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLj4fj7mrSq2x%2B4iPepSqOw%3D%3D">linkedin.com/Muhamad Azim bin M.Bakri</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/aziym">github.com/aziym</a>
        </li>
      </ul>
    </footer>
  );
};