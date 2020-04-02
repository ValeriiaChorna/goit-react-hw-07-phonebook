import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const addContactFun = (state, action) => [...state, action.payload];

const removeContactFun = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContactFun,
  [contactsActions.removeContactsSuccess]: removeContactFun,
});

const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: error => error.massage,
  [contactsActions.addContactError]: error => error.massage,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  error,
});
