import React from "react";
import Styles from "./ContactsList.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { removeContact } from "../../redux/phonebook/phoneBook.actions";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} className={Styles.renderLi}>
          {contact.name}: {contact.number}
          <button
            className={Styles.btnLi}
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state),
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = { onDelete: removeContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
