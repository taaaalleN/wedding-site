import styles from "./style.module.css";

export function RSVPForm() {
  const handleSubmit = () => {};

  return (
    <form>
      <section>
        <h2>Ge oss info!</h2>
        <p>
          <label for="name">Namn *:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <fieldset>
          <legend>Tar du med en +1?</legend>
          <ul class={styles.radio}>
            <li>
              <label for="yes">
                <input type="radio" id="yes" name="plus_one" value="Yes" />
                Ja
              </label>
            </li>
            <li>
              <label for="no">
                <input type="radio" id="no" name="plus_one" value="No" />
                Nej
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Vill du/ni samåka med buss från Malmö till Hotell Mossbylund?</legend>
          <ul class={styles.radio}>
            <li>
              <label for="yes">
                <input type="radio" id="yes" name="busride" value="Yes" />
                Ja
              </label>
            </li>
            <li>
              <label for="no">
                <input type="radio" id="no" name="busride" value="No" />
                Nej
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Vill du/ni sova över på Hotell Mossbylund?</legend>
          <ul class={styles.radio}>
            <li>
              <label for="yes">
                <input type="radio" id="yes" name="sleepover" value="Yes" />
                Ja
              </label>
            </li>
            <li>
              <label for="no">
                <input type="radio" id="no" name="sleepover" value="No" />
                Nej
              </label>
            </li>
          </ul>
        </fieldset>
        <div>
          <label for="song-wishlist">Finns det några låtar du önskar ska spelas under discodansen?</label>
          <textarea name="song-wishlist" id="song-wishlist"></textarea>
        </div>
      </section>
    </form>
  );
}
