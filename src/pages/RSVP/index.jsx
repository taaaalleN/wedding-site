import styles from "./RSVP.module.css";
import { RSVPForm } from "../../components/RSVPForm/RSVPForm";
import { Section } from "../../components/Section/Section";

export function RSVP() {
  return (
    <div class={styles.rsvp_page}>
      <Section>
        <h2>O.S.A.</h2>
        <p>Här kan du berätta för oss om du kommer och om du tar med dig en kompanjon.</p>
        <RSVPForm />
      </Section>
    </div>
  );
}
