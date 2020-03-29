import { createAction } from '@reduxjs/toolkit';
import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
  CHANGE_FILTER,
} from './contactsActionTypes';
import uuid from 'uuid';

const addContact = createAction(ADD_CONTACTS, (name, number) => ({
  payload: {
    contact: { id: uuid.v4(), name, number },
  },
}));

const removeContact = createAction(REMOVE_CONTACTS);
const changeFilter = createAction(CHANGE_FILTER);

// const addContact = (name, number) => ({
//   type: ADD_CONTACTS,
//   payload: {
//     contact: { id: uuid.v4(), name, number },
//   },
// });

// const removeContact = contactId => ({
//   type: REMOVE_CONTACTS,
//   payload: {
//     contactId,
//   },
// });

// const changeFilter = filter => ({
//   type: CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });

export default { addContact, removeContact, changeFilter };
