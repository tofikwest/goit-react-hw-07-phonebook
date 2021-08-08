import React from "react";
import Styles from "./Filter.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { filterContacts } from "../../redux/phonebook/phoneBook.actions";

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      <input
        className={Styles.contactInput}
        type="text"
        name="filter"
        placeholder="Поиск по имени..."
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  handleChange: (evt) => filterContacts(evt.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
