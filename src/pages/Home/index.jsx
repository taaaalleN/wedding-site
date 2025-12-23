import styles from "./Home.module.css";
import couplesImage from "../../assets/hero_1.jpg";

import { Countdown } from "../../components/Countdown";
import { Timeline } from "../../components/Timeline/Timeline";

export function Home() {
  return (
    <div class={styles.home}>
      <section class={styles.section__one}>
        <img class={styles.heroImage} src={couplesImage} alt="Couple's image" />
        <div class="styled">
          <h1>Vi ska gifta oss!</h1>
          <p>
            Du som fått vår inbjudan med länken till denna hemsida är en av de personer som, på ett eller annat vis, är
            de bästa i våra liv. Vi vill förstås att du ska komma till vårt bröllop och dela den dagen med oss!
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
        </div>
      </section>
      <section class={styles.section__two}>
        <Countdown targetDate={"2026-06-13"} countdownText={"Bröllopsdag om..."} completionText={"Bröllopsdags!"} />
      </section>
      <section class={styles.section__three}>
        <Timeline title="Bröllopsdagen" />
      </section>
    </div>
  );
}
