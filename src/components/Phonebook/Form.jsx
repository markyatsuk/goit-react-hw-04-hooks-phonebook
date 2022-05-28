import s from "./Phonebook.module.css";
import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
  };

  render() {
    return (
      <form action="" className={s.form} onSubmit={this.handleSubmit}>
        <fieldset>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" className={s.form__button}>
            Add contacts
          </button>
        </fieldset>
      </form>
    );
  }
}

export { Form };
