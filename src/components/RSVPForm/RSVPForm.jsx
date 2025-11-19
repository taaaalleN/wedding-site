import styles from "./RSVPForm.module.css";
import { useState } from "preact/hooks";

export function RSVPForm() {
  const [inputs, setInputs] = useState({ name: "", plus_one: "No", carpool: "No", sleepover: "No", wishlist: "" });

  // // Regex validations
  // const nameRegex = /^\D{2,}$/;
  // const emailRegex = /^[A-Z0-9]+@\w+\.\D{2,}$/i;
  // const phoneRegex = /^\d{10}$|^\d{3}(\s|-|\.)\d{3}(\s|-|\.)\d{4}$/;
  // const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  // const firstName = form.querySelector("#first-name");
  // firstName.addEventListener("input", () => {
  //   const isValid = nameRegex.test(firstName.value);
  //   isValid ? (firstName.className = "valid") : (firstName.className = "invalid");
  // });

  // const lastName = form.querySelector("#last-name");
  // lastName.addEventListener("input", () => {
  //   const isValid = nameRegex.test(lastName.value);
  //   isValid ? (lastName.className = "valid") : (lastName.className = "invalid");
  // });

  // const email = form.querySelector("#email");
  // email.addEventListener("input", () => {
  //   const isValid = emailRegex.test(email.value);
  //   isValid ? (email.className = "valid") : (email.className = "invalid");
  // });

  // const phone = form.querySelector("#phone");
  // phone.addEventListener("input", () => {
  //   const isValid = phoneRegex.test(phone.value);
  //   isValid ? (phone.className = "valid") : (phone.className = "invalid");
  // });

  // const password = form.querySelector("#password");
  // password.addEventListener("input", () => {
  //   const isValid = passwordRegex.test(password.value);
  //   isValid ? (password.className = "valid") : (password.className = "invalid error");
  // });

  // const passwordConfirm = form.querySelector("#password-confirm");
  // passwordConfirm.addEventListener("input", () => {
  //   const isValid = passwordRegex.test(passwordConfirm.value) && passwordConfirm.value === password.value;
  //   isValid ? (passwordConfirm.className = "valid") : (passwordConfirm.className = "invalid error");
  // });

  // const inputs = form.querySelectorAll("input");
  // inputs.forEach((input) => {
  //   input.addEventListener("input", () => {
  //     const isValid = input.value.length !== 0;
  //     isValid ? (input.className = "valid") : (input.className = "invalid");
  //   });
  // });

  // const passwordInputs = document.querySelectorAll("input[type='password']");
  // passwordInputs.forEach((input) =>
  //   input.addEventListener("change", (e) => {
  //     console.log(e.target.value);
  //     console.log("e.target.value");
  //   })
  // );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ge oss info!</h2>
      <p>
        <label for="name">Namn *:</label>
        <input type="text" id="name" name="name" required value={inputs.name} onInput={handleChange} />
      </p>
      <fieldset>
        <legend>Tar du med en +1?</legend>
        <ul class={styles.radio}>
          <li>
            <label for="yes">
              <input type="radio" id="yes" name="plus_one" value="Yes" required checked={inputs.plus_one === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </li>
          <li>
            <label for="no">
              <input type="radio" id="no" name="plus_one" value="No" required checked={inputs.plus_one === "No"} onChange={handleChange} />
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
              <input type="radio" id="yes" name="carpool" value="Yes" checked={inputs.carpool === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </li>
          <li>
            <label for="no">
              <input type="radio" id="no" name="carpool" value="No" checked={inputs.carpool === "No"} onChange={handleChange} />
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
              <input type="radio" id="yes" name="sleepover" value="Yes" checked={inputs.sleepover === "Yes"} onChange={handleChange} />
              Ja
            </label>
          </li>
          <li>
            <label for="no">
              <input type="radio" id="no" name="sleepover" value="No" checked={inputs.sleepover === "No"} onChange={handleChange} />
              Nej
            </label>
          </li>
        </ul>
      </fieldset>
      <div>
        <label for="song-wishlist">Finns det några låtar du önskar ska spelas under discodansen?</label>
        <textarea name="song-wishlist" id="song-wishlist" value={inputs.wishlist} onInput={handleChange}></textarea>
      </div>
      <button>Skicka in!</button>
    </form>
  );
}
