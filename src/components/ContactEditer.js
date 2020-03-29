import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../redux/contacts/contactsActions';
import T from 'prop-types';

class ContactEditer extends Component {
  static propTypes = {
    onAddContact: T.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="contactEdit">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label>
            <p>Number</p>
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
              required
            ></input>
          </label>

          <button type="submit" className="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = { onAddContact: contactActions.addContact };

export default connect(null, MapDispatchToProps)(ContactEditer);
