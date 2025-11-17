import "./style.css";
import { RSVPForm } from "../../components/RSVPForm/RSVPForm";

export function RSVP() {
  return (
    <div class="rsvp">
      <h1>O.S.A.</h1>
      <p>Här kan du berätta för oss om du kommer och om du tar med dig en kompanjon.</p>
      <section>
        <RSVPForm />
      </section>
    </div>
  );
}
