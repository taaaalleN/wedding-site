import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";

export function Header() {
  const { url } = useLocation();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header class={scroll ? "sticky" : ""}>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
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
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
