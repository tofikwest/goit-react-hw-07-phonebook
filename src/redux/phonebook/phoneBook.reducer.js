// react-redux
// import { combineReducers } from "redux";
// import {
//   ADD_CONTACT,
//   FILTER_CONTACTS,
//   REMOVE_CONTACT,
// } from "./phoneBook.types";

// const initialState = {
//   items: [],
//   filter: "",
// };

// const itemsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//     case REMOVE_CONTACT:
//       return {
//         ...state,
//         items: [...state.items.filter((item) => item.id !== action.payload)],
//       };

//     case FILTER_CONTACTS:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const phoneBookReducer = combineReducers({
//   items: itemsReducer,
// });

// export default phoneBookReducer;

// Redux Toolkit
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, filterContacts } from "./phoneBook.actions";

const ItemsReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});

const phoneBookReducer = combineReducers({
  items: ItemsReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
