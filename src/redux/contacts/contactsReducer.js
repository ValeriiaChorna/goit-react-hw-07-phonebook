import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';
// import {
//   ADD_CONTACTS,
//   REMOVE_CONTACTS,
//   CHANGE_FILTER,
// } from './contactsActionTypes';

const addContactFun = (state, action) => {
  const { name } = action.payload.contact;
  const doesExistContact = state.some(contact => contact.name === name);
  if (doesExistContact) {
    alert(`${name} is allready exist in contacts.`);
    return state;
  }
  return [...state, action.payload.contact];
};

const removeContactFun = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const changeFilterFun = (state, action) => action.payload;

const itemsReducer = createReducer([], {
  [contactsActions.addContact]: addContactFun,
  [contactsActions.removeContact]: removeContactFun,
});

const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: changeFilterFun,
});

// function itemsReducer(state = [], { type, payload }) {
//   switch (type) {
//     case contactsActions.addContact.type:
//       const { name } = payload.contact;
//       // const { contacts } = state;
//       const doesExistContact = state.some(contact => contact.name === name);
//       if (doesExistContact) {
//         alert(`${name} is allready exist in contacts.`);
//         return state;
//       }
//       return [...state, payload.contact];

//     case contactsActions.removeContact.type:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// }

// function filterReducer(state = '', { type, payload }) {
//   switch (type) {
//     case contactsActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// }

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
