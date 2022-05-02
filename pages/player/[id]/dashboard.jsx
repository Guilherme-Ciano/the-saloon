import React from "react";
import Sidebar from "../../../components/sidebar";

import styles from "../../../styles/pages/dashboard.module.css";

export default function Dashboard() {
  return (
    <Sidebar>
      <div className={styles.centralPannel}>
        <div class={styles.a}>
          <span class={styles.legend}>Golden League</span>
        </div>
        <div class={styles.b}>
          <span class={styles.legend}>Week Events</span>
        </div>
        <div class={styles.c}>
          <span class={styles.legend}>Quick Game</span>
        </div>
        <div class={styles.d}>
          <span class={styles.legend}>Pratice Arena</span>
        </div>
      </div>
    </Sidebar>
  );
}
