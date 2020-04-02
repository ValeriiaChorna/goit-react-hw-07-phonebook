import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId),
);

// const getContactById = (state, contactId) => {
//   const contacts = getContacts(state);
//   return contacts.find(contact => contact.id === contactId);
// };

export default {
  getContacts,
  getLoading,
  getError,
  getFilter,
  getVisibleContacts,
  getContactById,
};
