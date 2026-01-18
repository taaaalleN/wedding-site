import styles from "./Header.module.css";
import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";

import { Nav } from "../Nav/Nav";

import couplesImage from "../../assets/hero_1.jpg";

export function Header() {
  // const [scroll, setScroll] = useState(false);
  // const [navOpen, setNavOpen] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setScroll(window.scrollY > 50);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <header class={styles.header}>
      <img class={styles.heroImage} src={couplesImage} alt="Couple's image" />
      <Nav />
    </header>
  );
}
