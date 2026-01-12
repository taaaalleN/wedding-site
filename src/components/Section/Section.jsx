import styles from "./Section.module.css";

export function Section({ title, children }) {
  return (
    <section class={styles.section}>
      <h2>{title}</h2>
      <div class={styles.text_block}>{children}</div>
    </section>
  );
}
