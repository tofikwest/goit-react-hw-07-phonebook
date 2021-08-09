import React, { Component } from "react";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";
import ContactForm from "./components/form/ContactForm";
import Section from "./components/section/Section";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
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
