import { lazy, Suspense } from "preact/compat";
import { Section } from "../../components/Section/Section";

import "leaflet/dist/leaflet.css";

const Map = lazy(() => import("../../components/Map/Map"));

export function DayBefore() {
  return (
    <div>
      <Section>
        <h2>Innan bröllopsdagen</h2>
        <p>
          Vi (bröllopsparet) kommer checka in och chillaxa på hotellet fredagen innan bröllopet. Ni är mer än välkomna
          att hänga på och ni kan boka rum för fredagen den 12/6 på egen risk och med egen plånbok.
        </p>
        <p>
          Ni kan boka på <a href="https://mossbylund.se/"> denna länk</a>.
        </p>
        <Suspense fallback={<div style={{ height: 400 }} />}>
          <Map />
        </Suspense>
      </Section>
    </div>
  );
}
