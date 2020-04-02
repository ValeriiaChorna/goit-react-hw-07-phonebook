import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import contactsOperations from '../redux/contacts/contactOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

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
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const MapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ContactItem);
