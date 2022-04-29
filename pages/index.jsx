import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Chips from "../assets/models/Chips";
import styles from "../styles/home/Home.module.css";
import { Suspense } from "react";
import { PerspectiveCamera } from "three";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
        <div className={styles.textBox}>
          <h1>Felling lucky today?</h1>
          <h4>
            Have a great time with your friends on our online casino, gambling
            into thousands of different games
          </h4>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <h2 className={styles.buttonText}>Play Now</h2>
          </button>
          <button className={styles.buttonSecondary}>
            <h2 className={styles.buttonTextSecondary}>About us</h2>
          </button>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Canvas
          camera={{
            position: [0, 4, 6],
            fov: 45,
            near: 0.1,
            far: 1000,
            up: [0, 1, -2],
          }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} position={[0, 0, 1]} />
          <Suspense fallback={null}>
            <Chips />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
