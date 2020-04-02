import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../redux/contacts/contactsActions';
import contactsSelectors from '../redux/contacts/contactsSelectors';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

const MapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const MapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
