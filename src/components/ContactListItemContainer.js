import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contactOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import ContactItem from './ContactItem';

const MapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const MapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ContactItem);
