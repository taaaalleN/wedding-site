export function RSVPForm() {
  const handleSubmit = () => {};

  return (
    <form>
      <section>
        <h2>Contact information</h2>
        <fieldset>
          <legend>Title</legend>
          <ul>
            <li>
              <label for="title_1">
                <input type="radio" id="title_1" name="title" value="A" />
                Ace
              </label>
            </li>
            <li>
              <label for="title_2">
                <input type="radio" id="title_2" name="title" value="K" />
                King
              </label>
            </li>
            <li>
              <label for="title_3">
                <input type="radio" id="title_3" name="title" value="Q" />
                Queen
              </label>
            </li>
          </ul>
        </fieldset>
        <p>
          <label for="name">Name *:</label>
          <input type="text" id="name" name="username" required />
        </p>
        <p>
          <label for="mail">Email *:</label>
          <input type="email" id="mail" name="user-mail" required />
        </p>
        <p>
          <label for="pwd">Password *:</label>
          <input type="password" id="pwd" name="password" required />
        </p>
      </section>
    </form>
  );
}
