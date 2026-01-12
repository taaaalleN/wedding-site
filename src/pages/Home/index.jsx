import styles from "./Home.module.css";

import { Countdown } from "../../components/Countdown";
import { Timeline } from "../../components/Timeline/Timeline";
import { Section } from "../../components/Section/Section";

export function Home() {
  return (
    <div class={styles.home}>
      <Section title="Vi ska gifta oss!">
        <p>
          Du som fått vår inbjudan med länken till denna hemsida är en av de personer som, på ett eller annat vis, är de
          bästa i våra liv. Vi vill förstås att du ska komma till vårt bröllop och dela den dagen med oss!
        </p>
        <p>
          Vi har samlat all information här på hemsidan, på ett och samma ställe för att underlätta för oss alla. Här
          finner du information om vigsel, fest, boende och praktiska detaljer och lite annat som ni kan tänkas vilja
          veta.
        </p>
        <p>
          O.S.A. senast den 1 juni, speciellt viktigt för dig som vill bo på Rånäs Slott över natten. Tveka inte att
          kontakta oss om ni undrar över något. Vi ser fram emot att se er på vårt bröllop!
        </p>
        <p>Kram, Laurita & Patrick</p>
      </Section>
      <Section title="">
        <Countdown targetDate={"2026-06-13"} countdownText={"Bröllopsdag om..."} completionText={"Bröllopsdags!"} />
      </Section>
      <Section title="Bröllopsdagen">
        <Timeline />
      </Section>
      <Section title="Vi ska gifta oss!">
        <p>
          Du som fått vår inbjudan med länken till denna hemsida är en av de personer som, på ett eller annat vis, är de
          bästa i våra liv. Vi vill förstås att du ska komma till vårt bröllop och dela den dagen med oss!
        </p>
        <p>
          Vi har samlat all information här på hemsidan, på ett och samma ställe för att underlätta för oss alla. Här
          finner du information om vigsel, fest, boende och praktiska detaljer och lite annat som ni kan tänkas vilja
          veta.
        </p>
        <p>
          O.S.A. senast den 1 juni, speciellt viktigt för dig som vill bo på Rånäs Slott över natten. Tveka inte att
          kontakta oss om ni undrar över något. Vi ser fram emot att se er på vårt bröllop!
        </p>
        <p>Kram, Laurita & Patrick</p>
      </Section>
    </div>
  );
}
