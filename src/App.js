import React, { Component } from "react";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";
import ContactForm from "./components/form/ContactForm";
import Section from "./components/section/Section";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm />
        </Section>
        <Section title={"Contacts"}>
          <Filter />
          <ContactsList />
        </Section>
      </>
    );
  }
}
export default App;
