import React, { Component } from "react";
import { Contacts } from "./Contacts";
import { nanoid } from "nanoid";
import { Section } from "./Section";
import { Form } from "./Form";
import { Filter } from "./Filter";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevProp, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState(() => {
        return { contacts };
      });
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    let isNameAlreadyExists = contacts.find((element) => element.name === name);

    this.setState((prevState) => {
      if (isNameAlreadyExists) {
        alert(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [
          ...prevState.contacts,
          {
            name,
            id: nanoid(),
            number,
          },
        ],
      };
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Form onFormSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter filterValue={filter} onChangeFilter={this.changeFilter} />
          <Contacts
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export { Phonebook };
