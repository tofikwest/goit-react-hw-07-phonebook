import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Styles from "./Form.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addContact } from "../../redux/phonebook/phoneBook.actions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();

    const contactFind = this.props.contacts.find(
      (contact) => contact.name === this.state.name
    );

    if (contactFind) {
      alert(`Имя ${this.state.name} занято введите другое имя!`);
      return;
    }
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className={Styles.form}>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            <input
              className={Styles.inputSec}
              type="text"
              name="name"
              placeholder="Имя:"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label>
            <input
              className={Styles.input}
              type="tel"
              name="number"
              placeholder="Телефон:"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={Styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.prototypes = {
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
