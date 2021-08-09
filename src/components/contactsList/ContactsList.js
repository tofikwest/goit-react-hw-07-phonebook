import React from "react";
import { connect } from "react-redux";
import Styles from "./ContactsList.module.css";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import { removeContact } from "../../redux/phonebook/phoneBook.operations";
import {
  getFilteredContacts,
  filterSelector,
  getLoader,
} from "../../redux/phonebook/phoneBook.selectors";

const ContactList = ({ contacts, onDelete, loading }) => {
  return (
    <>
      {loading && (
        <Loader type="ThreeDots" color="#000" height={50} width={50} />
      )}
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
    </>
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

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state),
    filter: filterSelector(state),
    loading: getLoader(state),
  };
};

const mapDispatchToProps = {
  onDelete: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
