import styles from "./WeddingDay.module.css";
import { Timeline } from "../../components/Timeline/Timeline";

export function WeddingDay() {
  return (
    <div class="day-before">
      <h1>Bröllopsdagen</h1>
      <section>
        <Timeline />
      </section>
    </div>
  );
}
