import axios from 'axios';
import contactActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  //   axios
  //     .get(`/contacts?name=${name}`)
  //     .then(response => {
  //       if ((response.data.length = 0)) {
  dispatch(contactActions.addContactRequest());
  axios
    .post(`/contacts`, { name, number })
    .then(response => {
      dispatch(contactActions.addContactSuccess(response.data));
    })
    .catch(error => dispatch(contactActions.addContactError(error)));
  //   }
  //   if (response.data.length > 0) {
  //     alert(`${name} is allready exist in contacts.`);
  //   }
  // })
  // .catch(error => {
  //   console.log(error);
  // });
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get(`/contacts`)
    .then(response => {
      dispatch(contactActions.fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactActions.removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(contactActions.removeContactsSuccess(id));
    })
    .catch(error => dispatch(contactActions.addContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
