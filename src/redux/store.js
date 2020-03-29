// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    //   theme: themeReducer,
  },
});

export default store;
