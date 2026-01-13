import styles from "./Nav.module.css";
import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";

export function Nav() {
  const { url } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav class={`${styles.nav_menu} ${navOpen ? styles.open : ""}`}>
      <button
        class={`${styles.toggleNav}`}
        onClick={() => setNavOpen((prev) => !prev)}
        aria-expanded={navOpen}
        aria-controls="nav_menu"
      >
        {navOpen ? "Close" : "Open"}
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
