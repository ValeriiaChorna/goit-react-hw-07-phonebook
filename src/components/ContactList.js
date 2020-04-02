import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import contactsSelectors from '../redux/contacts/contactsSelectors';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id }) => (
        <ContactItem key={id} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.exact({
      name: T.string,
      id: T.number,
      number: T.string,
    }),
  ).isRequired,
};

const MapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(MapStateToProps)(ContactList);
