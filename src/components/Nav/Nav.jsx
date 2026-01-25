import styles from "./Nav.module.css";
import { useLocation } from "preact-iso";
import { useState, useEffect, useRef } from "preact/hooks";

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

  const navRef = useRef(null);

  useEffect(() => {
    setIsNavOpen(false);
  }, [url]);

  function handleClickOutside(event) {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  }

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isNavOpen]);

  return (
    <nav class={`${styles.nav_menu} ${isNavOpen ? styles.open : ""}`} ref={navRef}>
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
          Välkommen
        </a>
        <a href="/brollopsdagen" class={url == "/brollopsdagen" && styles.active}>
          Bröllopet
        </a>
        <a href="/info" class={url == "/info" && styles.active}>
          Info
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
