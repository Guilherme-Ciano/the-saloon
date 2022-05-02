import React from "react";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarBrand}>
        <h1>The Saloon</h1>
      </div>

      <div className={styles.navbarLinks}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
