import styles from "./style.module.css";
import emma from "../../assets/emma_kroon.jpg";
import maja from "../../assets/maja_carlsson.jpeg";

export function Contact() {
  return (
    <div class={styles.contact__wrapper}>
      <h1>Kontakt</h1>
      <section>
        <p>Här kan du hitta kontaktuppgifter till diverse personer som kan vara av intresse.</p>
        <div>
          <h3>Helle</h3>
          <p>Koordinator på Hotell Mossbylund</p>
          <p>Ifall du har några frågor om bröllopslokalen osv.</p>
          <p>Mail: helle@mosbylund.se</p>
          <p>Telefon: +46XXXXXXXX</p>
        </div>
        <div>
          <h3>Toastmadadmememes</h3>
          <div class={styles.grid}>
            <div>
              <img src={emma} alt="Emma Kroon" />
              <p>Emma Kroon</p>
              <p>Mail: emma@mosbylund.se</p>
              <p>Telefon: +46XXXXXXXX</p>
            </div>
            <div>
              <img src={maja} alt="Maja Carlsson" />
              <p>Maja Carlsson</p>
              <p>Mail: maja@mosbylund.se</p>
              <p>Telefon: +46XXXXXXXX</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Hotell Mossbylund</h3>
          <p>Bröllopsplats</p>
          <p>Ifall du vill boka rum eller något.</p>
          <p>Mail: helle@mosbylund.se</p>
          <p>Telefon: +46XXXXXXXX</p>
        </div>
        <div>
          <h3>Brudparet</h3>
          <p>De lyckligt lottade</p>
          <p>Kontakta inte oss är du snäll.</p>
          <p>Mail: paulau@gmail.com</p>
          <p>Telefon: +46XXXXXXXX</p>
        </div>
      </section>
    </div>
  );
}
