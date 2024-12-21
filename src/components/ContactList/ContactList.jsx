import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactSlice";
import Contact from "../Contact/Contact";
import Style from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return <p>No contacts found for </p>;
  }

  return (
    <ul className={Style.contactList}>
      {filteredContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
