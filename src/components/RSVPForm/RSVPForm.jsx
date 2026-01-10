import styles from "./RSVPForm.module.css";
import { useState, useEffect } from "preact/hooks";
import { db } from "../../../firebase.js";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

const defaultState = {
  name: "",
  food: "Kött",
  food_pref: "",
  plus_one: "No",
  second_person_name: "",
  second_person_food: "Kött",
  food_pref_2: "",
  carpool: "",
  sleepover: "",
  arriveFriday: "",
  songWishlist: "",
};

export function RSVPForm() {
  const [inputs, setInputs] = useState(defaultState);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    second_person_name: "",
    food: "",
    second_person_food: "",
  });

  const [touchedState, setTouchedState] = useState({ name: false, second_person_name: false });

  const invitesCollectionRef = collection(db, "invites");
  // const [inviteList, setInviteList] = useState([]);

  // const getInviteList = async () => {
  //   try {
  //     const data = await getDocs(invitesCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setInviteList(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getInviteList();
  // }, []);

  const onSubmitInvite = async () => {
    try {
      await addDoc(invitesCollectionRef, inputs);
      // getInviteList();
    } catch (err) {
      console.error(err);
    }
  };

  // Regex validations
  const nameRegex = /^\D{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    if ((name === "name" || name === "second_person_name") && !nameRegex.test(value)) {
      error = "That's not a valid name!";
    } else if (value.length < 1) {
      error = "You can't leave this field empty!";
    }

    setValidationErrors((errors) => ({ ...errors, [name]: error }));
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const renderValidationFeedback = (fieldName) => {
    const error = validationErrors[fieldName];
    if (!touchedState[fieldName]) return;
    return error ? <span class={styles.errorIcon}>✖</span> : <span class={styles.validIcon}>✓</span>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget); // Från Preact-guiden - osäker på vad göra med denna
    onSubmitInvite();
    e.currentTarget.reset();
    resetForm();
  };

  const resetForm = () => {
    setInputs(defaultState);
  };

  const handleTouched = (e) => {
    if (!e.target.value) return;
    setTouchedState((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const isFormValid =
    Object.values(validationErrors).every((error) => !error) &&
    inputs.name !== "" &&
    (inputs.plus_one !== "Yes" || inputs.second_person_name !== "");

  return (
    <form class={styles.rsvp_form} onSubmit={handleSubmit}>
      <h2>Ge oss info!</h2>
      <div class={`${styles.section_wrapper} ${inputs.plus_one == "Yes" ? styles.active : ""}`}>
        <div class={`${styles.section} ${styles.left}`}>
          <div class={styles.input_group}>
            <div class={styles.name_container}>
              <label for="name">Namn*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={inputs.name}
                onInput={handleChange}
                onBlur={handleTouched}
              />
              {renderValidationFeedback("name")}
            </div>
            <fieldset class={styles.radio}>
              <legend>Alternativ för middag</legend>
              <label for="meat">
                <input
                  type="radio"
                  id="meat"
                  name="food"
                  value="Kött"
                  required
                  checked={inputs.food === "Kött"}
                  onChange={handleChange}
                />
                Kött
              </label>
              <label for="fish">
                <input
                  type="radio"
                  id="fish"
                  name="food"
                  value="Fisk"
                  required
                  checked={inputs.food === "Fisk"}
                  onChange={handleChange}
                />
                Fisk
              </label>
              <label for="veg">
                <input
                  type="radio"
                  id="veg"
                  name="food"
                  value="Veg"
                  required
                  checked={inputs.food === "Veg"}
                  onChange={handleChange}
                />
                Veg
              </label>
            </fieldset>
            <label for="food_pref"></label>
            <input
              type="text"
              id="food_pref"
              placeholder="Här kan du skriva om du har några särskilda matpreferenser, allergier osv."
              class={styles.food_pref}
            />

            <fieldset class={styles.radio}>
              <legend>Tar du med en +1?</legend>
              <label>
                <input
                  type="radio"
                  name="plus_one"
                  value="Yes"
                  checked={inputs.plus_one === "Yes"}
                  onChange={handleChange}
                />
                Ja
              </label>
              <label>
                <input
                  type="radio"
                  name="plus_one"
                  value="No"
                  checked={inputs.plus_one === "No"}
                  onChange={handleChange}
                />
                Nej
              </label>
            </fieldset>
          </div>

          <div class={styles.input_group}>
            <fieldset class={styles.radio}>
              <legend>Vill du/ni samåka med buss från Malmö till Hotell Mossbylund?</legend>
              <label>
                <input
                  type="radio"
                  name="carpool"
                  value="Yes"
                  checked={inputs.carpool === "Yes"}
                  onChange={handleChange}
                />
                Ja
              </label>
              <label>
                <input
                  type="radio"
                  name="carpool"
                  value="No"
                  checked={inputs.carpool === "No"}
                  onChange={handleChange}
                />
                Nej
              </label>
            </fieldset>
            <fieldset class={styles.radio}>
              <legend>Vill du/ni sova över på Hotell Mossbylund?</legend>
              <label>
                <input
                  type="radio"
                  name="sleepover"
                  value="Yes"
                  checked={inputs.sleepover === "Yes"}
                  onChange={handleChange}
                />
                Ja
              </label>
              <label>
                <input
                  type="radio"
                  name="sleepover"
                  value="No"
                  checked={inputs.sleepover === "No"}
                  onChange={handleChange}
                />
                Nej
              </label>
            </fieldset>
            <fieldset class={styles.radio}>
              <legend>Vill du/ni checka in redan på fredag?</legend>
              <label>
                <input
                  type="radio"
                  name="arriveFriday"
                  value="yes"
                  checked={inputs.arriveFriday === "Yes"}
                  onChange={handleChange}
                />
                Ja
              </label>
              <label>
                <input
                  type="radio"
                  name="arriveFriday"
                  value="No"
                  checked={inputs.arriveFriday === "No"}
                  onChange={handleChange}
                />
                Nej
              </label>
            </fieldset>
            <div class={styles.textarea__wrapper}>
              <label for="songWishlist">Finns det några låtar du önskar ska spelas under discodansen?</label>
              <textarea
                name="songWishlist"
                id="songWishlist"
                value={inputs.songWishlist}
                onInput={handleChange}
                rows={10}
              ></textarea>
            </div>
          </div>
        </div>

        <div class={`${styles.section} ${styles.right} ${inputs.plus_one == "Yes" ? styles.active : ""}`}>
          {inputs.plus_one == "Yes" && (
            <div class={styles.input_group}>
              <div class={styles.name_container}>
                <label for="second_person_name">Andra personens namn*</label>
                <input
                  type="text"
                  id="second_person_name"
                  name="second_person_name"
                  required
                  value={inputs.second_person_name}
                  onInput={handleChange}
                  onBlur={handleTouched}
                />
                {renderValidationFeedback("second_person_name")}
              </div>
              <fieldset class={styles.radio}>
                <legend>Protein för person 2</legend>
                <label>
                  <input
                    type="radio"
                    id="meat"
                    name="second_person_food"
                    value="Kött"
                    required
                    checked={inputs.second_person_food === "Kött"}
                    onChange={handleChange}
                  />
                  Kött
                </label>
                <label>
                  <input
                    type="radio"
                    id="fish"
                    name="second_person_food"
                    value="Fisk"
                    required
                    checked={inputs.second_person_food === "Fisk"}
                    onChange={handleChange}
                  />
                  Fisk
                </label>
                <label>
                  <input
                    type="radio"
                    id="veg"
                    name="second_person_food"
                    value="Veg"
                    required
                    checked={inputs.second_person_food === "Veg"}
                    onChange={handleChange}
                  />
                  Veg
                </label>
              </fieldset>
              <label for="food_pref_2"></label>
              <input
                type="text"
                id="food_pref_2"
                placeholder="Här kan du skriva om du har några särskilda matpreferenser, allergier osv."
                class={styles.food_pref}
              />
            </div>
          )}
        </div>
      </div>

      <button class={styles.rsvp_button} disabled={!isFormValid}>
        Skicka in!
      </button>
    </form>
  );
}
