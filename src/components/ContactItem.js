import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import contactsOperations from '../redux/contacts/contactOperations';

function ContactItem({ name, id, number, onRemoveContact }) {
  return (
    <li key={id} className="contactList">
      <p>
        {name}: {number}
      </p>
      <button className="deleteButton" type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: T.string.isRequired,
  id: T.number.isRequired,
  number: T.string.isRequired,
  onRemoveContact: T.func.isRequired,
};

const MapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(contact => contact.id === ownProps.id);
  return { ...item };
};

const MapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ContactItem);
