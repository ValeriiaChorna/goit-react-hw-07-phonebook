import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import Spiner from './Spiner';
import Notification from './Notification';
import ThemeContext from '../context/ThemeContext';
import contactOperations from '../redux/contacts/contactOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <ThemeContext>
        <Layout>
          <p>Change theme</p>
          <ButtonThemeChanger />
          <h1>Phonebook</h1>

          <h2>Create new contact</h2>
          <ContactEditer />

          <h2>Contact</h2>
          <h3>Find contact by name</h3>
          <Filter />

          {this.props.isLoadingContacts && <Spiner />}
          {this.props.errorContacts && (
            <Notification
              message={`Whoops, something went wrong: ${this.props.errorContacts}`}
            />
          )}

          <ContactList />
        </Layout>
      </ThemeContext>
    );
  }
}

const MapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  errorContacts: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
