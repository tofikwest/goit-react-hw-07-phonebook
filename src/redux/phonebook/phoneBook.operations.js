import axios from "axios";
import {
  addContactFailure,
  addContactRequest,
  addContactSuccess,
  getContactsFailure,
  getContactsRequest,
  getContactsSuccess,
  removeContactFailure,
  removeContactRequest,
  removeContactSuccess,
} from "./phoneBook.actions";

axios.defaults.baseURL = "http://localhost:3000";

const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsFailure(error));
  }
};

const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = { name, number };
    dispatch(addContactRequest());
    try {
      const response = await axios.post("/contacts", contact);
      dispatch(addContactSuccess(response.data));
    } catch (error) {
      dispatch(addContactFailure(error));
    }
  };

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactFailure(error));
  }
};

export { getContacts, addContact, removeContact };
