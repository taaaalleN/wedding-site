import { lazy, Suspense } from "preact/compat";

import "leaflet/dist/leaflet.css";

const Map = lazy(() => import("../../components/Map/Map"));

export function DayBefore() {
  return (
    <div>
      <section class="white">
        <h2>Innan bröllopsdagen</h2>
        <div class="text_block">
          <p>
            Vi (bröllopsparet) kommer checka in och chillaxa på hotellet fredagen innan bröllopet. Ni är mer än välkomna
            att hänga på och ni kan boka rum för fredagen den 12/6 på egen risk och med egen plånbok.
          </p>
          <p>
            Ni kan boka på <a href="https://mossbylund.se/"> denna länk</a>.
          </p>
        </div>
        <Suspense fallback={<div style={{ height: 400 }} />}>
          <Map />
        </Suspense>
      </section>
    </div>
  );
}
