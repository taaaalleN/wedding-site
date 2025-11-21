import styles from "./RSVPForm.module.css";
import { useState } from "preact/hooks";

const defaultState = { name: "", plus_one: "", food: "Kött", carpool: "", sleepover: "", arriveFriday: "", songWishlist: "" };

export function RSVPForm() {
  const [inputs, setInputs] = useState(defaultState);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    food: "",
  });

  // // Regex validations
  const nameRegex = /^\D{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    if (name === "name" && !nameRegex.test(value)) {
      error = "That's not a valid name!";
    } else if (value.length < 1) {
      error = "You can't leave this field empty!";
    }

    setValidationErrors((errors) => ({ ...errors, [name]: error }));
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const renderValidationFeedback = (fieldName) => {
    const error = validationErrors[fieldName];
    return error ? <span class={styles.errorIcon}>✖</span> : <span class={styles.validIcon}>✓</span>;
    // return error ? <span style={{ color: "red" }}>{error}</span> : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget); // Från Preact-guiden - osäker på vad göra med denna
    e.currentTarget.reset();
    resetForm();
  };

  const resetForm = () => {
    setInputs(defaultState);
  };

  const isFormValid = Object.values(validationErrors).every((error) => !error);

  return (
    <form class={styles.rsvpForm} onSubmit={handleSubmit}>
      <h2>Ge oss info!</h2>
      <p>
        <label for="name">Namn *:</label>
        <input type="text" id="name" name="name" required value={inputs.name} onInput={handleChange} />
        {renderValidationFeedback("name")}
      </p>
      {/* <fieldset>
        <legend>Tar du med en +1?</legend>
        <div class={styles.radio}>
          <div>
            <label for="yes">
              <input type="radio" id="yes" name="plus_one" value="Yes" required checked={inputs.plus_one === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </div>
          <div>
            <label for="no">
              <input type="radio" id="no" name="plus_one" value="No" required checked={inputs.plus_one === "No"} onChange={handleChange} />
              Nej
            </label>
          </div>
        </div>
      </fieldset> */}
      <fieldset>
        <legend>Alternativ för middag</legend>
        <div class={styles.radio}>
          <div>
            <label for="meat">
              <input type="radio" id="meat" name="food" value="Kött" required checked={inputs.food === "Kött"} onChange={handleChange} />
              Kött
            </label>
          </div>
          <div>
            <label for="fish">
              <input type="radio" id="fish" name="food" value="Fisk" required checked={inputs.food === "Fisk"} onChange={handleChange} />
              Fisk
            </label>
          </div>
          <div>
            <label for="veg">
              <input type="radio" id="veg" name="food" value="Veg" required checked={inputs.food === "Veg"} onChange={handleChange} />
              Veg
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Vill du/ni samåka med buss från Malmö till Hotell Mossbylund?</legend>
        <div class={styles.radio}>
          <div>
            <label for="yes">
              <input type="radio" id="yes" name="carpool" value="Yes" checked={inputs.carpool === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </div>
          <div>
            <label for="no">
              <input type="radio" id="no" name="carpool" value="No" checked={inputs.carpool === "No"} onChange={handleChange} />
              Nej
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Vill du/ni sova över på Hotell Mossbylund?</legend>
        <div class={styles.radio}>
          <div>
            <label for="yes">
              <input type="radio" id="yes" name="sleepover" value="Yes" checked={inputs.sleepover === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </div>
          <div>
            <label for="no">
              <input type="radio" id="no" name="sleepover" value="No" checked={inputs.sleepover === "No"} onChange={handleChange} />
              Nej
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Vill du/ni checka in redan på fredag?</legend>
        <div class={styles.radio}>
          <div>
            <label for="yes">
              <input type="radio" id="yes" name="arriveFriday" value="Yes" checked={inputs.arriveFriday === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </div>
          <div>
            <label for="no">
              <input type="radio" id="no" name="arriveFriday" value="No" checked={inputs.arriveFriday === "No"} onChange={handleChange} />
              Nej
            </label>
          </div>
        </div>
      </fieldset>
      <div class={styles.textarea__wrapper}>
        <label for="songWishlist">Finns det några låtar du önskar ska spelas under discodansen?</label>
        <textarea name="songWishlist" id="songWishlist" value={inputs.songWishlist} onInput={handleChange} rows={10}></textarea>
      </div>
      <button style={isFormValid ? { backgroundColor: "" } : { opacity: "0.5", cursor: "not-allowed" }} disabled={!isFormValid}>
        Skicka in!
      </button>
    </form>
  );
}
