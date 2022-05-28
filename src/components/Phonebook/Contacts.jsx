import s from "./Phonebook.module.css";
const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact) => {
      return (
        <li key={contact.id} className={s.contact}>
          {contact.name}: <span>{contact.number}</span>
          <button
            type="button"
            className={s.delete_btn}
            onClick={() => {
              onDeleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

export { Contacts };
