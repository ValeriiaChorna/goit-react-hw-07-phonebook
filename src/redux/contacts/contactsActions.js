import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contact/addRequest');
const addContactSuccess = createAction('contact/addSuccess');
const addContactError = createAction('contact/addError');

const fetchContactsRequest = createAction('contact/fetchRequest');
const fetchContactsSuccess = createAction('contact/fetchSuccess');
const fetchContactsError = createAction('contact/fetchError');

const removeContactsSuccess = createAction('contact/removeSuccess');
const removeContactsRequest = createAction('contact/removeRequest');
const removeContactsError = createAction('contact/removeError');

const changeFilter = createAction('contact/changeFilter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsSuccess,
  removeContactsRequest,
  removeContactsError,
  changeFilter,
};
