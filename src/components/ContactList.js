import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';

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
      id: T.string,
      number: T.string,
    }),
  ).isRequired,
};

const MapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const getVisibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return { contacts: getVisibleContacts };
};

export default connect(MapStateToProps)(ContactList);
