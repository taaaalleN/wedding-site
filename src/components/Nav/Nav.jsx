import styles from "./Nav.module.css";
import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";

function NavIcon() {
  return (
    <div id={styles.nav_icon3}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export function Nav() {
  const { url } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav class={`${styles.nav_menu} ${isNavOpen ? styles.open : ""}`}>
      <button
        class={`${styles.toggleNav}`}
        onClick={() => setIsNavOpen((prev) => !prev)}
        aria-expanded={isNavOpen}
        aria-controls="nav_menu"
      >
        {isNavOpen ? "Menu" : "Menu"} {<NavIcon />}
      </button>
      <div class={styles.nav_links}>
        <a href="/" class={url == "/" && styles.active}>
          Hem
        </a>
        <a href="/innan-brollopsdagen" class={url == "/innan-brollopsdagen" && styles.active}>
          Innan bröllopsdagen
        </a>
        <a href="/brollopsdagen" class={url == "/brollopsdagen" && styles.active}>
          Bröllopsdagen
        </a>
        <a href="/osa" class={url == "/osa" && styles.active}>
          O.S.A
        </a>
        <a href="/kontakt" class={url == "/kontakt" && styles.active}>
          Kontakt
        </a>
      </div>
    </nav>
  );
}
