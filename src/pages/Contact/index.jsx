import styles from "./Contact.module.css";
import emma from "../../assets/emma_kroon.jpg";
import maja from "../../assets/maja_carlsson.jpeg";

import ContactCard from "../../components/ContactCard/ContactCard";

export function Contact() {
  return (
    <div>
      <section class="white">
        <h2>Kontakt</h2>
        <p>Här kan du hitta kontaktuppgifter till diverse personer som kan vara av intresse.</p>
        <ContactCard imgUrl={emma} altText="Emma">
          <h4 class="contact_name">Emma Kroon</h4>
          <p class="contact_intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi qui perspiciatis repellat laborum
            suscipit iusto aspernatur id sapiente dolorum consectetur quam, nesciunt ex unde nostrum autem cumque
            inventore quibusdam!
          </p>
          <p class="contact_info">Email: emma.kroon@gmail.com</p>
          <p class="contact_info">Telefon: 0789123124</p>
        </ContactCard>
        <div>
          <h3>Helle</h3>
          <p>Koordinator på Hotell Mossbylund</p>
          <p>Ifall du har några frågor om bröllopslokalen osv.</p>
          <p>Mail: helle@mossbylund.se</p>
          <p>Telefon: +46XXXXXXXX</p>
        </div>
        <div>
          <h3>Toastmadadmememes</h3>
          <div class={styles.grid}>
            <div>
              <img src={emma} alt="Emma Kroon" class={styles.toastmadame_img} />
              <p>Emma Kroon</p>
              <p>Mail: emma@mossbylund.se</p>
              <p>Telefon: +46XXXXXXXX</p>
            </div>
            <div>
              <img src={maja} alt="Maja Carlsson" class={styles.toastmadame_img} />
              <p>Maja Carlsson</p>
              <p>Mail: maja@mossbylund.se</p>
              <p>Telefon: +46XXXXXXXX</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Hotell Mossbylund</h3>
          <p>Bröllopsplats</p>
          <p>Ifall du vill boka rum eller något.</p>
          <p>Mail: helle@mossbylund.se</p>
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
