import { LocationProvider, Router, Route, hydrate, prerender as ssr } from "preact-iso";

import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { DayBefore } from "./pages/DayBefore/index.jsx";
import { WeddingDay } from "./pages/WeddingDay/index.jsx";
import { RSVP } from "./pages/RSVP/index.jsx";
import { Contact } from "./pages/Contact/index.jsx";
import { NotFound } from "./pages/_404.jsx";

import "./style.css";

import { useState, useEffect } from "preact/hooks";

export function App() {
  // const [isVerified, setIsVerified] = useState(localStorage.getItem("isVerified") || false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("locked", !isVerified);

    return () => {
      document.body.classList.remove("locked");
    };
  }, [isVerified]);

  const verifyPassword = (e) => {
    e.preventDefault();
    const input = e.target.password;
    if (input.value === "password") {
      setIsVerified(true);
      localStorage.setItem("isVerified", "true");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <>
      {isVerified ? (
        <LocationProvider>
          <Header />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/innan-brollopsdagen" component={DayBefore} />
            <Route path="/brollopsdagen" component={WeddingDay} />
            <Route path="/osa" component={RSVP} />
            <Route path="/kontakt" component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </LocationProvider>
      ) : (
        <dialog open>
          <form id="verification_form" onSubmit={verifyPassword}>
            <label htmlFor="password">Please enter the password specified in the invitation to access the site.</label>
            <input id="password" name="password" />
            <button>open sesame</button>
          </form>
        </dialog>
      )}
    </>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

// export async function prerender(data) {
//   return await ssr(<App {...data} />);
// }
