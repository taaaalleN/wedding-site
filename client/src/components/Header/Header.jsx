import styles from "./Header.module.css";
import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";

export function Header() {
  const { url } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header class={`${styles.header} ${scroll ? styles.sticky : ""}`}>
      <button class={`${styles.toggleNav} ${navOpen ? styles.open : ""}`} onClick={() => setNavOpen((prev) => !prev)} aria-expanded={navOpen} aria-controls="main-nav">
        {navOpen ? "Close" : "Open"}
      </button>

      <nav id="main-nav" class={navOpen ? styles.open : ""}>
        <a href="/" class={url == "/" && "active"}>
          Hem
        </a>
        <a href="/innan-brollopsdagen" class={url == "/innan-brollopsdagen" && "active"}>
          Innan bröllopsdagen
        </a>
        <a href="/brollopsdagen" class={url == "/brollopsdagen" && "active"}>
          Bröllopsdagen
        </a>
        <a href="/osa" class={url == "/osa" && "active"}>
          O.S.A
        </a>
        <a href="/kontakt" class={url == "/kontakt" && "active"}>
          Kontakt
        </a>
      </nav>
    </header>
  );
}
