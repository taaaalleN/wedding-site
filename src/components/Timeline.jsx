import { useEffect } from "preact/hooks";

export function Timeline() {
  useEffect(() => {}, []);

  return (
    <div class="timeline__container" style={{ position: "relative", height: "800px", border: "1px dotted grey" }}>
      Timeline
      <div class="timeline" style={{ borderLeft: "2px solid black", position: "absolute", left: "50%", height: "700px", marginTop: "2em", marginLeft: "-1px" }}></div>
      <div class="event">Förmingel</div>
      <div class="event">Ceremoni</div>
      <div class="event">Glass & mingel</div>
      <div class="event">Middag</div>
      <div class="event">Party</div>
      <div class="event">Körv med bröööd</div>
      <div class="event">Dags att gå hem</div>
    </div>
  );
}
