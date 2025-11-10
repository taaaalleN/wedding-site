import couplesImage from "../../assets/usch.jpg";
import "./style.css";

import { Countdown } from "../../components/Countdown";

export function Home() {
  return (
    <div class="home">
      <section class="section__one">
        <div class="styled">
          <h1>Laurita & Patrick</h1>
          <p class="first">are getting married</p>
          <p class="second">on</p>
          <p class="third">13th of June 2026</p>
        </div>
        <img src={couplesImage} alt="Couple's image" />
      </section>
      <section class="section__two">
        <div>
          <Countdown targetDate={"2026-06-13"} />
        </div>
      </section>
      <section class="section__three">
        <div>
          <p>Some text</p>
        </div>
      </section>
    </div>
  );
}
