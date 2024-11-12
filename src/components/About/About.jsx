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
          <img src={getImageUrl("about/user.png")} 
          alt="Cursor icon" 
          className={styles.aboutIcon}
          />
            <div className={styles.aboutItemText}>
              <h3>Full Name</h3>
              <br></br>
              <p>
                Muhamad Azim bin M.Bakri
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/graduation.png")} 
            alt="Cursor icon" 
            className={styles.aboutIcon}
          />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <br></br>
              <p >University Malaysia Pahang Al Sultan Abdullah </p> 
              <p>-  Bachelor of Computer Science (Software Engineering) with Honor</p> 
              <br></br>
              <br></br>
              <p> Kolej Mara Kuala Nerang, Kedah  </p> 
              <p>-  Foundation in Engineering and Technology</p> 
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/marker.png")} 
            alt="Cursor icon" 
            className={styles.aboutIcon}
          />  
            <div className={styles.aboutItemText}>
              <h3>Location</h3>
              <br></br>
              <p >Kuala Lumpur, Malaysia </p>              
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/chart.png")} 
            alt="Cursor icon" 
            className={styles.aboutIcon}
          />    
            <div className={styles.aboutItemText}>
              <h3>Profession</h3>
              <br></br>
              <p >Final Year Student (seeking for internship placement) </p>              
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/megaphone.png")} 
            alt="Cursor icon" 
            className={styles.aboutIcon}
          />   
            <div className={styles.aboutItemText}>
              <h3>Language Proficiency</h3>
              <br></br>
              <p >English, Malay </p>              
            </div>
          </li>
    
        </ul>
      </div>
    </section>
  );  
};