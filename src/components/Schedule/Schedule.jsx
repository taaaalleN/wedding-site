import styles from "./Schedule.module.css";

function Event({ children }) {
  return <div class={styles.event}>{children}</div>;
}

export function Schedule() {
  return (
    <div class={styles.schedule}>
      <Event>
        <h3 class={styles.event_title}>Check-in</h3>
        <div className={styles.event_info}>
          <p>
            För er som stannar över natten är incheckning möjlig från kl. 15.00. Kom gärna i god tid eller planera dagen
            så att det passar och ni är på plats i god tid till vigseln.
          </p>
        </div>
        <p>15:00</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Vigsel</h3>
        <div className={styles.event_info}>
          <p>
            Vigseln äger rum på plats på Mossbylund och börjar kl. 16.00. Det blir en borgerlig ceremoni som, om vädret
            tillåter, hålls utomhus i vacker miljö.
          </p>
          <p>
            För er som kommer direkt till vigseln är ni varmt välkomna att anlända en liten stund innan, så att vi
            tillsammans kan ta in stunden och börja dagen i ro.
          </p>
        </div>
        <p>16:00</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Mingel</h3>
        <div className={styles.event_info}>
          <p>
            Efter vigseln, ca kl. 16:30, blir det brudskål när vi kommer till minglet, följt av mingel med tilltugg,
            dryck och en liten söt överraskning.
          </p>
        </div>
        <p>16:30</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Middag</h3>
        <div className={styles.event_info}>
          <p>
            Vid kl. 18 sätter vi oss till bords för middag. Vi bjuds på en trerättersmiddag med passande dryck, och
            under kvällen guidar våra toastmadames oss genom allt som händer – en lek eller två och kanske några tal här
            och där. Framför allt blir det en kväll fylld av skratt, god mat och härligt sällskap!
          </p>
        </div>

        <p>18:00</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Tårta</h3>
        <div className={styles.event_info}>
          <p>
            Som de fullfjädrade gottegrisar vi är kan vi aldrig låta bli sötsaker – därför avslutar vi middagen med
            bröllopsstårta, ungefär vid kl. 22
          </p>
        </div>

        <p>22:00</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Första dansen</h3>
        <div className={styles.event_info}>
          <p>
            Efter bröllopsstårtan är det dags att plocka fram dansskorna! Kvällen fortsätter på dansgolvet, och vi
            inleder med vår första dans som brudpar. Sedan blir det dans, skratt och fest långt in på natten.
          </p>
        </div>

        <p>23:00</p>
      </Event>
      <Event>
        <h3 class={styles.event_title}>Dans</h3>
        <div className={styles.event_info}>
          <p>Håll i dansskorna....</p>
        </div>

        <p>23:15</p>
      </Event>
    </div>
  );
}
