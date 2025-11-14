import "./style.css";
import { useEffect, useRef } from "preact/hooks";

export function Timeline() {
  const timelineRef = useRef(null);
  const eventsContainerRef = useRef(null);
  const eventRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !eventRefs.current.includes(el)) {
      eventRefs.current.push(el);
    }
  };

  useEffect(() => {
    const timelineHeight = timelineRef.current.style.height?.replace("px", "");

    const events = eventRefs.current;
    // const gap = timelineHeight / (events.length + 1);
    const eventOffset = timelineHeight / events.length / 2;
    // eventsContainerRef.current.style.marginTop =

    for (let i = 1; i < events.length; i++) {
      events[i].style.marginTop = `${eventOffset}px`;
      // const y = gap * (i + 1);
      // events[i].style.marginTop = `${y}px`;
      // events[i].style.position = "absolute";
      // events[i].style.top = `${y}px`;
      // events[i].style = "translateY(-50%)";
    }
  }, []);

  return (
    <div class="timeline__container" style={{ position: "relative", height: "800px", border: "1px dotted grey" }} ref={timelineRef}>
      Timeline
      <div class="timeline">
        <div class="event" ref={addToRefs}>
          Förmingel
        </div>
        <div class="event" ref={addToRefs}>
          Ceremoni
        </div>
        <div class="event" ref={addToRefs}>
          Glass & mingel
        </div>
        <div class="event" ref={addToRefs}>
          Middag
        </div>
        <div class="event" ref={addToRefs}>
          Tårta
        </div>
        <div class="event" ref={addToRefs}>
          First dance
        </div>
        <div class="event" ref={addToRefs}>
          Party
        </div>
        <div class="event" ref={addToRefs}>
          Körv med bröööd
        </div>
        <div class="event" ref={addToRefs}>
          Dags att gå hem
        </div>
      </div>
    </div>
    // <div class="timeline__container" style={{ position: "relative", height: "800px", border: "1px dotted grey" }} ref={timelineRef}>
    //   Timeline
    //   <div class="timeline" style={{ borderLeft: "2px solid black", position: "absolute", left: "50%", height: "700px", marginTop: "2em", marginLeft: "-1px" }}></div>
    //   <div class="events__container">
    //     <div class="event" ref={addToRefs}>
    //       Förmingel
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Ceremoni
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Glass & mingel
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Middag
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Tårta
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       First dance
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Party
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Körv med bröööd
    //     </div>
    //     <div class="event" ref={addToRefs}>
    //       Dags att gå hem
    //     </div>
    //   </div>
    // </div>
  );
}
