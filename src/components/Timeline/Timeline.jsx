// import "./style.css";
import styles from "./Timeline.module.css";
import { Bed } from "./Icons/Bed";
import { ClinkingGlasses } from "./Icons/ClinkingGlasses";
import { useEffect, useRef } from "preact/hooks";

export function Timeline({ title }) {
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
    const eventOffset = timelineHeight / events.length / 2;
  }, []);

  return (
    <div class={styles.timeline__container} ref={timelineRef}>
      <h3>{title}</h3>
      <div class={styles.timeline}></div>
      <div class={styles.event_wrapper}>
        <div class={styles.event} ref={addToRefs}>
          <span>Check-in</span>
          <span>14:30</span>
          <Bed width="48px" height="48px" />
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Vigsel</span>
          <span>15:00</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Mingel</span>
          <span>15:30</span>
          <ClinkingGlasses width="48px" height="48px" />
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Middag</span>
          <span>17:00</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Tårta</span>
          <span>22:00</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>First dance</span>
          <span>22:30</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Party</span>
          <span>23:00</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Nattamat</span>
          <span>01:00</span>
        </div>
        <div class={styles.event} ref={addToRefs}>
          <span>Dags att gå hem</span>
          <span>02:00</span>
        </div>
      </div>
    </div>
  );
}
