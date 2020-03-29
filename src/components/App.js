import React, { Component } from 'react';
import Layout from './Layout';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import ThemeContext from '../context/ThemeContext';

class App extends Component {
  state = {
    theme: 'light',
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Layout>
          <p>Change theme</p>
          <ButtonThemeChanger
            label={theme}
            theme={theme}
            toggleTheme={this.toggleTheme}
          />

          <h1>Phonebook</h1>

          <h2>Create new contact</h2>
          <ContactEditer />

          {/* {contacts.length > 0 && <h2>Contacts</h2>} */}

          {/* {contacts.length > 1 && (
            <div>
            <h3>Find contact by name</h3>
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            </div>
          )} */}

          <h3>Find contact by name</h3>
          <Filter />

          {/* {visibleContact.length > 0 && <ContactList />} */}
          <ContactList />
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

export default App;
