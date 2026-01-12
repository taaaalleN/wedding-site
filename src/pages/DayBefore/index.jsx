import Map from "../../components/Map/Map";
import { Section } from "../../components/Section/Section";

export function DayBefore() {
  return (
    <div>
      <Section title="Innan bröllopsdagen">
        <p>
          Vi (bröllopsparet) kommer checka in och chillaxa på hotellet fredagen innan bröllopet. Ni är mer än välkomna
          att hänga på och ni kan boka rum för fredagen den 12/6 på egen risk och med egen plånbok.
        </p>
        <p>
          Ni kan boka på <a href="https://mossbylund.se/"> denna länk</a>.
        </p>
        <Map />
      </Section>
    </div>
  );
}
