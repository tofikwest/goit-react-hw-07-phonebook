import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/fetchContactsRequest");
export const getContactsSuccess = createAction("contacts/fetchContactsSuccess");
export const getContactsFailure = createAction("contacts/fetchContactsFailure");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactFailure = createAction("contacts/addContactFailure");

export const filterContact = createAction("contacts/filterСhange");

export const removeContactRequest = createAction(
  "contacts/removeContactRequest"
);
export const removeContactSuccess = createAction(
  "contacts/removeContactSuccess"
);
export const removeContactFailure = createAction(
  "contacts/removeContactFailure"
);
