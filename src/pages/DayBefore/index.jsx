import couplesImage from "../../assets/hero_1.jpg";
import { Header } from "../../components/Header/Header.jsx";

import Map from "../../components/Map/Map";

export function DayBefore() {
  return (
    <section class="day-before">
      <img class="heroImage" src={couplesImage} alt="Couple's image" />
      <Header />
      <h1>Innan bröllopsdagen</h1>
      <div>
        <p>
          Vi (bröllopsparet) kommer checka in och chillaxa på hotellet fredagen innan bröllopet. Ni är mer än välkomna
          att hänga på och ni kan boka rum för fredagen den 12/6 på egen risk och med egen plånbok.
        </p>
        <p>
          Ni kan boka på <a href="https://mossbylund.se/"> denna länk</a>.
        </p>
        <Map />
      </div>
    </section>
  );
}
