import styles from "./RSVP.module.css";
import { RSVPForm } from "../../components/RSVPForm/RSVPForm";

export function RSVP() {
  return (
    <div class={styles.rsvp_page}>
      <section class="white">
        <h2>O.S.A.</h2>
        <div class="text_block">
          <p>Här kan du berätta för oss om du kommer och om du tar med dig en kompanjon.</p>
        </div>
        <RSVPForm />
      </section>
    </div>
  );
}
