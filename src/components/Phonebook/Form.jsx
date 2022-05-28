import s from "./Phonebook.module.css";
import { useState } from "react";

function Form({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleNameChange(e) {
    setName(e.currentTarget.value);
  }
  function handleNumberChange(e) {
    setNumber(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(name, number);
    e.target.reset();
  }

  return (
    <form action="" className={s.form} onSubmit={handleSubmit}>
      <fieldset>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
        />
        <br />
        <button type="submit" className={s.form__button}>
          Add contacts
        </button>
      </fieldset>
    </form>
  );
}

export { Form };
