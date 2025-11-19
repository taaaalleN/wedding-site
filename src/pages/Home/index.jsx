import styles from "./Home.module.css";
import couplesImage from "../../assets/usch.jpg";

import { Countdown } from "../../components/Countdown";

export function Home() {
  return (
    <div class={styles.home}>
      <section class={styles.section__one}>
        <div class="styled">
          <h1>Laurita & Patrick</h1>
          <p class={styles.first}>are getting married</p>
          <p class={styles.second}>on</p>
          <p class={styles.third}>13th of June 2026</p>
        </div>
        <img src={couplesImage} alt="Couple's image" />
      </section>
      <section class={styles.section__two}>
        <Countdown targetDate={"2026-06-13"} countdownText={"Wedding in..."} completionText={"Wedding time!"} />
      </section>
      <section class={styles.section__three}>
        <div>
          <p>Some text</p>
        </div>
      </section>
    </div>
  );
}
