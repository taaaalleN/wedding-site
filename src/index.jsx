import { LocationProvider, Router, Route, hydrate, prerender as ssr } from "preact-iso";

import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { DayBefore } from "./pages/DayBefore/index.jsx";
import { WeddingDay } from "./pages/WeddingDay/index.jsx";
import { RSVP } from "./pages/RSVP/index.jsx";
import { Contact } from "./pages/Contact/index.jsx";
import { NotFound } from "./pages/_404.jsx";

import "./style.css";

export function App() {
  return (
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
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
