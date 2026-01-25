import styles from "./Section.module.css";

export function Section({ children, classNames = "" }) {
  return (
    <section class={`${styles.section} ${classNames}`}>
      <div class={styles.text_block}>{children}</div>
    </section>
  );
}
