import styles from "./WeddingDay.module.css";
import { Timeline } from "../../components/Timeline/Timeline";
import { Section } from "../../components/Section/Section";
import { Schedule } from "../../components/Schedule/Schedule";

export function WeddingDay() {
  return (
    <div>
      <Section classNames={styles.schedule_wrapper}>
        <h2>Bröllopsdagen</h2>
        <Schedule />
      </Section>
      <Section>
        <h2>Vi ska gifta oss!</h2>
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
