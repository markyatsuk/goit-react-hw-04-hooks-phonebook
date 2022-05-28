import { useState, useEffect } from "react";
import { Contacts } from "./Contacts";
import { nanoid } from "nanoid";
import { Section } from "./Section";
import { Form } from "./Form";
import { Filter } from "./Filter";

function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? [
        {
          id: "id-1",
          name: "Rosie Simpson",
          number: "459-12-56",
        },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    let isNameAlreadyExists = contacts.find((element) => element.name === name);
    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts((prevState) => {
      return [
        ...prevState,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ];
    });
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  function filterContacts() {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    console.dir(normalizedFilter);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function deleteContact(contactId) {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  }

  return (
    <div>
      <Section title="Phonebook">
        <Form onFormSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter filterValue={filter} onChangeFilter={changeFilter} />
        <Contacts contacts={filterContacts()} onDeleteContact={deleteContact} />
      </Section>
    </div>
  );
}

export { Phonebook };
