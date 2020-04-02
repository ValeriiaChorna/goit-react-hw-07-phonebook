import React from 'react';
import Layout from './Layout';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import Spiner from './Spiner';
import Notification from './Notification';

export default function App({ errorContacts, isLoadingContacts }) {
  return (
    <Layout>
      <p>Change theme</p>
      <ButtonThemeChanger />
      <h1>Phonebook</h1>

      <h2>Create new contact</h2>
      <ContactEditer />

      <h2>Contact</h2>
      <h3>Find contact by name</h3>
      <Filter />

      {isLoadingContacts && <Spiner />}
      {errorContacts && (
        <Notification
          message={`Whoops, something went wrong: ${errorContacts}`}
        />
      )}

      <ContactList />
    </Layout>
  );
}
