import styles from "./RSVP.module.css";
import { RSVPForm } from "../../components/RSVPForm/RSVPForm";

import couplesImage from "../../assets/hero_1.jpg";
import { Header } from "../../components/Header/Header.jsx";

export function RSVP() {
  return (
    <section class={styles.rsvp}>
      <img class="heroImage" src={couplesImage} alt="Couple's image" />
      <Header />
      <h1>O.S.A.</h1>
      <p>Här kan du berätta för oss om du kommer och om du tar med dig en kompanjon.</p>
      <div>
        <RSVPForm />
      </div>
    </section>
  );
}
