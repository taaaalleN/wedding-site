import styles from "./WeddingDay.module.css";
import { Timeline } from "../../components/Timeline/Timeline";

import couplesImage from "../../assets/hero_1.jpg";
import { Header } from "../../components/Header/Header.jsx";

export function WeddingDay() {
  return (
    <section class="day-before">
      <img class="heroImage" src={couplesImage} alt="Couple's image" />
      <Header />
      <Timeline title="Bröllopsdagen" />
    </section>
  );
}
