import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Style from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchContacts());
    },
    [dispatch]
  );

  return (
    <>
      <h1>Phonebook</h1>
      <div className={Style.appContainer}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
