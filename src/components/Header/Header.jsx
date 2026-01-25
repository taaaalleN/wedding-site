import styles from "./Header.module.css";

import { Nav } from "../Nav/Nav";

import couplesImage from "../../assets/hero_1.jpg";

export function Header() {
  return (
    <header class={styles.header}>
      <img class={styles.heroImage} src={couplesImage} alt="Couple's image" />
      <Nav />
    </header>
  );
}
